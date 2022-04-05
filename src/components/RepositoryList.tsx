import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);
  console.log(repositories);

  return (
    <section className="repository-list">
      <h1> Lista de repositório </h1>
      <ul>
        {repositories.map((repository) => {
          // repositories esta sendo mapeado e o repository esta sendo alimentado pelo map
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          ); // retornando estrutura do item e atualizando os parametros no repositoritem
        })}
      </ul>
    </section>
  );
}

//hooks sao funcoes que comecam com use
