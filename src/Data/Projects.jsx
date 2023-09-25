const getProjects = async () => {
  const response = await fetch("https://myportfolio-backend-knpr.onrender.com/api/projects")
  

  if (!response.ok)
    return <p> error page</p>

  const projects = await response.json()
  return projects

}
export default getProjects()