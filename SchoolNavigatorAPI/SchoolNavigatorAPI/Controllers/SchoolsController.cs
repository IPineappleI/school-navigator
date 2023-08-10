using System.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic.CompilerServices;
using Npgsql;
using SchoolNavigatorAPI.Models;
using SchoolNavigatorAPI.Utility;

namespace SchoolNavigatorAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class SchoolsController : ControllerBase
{
    [HttpPost]
    public IActionResult Post(School school)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        try
        {
            Create(school).Wait();
        }
        catch (AggregateException e)
        {
            return BadRequest(e.Message);
        }

        return Ok();
    }
    
    private static async Task Create(School school)
    {
        const string commandText = "INSERT INTO schools (name, rating, enrollees, budget_enrollees, " +
                                   "olympiad_winners_and_awardees, math_winners, math_awardees, " +
                                   "cs_winners, cs_awardees, economics_winners, economics_awardees, " +
                                   "physics_winners, physics_awardees, website, address, image_url, " +
                                   "math_class, it_class, engineering_class, business_class) " +
                                   "VALUES (@name, @rating, @enrollees, @budget_enrollees, " +
                                   "@olympiad_winners_and_awardees, @math_winners, @math_awardees, " +
                                   "@cs_winners, @cs_awardees, @economics_winners, @economics_awardees, " +
                                   "@physics_winners, @physics_awardees, @website, @address, @image_url, " +
                                   "@math_class, @it_class, @engineering_class, @business_class)";

        await using var cmd = new NpgsqlCommand(commandText, DataBase.Connection);

        cmd.Parameters.AddWithValue("name", school.Name);
        cmd.Parameters.AddWithValue("rating", school.Rating == null ? DBNull.Value : school.Rating);
        cmd.Parameters.AddWithValue("enrollees", school.Enrollees);
        cmd.Parameters.AddWithValue("budget_enrollees", school.BudgetEnrollees);
        cmd.Parameters.AddWithValue("olympiad_winners_and_awardees", school.OlympiadWinnersAndAwardees);
        cmd.Parameters.AddWithValue("math_winners", school.MathWinners);
        cmd.Parameters.AddWithValue("math_awardees", school.MathAwardees);
        cmd.Parameters.AddWithValue("cs_winners", school.CSWinners);
        cmd.Parameters.AddWithValue("cs_awardees", school.CSAwardees);
        cmd.Parameters.AddWithValue("economics_winners", school.EconomicsWinners);
        cmd.Parameters.AddWithValue("economics_awardees", school.EconomicsAwardees);
        cmd.Parameters.AddWithValue("physics_winners", school.PhysicsWinners);
        cmd.Parameters.AddWithValue("physics_awardees", school.PhysicsAwardees);
        cmd.Parameters.AddWithValue("website", school.Website);
        cmd.Parameters.AddWithValue("address", school.Address);
        cmd.Parameters.AddWithValue("image_url", school.ImageURL);
        cmd.Parameters.AddWithValue("math_class", school.MathClass);
        cmd.Parameters.AddWithValue("it_class", school.ITClass);
        cmd.Parameters.AddWithValue("engineering_class", school.EngineeringClass);
        cmd.Parameters.AddWithValue("business_class", school.BusinessClass);

        await cmd.ExecuteNonQueryAsync();
    }
    
    [HttpGet("GetPage")]
    public IActionResult Get(int pageSize, int page)
    {
        if (pageSize < 1 || page < 1)
        {
            return BadRequest("page size and page number cannot be less than 1");
        }
        
        var result = ReadPage(pageSize, page).Result;

        return result == null ? NotFound("schools not found") : Ok(new Page(GetCount().Result!.Value, result));
    }

    private static async Task<List<School>?> ReadPage(int pageSize, int page)
    {
        var schools = new List<School>();

        long offset = pageSize * (page - 1);
        
        var commandText = $"SELECT * FROM schools OFFSET {offset} LIMIT {pageSize}";

        await using var cmd = new NpgsqlCommand(commandText, DataBase.Connection);

        await using var reader = await cmd.ExecuteReaderAsync();
        while (await reader.ReadAsync())
        {
            schools.Add(Read(reader));
        }

        return schools;
    }
    
    [HttpGet]
    public IActionResult Get()
    {
        var result = ReadAll().Result;

        return result == null ? NotFound("schools not found") : Ok(result);
    }
    
    private static async Task<List<School>?> ReadAll()
    {
        var schools = new List<School>();

        const string commandText = "SELECT * FROM schools";

        await using var cmd = new NpgsqlCommand(commandText, DataBase.Connection);

        await using var reader = await cmd.ExecuteReaderAsync();
        while (await reader.ReadAsync())
        {
            schools.Add(Read(reader));
        }

        return schools;
    }
    
    private static School Read(IDataRecord reader)
    {
        var id = (reader["id"] as int?)!.Value;
        var name = (reader["name"] as string)!;
        var rating = reader["rating"] as int?;
        var enrollees = (reader["enrollees"] as int?)!.Value;
        var budgetEnrollees = (reader["budget_enrollees"] as int?)!.Value;
        var olympiadWinnersAndAwardees = (reader["olympiad_winners_and_awardees"] as int?)!.Value;
        var mathWinners = (reader["math_winners"] as int?)!.Value;
        var mathAwardees = (reader["math_awardees"] as int?)!.Value;
        var csWinners = (reader["cs_winners"] as int?)!.Value;
        var csAwardees = (reader["cs_awardees"] as int?)!.Value;
        var economicsWinners = (reader["economics_winners"] as int?)!.Value;
        var economicsAwardees = (reader["economics_awardees"] as int?)!.Value;
        var physicsWinners = (reader["physics_winners"] as int?)!.Value;
        var physicsAwardees = (reader["physics_awardees"] as int?)!.Value;
        var website = (reader["website"] as string)!;
        var address = (reader["address"] as string)!;
        var imageURL = (reader["image_url"] as string)!;
        var mathClass = (reader["math_class"] as bool?)!.Value;
        var itClass = (reader["it_class"] as bool?)!.Value;
        var engineeringClass = (reader["engineering_class"] as bool?)!.Value;
        var businessClass = (reader["business_class"] as bool?)!.Value;

        var school = new School
        {
            Id = id,
            Name = name,
            Rating = rating,
            Enrollees = enrollees,
            BudgetEnrollees = budgetEnrollees,
            OlympiadWinnersAndAwardees = olympiadWinnersAndAwardees,
            MathWinners = mathWinners,
            MathAwardees = mathAwardees,
            CSWinners = csWinners,
            CSAwardees = csAwardees,
            EconomicsWinners = economicsWinners,
            EconomicsAwardees = economicsAwardees,
            PhysicsWinners = physicsWinners,
            PhysicsAwardees = physicsAwardees,
            Website = website,
            Address = address,
            ImageURL = imageURL,
            MathClass = mathClass,
            ITClass = itClass,
            EngineeringClass = engineeringClass,
            BusinessClass = businessClass
        };

        return school;
    }
    
    private static async Task<long?> GetCount()
    {
        const string commandText = "SELECT count(*) AS exact_count FROM schools";

        await using var cmd = new NpgsqlCommand(commandText, DataBase.Connection);

        return cmd.ExecuteScalarAsync().Result as long?;
    }
}