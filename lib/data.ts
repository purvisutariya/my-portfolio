import portfolioData from "@/db.json"

export const getPersonalInfo = () => {
  return portfolioData.personalInfo
}

export const getAboutInfo = () => {
  return portfolioData.about
}

export const getSkills = () => {
  return portfolioData.skills
}

export const getProjects = () => {
  return portfolioData.projects
}

export const getBlogsData = () => {
  return portfolioData.blogs
}

export const getCV = () => {
  return portfolioData.cv
}

