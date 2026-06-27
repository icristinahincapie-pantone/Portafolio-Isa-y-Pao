export interface Service {
  title: string
  description: string
  icon: string
}

export interface TeamMember {
  name: string
  role: string
  years: string
  university: string
  specialty: string
  experience: string[]
  palette: {
    primary: string
    secondary: string
    accent: string
    light: string
  }
  side: "left" | "right"
}

export interface Project {
  title: string
  category: string
  description: string
  results: string
  image: string
  color: string
}

export interface ClientCategory {
  title: string
  logos: { name: string; industry: string }[]
}

export interface CaseStudy {
  title: string
  problem: string
  solution: string
  result: string
  metrics: { label: string; value: string }[]
  color: string
}

export interface Testimonial {
  name: string
  company: string
  role: string
  text: string
  image: string
}
