import { useEffect, useState } from "react"
import type { GitHubUser } from "../types/gitHubUser";


export const DevCard = () => {
  const [user, setUser] = useState<GitHubUser | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/LucoVilanculos")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  function getLevel(repos: number): string {
    if (repos < 5) return "🟢 Iniciante";
    if (repos < 15) return "🟡 Intermediário";
    return "🔴 Avançado";
  }

  if (!user) return <p className="text-center mt-10 text-blue-950 font-bold">Loading...</p>;

  return (
    <div className="w-80 h-70 mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl text-center space-y-4">
      <img
        src={user.avatar_url}
        alt="avatar"
        className="w-20 h-20 mx-auto rounded-full border-4 border-blue-500"
      />
      <h2 className="text-2xl font-bold text-gray-800">{user.login}</h2>
      <p className="text-gray-600 font">Repositórios: {user.public_repos}</p>
      <p className="text-lg font-semibold">{getLevel(user.public_repos)}</p>
    </div>
  );
}