export type Language = 'it' | 'en'

export interface LocalizedString {
  it: string
  en: string
}

export interface LocalizedArray {
  it: string[]
  en: string[]
}

export interface FocusArea {
  title: LocalizedString
  description: LocalizedString
  tag: LocalizedString
}

export interface ProfileData {
  name: string
  roleTitle: LocalizedString
  subTitle: LocalizedString
  birthDate: string
  birthDateFormatted: LocalizedString
  nationality: LocalizedString
  drivingLicense: LocalizedString
  residence: LocalizedString
  domicile: LocalizedString
  phone: string
  email: string
  linkedinUrl: string
  cvDownloadUrl: string
  avatarUrl: string
  editorialStatement: LocalizedString
  narrativeBio: LocalizedArray
  focusAreas: FocusArea[]
}

export interface ExperienceItem {
  id: string
  organization: string
  role: LocalizedString
  roleCategory: LocalizedString
  period: LocalizedString
  location: LocalizedString
  description: LocalizedString
  highlights: LocalizedArray
  accentColor?: string
}

export interface AcademicDiscipline {
  category: LocalizedString
  courses: LocalizedArray
  description: LocalizedString
}

export interface EducationItem {
  id: string
  institution: string
  degree: LocalizedString
  department: LocalizedString
  period: LocalizedString
  location: LocalizedString
  overview: LocalizedString
  disciplines: AcademicDiscipline[]
}

export interface ResearchTheme {
  id: string
  romanIndex: string
  title: LocalizedString
  field: LocalizedString
  context: LocalizedString
  methodology: LocalizedString
  keyThemes: LocalizedArray
}

export interface LanguageSkill {
  name: LocalizedString
  levelText: LocalizedString
  cefrLevel: string
  certification?: LocalizedString
  certifyingEntity?: string
  description: LocalizedString
}

export interface SkillCategory {
  title: LocalizedString
  subtitle: LocalizedString
  items: Array<{
    name: LocalizedString
    description: LocalizedString
  }>
}

export interface NavigationLink {
  key: string
  href: string
  label: LocalizedString
}
