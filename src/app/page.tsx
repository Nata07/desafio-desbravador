import { ChevronDown, ChevronUp, FileCode, Github, UserCheck, Users } from "lucide-react";
import Image from "next/image";
import { Repository } from "./components/Repository";

export default function Home() {
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
          <form className="flex gap-4 flex-row" action="">
            <input className="px-4 py-2 rounded-md" type="text" placeholder="Buscar usuário" />
            <button className="bg-white px-4 py-2 rounded-md text-slate-800" type="submit">Buscar</button>
          </form>
        </div>
      </header>
      <main className="w-full min-h-full flex flex-col items-center px-10 py-10">
        <div>
          <div className="content flex flex-col">
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-4 items-center">
                {/* <Image width={40} height={40} src="https://github.com/Nata07.png" alt="Profile" /> */}
                <img className="w-24 h-24 rounded" src="https://github.com/Nata07.png" alt="Default avatar"></img>
                <div className="flex flex-col gap-1 text-slate-50">
                  <h1 className="text-2xl">Natanael</h1>
                  <span className="text-md text-slate-400 font-extralight">Nata07</span>
                  <span className="text-md text-slate-400 font-extralight">nata.mw@hotmail.com</span>
                </div>
              </div>
              <p className="text-base text-slate-300">Desenvolvedor Web/Mobile.. Apaixonado por tecnologias e desenvolver soluções para ajudar as pessoas.</p>
              <div className="flex flex-row gap-5 text-slate-300">
                <div className="flex gap-2">
                  <UserCheck />
                  <p>156 Seguindo</p>
                </div>
                <div className="flex gap-2">
                  <Users />
                  <p>156 seguidores</p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-10 flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between text-slate-50 border-b border-b-slate-800 pb-2">
              <h1 className="text-lg">Repositórios</h1>
              <button className="px-4 py-2 rounded-sm flex gap-1 items-center">Ordenar <ChevronUp className="w-4" /> </button>
            </div>
            <div>
              <Repository />
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
