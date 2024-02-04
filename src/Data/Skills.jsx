const fetching_skills = async () => {
  const response = await fetch(
    "https://my-portfolio-backend-cyan.vercel.app/api/skills"
  );
  if (!response.ok) return "error";
  const skills = await response.json();
  return skills;
};

export default fetching_skills();
