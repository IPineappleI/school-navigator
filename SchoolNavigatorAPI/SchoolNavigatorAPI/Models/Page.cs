namespace SchoolNavigatorAPI.Models;

public class Page
{
    public long Total { get; set; }
    
    public List<School> Content { get; set; }

    public Page(long total, List<School> content)
    {
        Total = total;
        Content = content;
    }
}