const getProjects = async () => {
  const response = await fetch("https://my-portfolio-backend-cyan.vercel.app/api/projects")
  

  if (!response.ok)
    return <p> error page</p>

  const projects = await response.json()
  return projects

}
export default getProjects()