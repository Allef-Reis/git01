import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import { Repository } from "../model/IRepository";

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  useEffect(() => {
    fetch("https://api.github.com/users/allef-reis/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);
  console.log(repositories);

  return (
    <section className="repository-list">
      <h1> Lista de repositório </h1>
      <ul>
        {repositories.map((i) => {
          return (
            <RepositoryItem key={i.name} repository={i} />
          );
        })}
      </ul>
    </section>
  );
}