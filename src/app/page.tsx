'use client'
import { ChevronDown, ChevronUp, FileCode, Github, UserCheck, Users } from "lucide-react";
import { RepositoryData } from "./components/Repository";
import { UserData } from "./components/UserData";
import { FormEvent, useEffect, useState } from "react";
import { getReposByUsername, getUser } from "./services/gihub";
import { User } from "@/types/User";
import {  Repository } from "@/types/Repository";

export default function Home() {
  const [user, setUser] = useState<User| null>(null)
  const [username, setUsername] = useState('')
  const [sort, setSort] = useState('asc')
  const [loadingOrder, setLoadingOrder] = useState(false)
  const [repositories, setRepositories] = useState<Repository[]>([])

  async function handleGetUser(e: FormEvent) {
    e.preventDefault()
    const data = await getUser(username);
    setUser(data)
  }

  function sortRepos(reposList: Repository[]) {
    console.log('chegou sort', sort)
    console.log(reposList)
    if (sort === 'asc') {
      console.log('asc')
      setRepositories(reposList.sort((a, b) => a.stargazers_count - b.stargazers_count));
    } else {
      console.log('desc')
      setRepositories(reposList.sort((a, b) => b.stargazers_count - a.stargazers_count));
    }
    console.log(repositories)
    setLoadingOrder(false)
    // setRepositories(repositoriesOrders);
}
  async function getRepos() {
    const dataRepos = await getReposByUsername(username);
    console.log(dataRepos)
    console.log('chamou sort')
    sortRepos(dataRepos)
  }

  function handleSortRepos() {
    setLoadingOrder(true)
    if(sort === 'asc') {
      setSort('desc')
    } else {
      setSort('asc')
    }
  }

  useEffect(() => {
    if(user) {
      getRepos()
    } else {
      setUser(null)
    }

  }, [user])

  useEffect(() => {
    if(repositories){
      sortRepos(repositories)
    }
  }, [sort])

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 items-center">
      <header className="w-full flex gap-4 sm:flex-row flex-col items-center justify-between px-6 py-6 border-b border-b-slate-800">
        <div className="flex gap-2 items-center">
          <Github className="text-white" /> 
          <span className="text-2xl text-slate-200">
            Desbravador
          </span>
        </div>
        <div>
          <form onSubmit={(e) => handleGetUser(e)} className="flex gap-4 flex-row" action="">
            <input onChange={(e) => setUsername(e.target.value)} className="px-4 py-2 rounded-md" type="text" placeholder="Buscar usuário" />
            <button className="bg-white px-4 py-2 rounded-md text-slate-800" type="submit">Buscar</button>
          </form>
        </div>
      </header>
      <main className="w-full min-h-full flex flex-col items-center px-10 py-10">
        <div>
          {user ? (
              <>
                <UserData user={user} />
                <div className="py-10 flex flex-col gap-4">
                  <div className="flex flex-row items-center justify-between text-slate-50 border-b border-b-slate-800 pb-2">
                    <h1 className="text-lg">Repositórios</h1>
                    {sort === 'asc' ? (
                      <button onClick={handleSortRepos} className="px-4 py-2 rounded-sm flex gap-1 items-center">Stars DESC <ChevronUp className="w-4" /> </button>
                    ) : (
                      <button onClick={handleSortRepos} className="px-4 py-2 rounded-sm flex gap-1 items-center">Stars ASC <ChevronDown className="w-4" /> </button>
                    )}
                  </div>
                  <div>
                    {repositories.map(repos => (
                      <RepositoryData key={repos?.id} repository={repos} />
                    ))}
                  </div>
                </div>
              </>
            ) : (<p className="text-slate-500 font-extralight">Pesquise um usuário válido para ver os dados</p>)
          }
          
        </div>
      </main>

    </div>
  )
}
