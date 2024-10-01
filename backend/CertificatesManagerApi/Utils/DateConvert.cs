namespace CertificatesManagerApi.Utils
{
    public class DateConvert
    {
        public static DateOnly StringToDate(string date)
        {
            int year = int.Parse(date.Substring(0, 4));
            int month = int.Parse(date.Substring(5, 2));
            int day = int.Parse(date.Substring(8, 2));

            DateOnly dateOnly = new(year, month, day);

            return dateOnly;
        }

        public static string DateToString(DateOnly dateOnly)
        {
            string year = dateOnly.Year.ToString();
            string month = dateOnly.Month < 10 ? $"0{dateOnly.Month.ToString()}" : dateOnly.Month.ToString();
            string day = dateOnly.Day < 10 ? $"0{dateOnly.Day.ToString()}" : dateOnly.Day.ToString();


            string date = $"{year}-{month}-{day}";

            return date;
        }
    }
}
