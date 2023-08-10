namespace SchoolNavigatorAPI.Models;

public class School
{
    public int Id { get; set; }
    
    public string Name { get; set; }
    
    public int? Rating { get; set; }
    
    public int Enrollees { get; set; }
    
    public int BudgetEnrollees { get; set; }
    
    public int OlympiadWinnersAndAwardees { get; set; }
    
    public int MathWinners { get; set; }
    
    public int MathAwardees { get; set; }
    
    public int CSWinners { get; set; }
    
    public int CSAwardees { get; set; }
    
    public int EconomicsWinners { get; set; }
    
    public int EconomicsAwardees { get; set; }
    
    public int PhysicsWinners { get; set; }
    
    public int PhysicsAwardees { get; set; }
    
    public string Website { get; set; }
    
    public string Address { get; set; }
    
    public string ImageURL { get; set; }
    
    public bool MathClass { get; set; }
    
    public bool ITClass { get; set; }
    
    public bool EngineeringClass { get; set; }
    
    public bool BusinessClass { get; set; }
}