'use client'
import { RepositoryData } from "@/app/components/Repository"
import { getReposDetails } from "@/app/services/gihub"
import { Repository, RepositoryItemProps } from "@/types/Repository"
import { MoveLeft } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
interface Props {
  params: {
    data: string[]
  }
}

export default function RepositoryItem({ params }: Props) {
  const [login, repo] = params.data
  const [repository, setRepository] = useState<Repository>()
  console.log(login, repo)

  async function getRepoDetail() {
    const response = await getReposDetails(login, repo);
    console.log('response')
    console.log(response)
    setRepository(response)
  }

  useEffect(() => {
    if(login && repo) {
      getRepoDetail()
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 items-center">
      <header className="w-full flex gap-4 sm:flex-row flex-col items-center justify-center px-6 py-6 border-b border-b-slate-800">
        <div className="max-w-5xl w-full">
          <Link href="/" className="flex gap-2 items-center ">
            <MoveLeft className="text-white" /> 
            <span className="text-sm text-slate-200">
              Voltar
            </span>
          </Link>
        </div>
      </header>
      <div className="max-w-5xl w-full px-10">
        <h1 className="text-2xl py-4 text-slate-300">Detalhes</h1>
        {repository && <RepositoryData repository={repository} detail /> }
      </div>
    </div>
  )
}
