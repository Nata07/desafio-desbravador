import { RepositoryItemProps } from "@/types/Repository";
import { FileCode, Star } from "lucide-react";

export function RepositoryData({ repository }: RepositoryItemProps) {
  return (
    <a href={repository.html_url} target="_blank">
      <div className="py-6 border-b border-b-slate-800 text-slate-300">
        <div className="flex gap-2 items-center pb-2">
          <FileCode />
          <span className="text-xl">{repository.name}</span>
          <span className="text-xs ml-2 outline outline-1 rounded-full px-2">{repository.private === true ? 'Privado' : 'Publico'}</span>
          <span className="ml-auto flex gap-2"><Star className="text-yellow-600 fill-yellow-600 w-4"/> {repository.stargazers_count}</span>
        </div>
        <span className="text-slate-300 font-extralight">{repository.description}</span>
        <div className="mt-2">
          {repository.language && <span className="text-xs border rounded-full border-purple-800 bg-purple-800 text-slate-300 px-2 py-1">{repository.language}</span>}
        </div>
      </div>
    </a>
  )
}