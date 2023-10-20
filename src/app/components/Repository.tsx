import { FileCode } from "lucide-react";

export function Repository() {
  return (
    <a href="">
      <div className="py-4 border-b border-b-slate-800 text-slate-300">
        <div className="flex gap-2 items-center pb-2">
          <FileCode />
          <span className="text-xl">Nome do repositorio</span>
          <span className="text-xs ml-2 outline outline-1 rounded-full px-2">Public</span>
        </div>
        <span className="text-slate-300 font-extralight">Projeto para vaga de frontend na desbravador</span>
        <div className="mt-2">
          <span className="text-xs border rounded-full border-purple-800 bg-purple-800 text-slate-300 px-2 py-1">Typescript</span>
        </div>
      </div>
    </a>
  )
}