  const fetching_skills = async () => {
    const response = await fetch("https://myportfolio-backend-knpr.onrender.com/api/skills")
    if (!response.ok)
      return "error"
    const skills = await response.json()
    return skills
  }
  
export default fetching_skills() 
