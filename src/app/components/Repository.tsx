import { RepositoryItemProps } from "@/types/Repository";
import { FileCode, MoveRight, Star } from "lucide-react";
import Link from "next/link";

export function RepositoryData({ repository, detail }: RepositoryItemProps) {
  return (
    <a href={repository?.html_url} target="_blank">
      <div className="py-6 border-b border-b-slate-800 text-slate-300">
        <div className="flex gap-2 items-center pb-2">
          <FileCode />
          <span className="text-xl">{repository?.name}</span>
          <span className="text-xs ml-2 outline outline-1 rounded-full px-2">{repository?.private === true ? 'Privado' : 'Publico'}</span>
          <span className="ml-auto flex gap-2"><Star className="text-yellow-600 fill-yellow-600 w-4"/> {repository?.stargazers_count}</span>
        </div>
        <span className="text-slate-300 font-extralight">{repository?.description}</span>
        <div className="mt-2 flex flex-row items-center">
          {repository?.language && <span className="text-xs border rounded-full border-purple-800 bg-purple-800 text-slate-300 px-2 py-1">{repository?.language}</span>}
          <Link href={!detail ? `/repository/${repository?.full_name}` : repository.html_url } className="ml-auto flex flex-row gap-2 items-center text-purple-300">
            <span className="text-sm">Ver Detalhes </span>
            <MoveRight className="w-5 h-5"/>
          </Link>
        </div>
      </div>
    </a>
  )
}