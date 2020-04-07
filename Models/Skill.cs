namespace capstone
{
  public class Skill
  {
    public int Id { get; set; }
    public int Acrobatics { get; set; }
    public bool AcrobaticsProf { get; set; }
    public int AnimalHandling { get; set; }
    public bool AnimalHandlingProf { get; set; }
    public int Arcana { get; set; }
    public bool ArcanaProf { get; set; }
    public int Athletics { get; set; }
    public bool AthleticsProf { get; set; }
    public int Deception { get; set; }
    public bool DeceptionProf { get; set; }
    public int History { get; set; }
    public bool HistoryProf { get; set; }
    public int Insight { get; set; }
    public bool InsightProf { get; set; }
    public int Intimidation { get; set; }
    public bool IntimidationProf { get; set; }
    public int Investigation { get; set; }
    public bool InvestigationProf { get; set; }
    public int Medecine { get; set; }
    public bool MedecineProf { get; set; }
    public int Nature { get; set; }
    public bool NatureProf { get; set; }
    public int Perception { get; set; }
    public bool PerceptionProf { get; set; }
    public int Performance { get; set; }
    public bool PerformanceProf { get; set; }
    public int Persuasion { get; set; }
    public bool PersuasionProf { get; set; }
    public int Religion { get; set; }
    public bool ReligionProf { get; set; }
    public int SleightOfHand { get; set; }
    public bool SleightOfHandProf { get; set; }
    public int Stealth { get; set; }
    public bool StealthProf { get; set; }
    public int Survival { get; set; }
    public bool SurvivalProf { get; set; }
    public int PassivePerception { get; set; }

    //navigation
    public int CharacterId { get; set; }
    public Character Character { get; set; }
  }
}