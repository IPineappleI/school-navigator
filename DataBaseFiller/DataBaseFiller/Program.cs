using System.Text;
using System.Text.Json;

HttpClient client = new()
{
    BaseAddress = new Uri("https://localhost:7066")
};

var lines = File.ReadLines("table.tsv");

foreach (var line in lines)
{
    var split = line.Split('\t');

    using StringContent jsonContent = new(
        JsonSerializer.Serialize(new
        {
            name = split[0],
            rating = split[2] == "-" ? null : split[2],
            enrollees = split[1],
            budgetEnrollees = split[3],
            olympiadWinnersAndAwardees = split[5],
            mathWinners = split[9],
            mathAwardees = split[10],
            csWinners = split[11],
            csAwardees = split[12],
            economicsWinners = split[13],
            economicsAwardees = split[14],
            physicsWinners = split[15],
            physicsAwardees = split[16],
            website = split[7],
            address = split[6],
            imageURL = split[8],
            mathClass = split[17] == "1",
            itClass = split[18] == "1",
            engineeringClass = split[19] == "1",
            businessClass = split[20] == "1"
        }),
        Encoding.UTF8,
        "application/json");

    using var response = await client.PostAsync("Schools", jsonContent);

    try
    {
        response.EnsureSuccessStatusCode();
    }
    catch (Exception)
    {
        var jsonResponse = await response.Content.ReadAsStringAsync();
        Console.WriteLine($"{jsonResponse}\n");
        
        throw;
    }
}
