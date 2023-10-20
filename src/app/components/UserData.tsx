import { UserProps } from "@/types/User";
import { UserCheck, Users } from "lucide-react";

export function UserData({ user }: UserProps) {
  return (
    <div className="content flex flex-col">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-4 items-center">
          {/* <Image width={40} height={40} src="https://github.com/Nata07.png" alt="Profile" /> */}
          <img className="w-24 h-24 rounded" src={user?.avatar_url} alt="Avatar"/>
          <div className="flex flex-col gap-1 text-slate-50">
            <h1 className="text-2xl">{user?.name}</h1>
            <span className="text-md text-slate-400 font-extralight">{user?.login}</span>
            <span className="text-md text-slate-400 font-extralight">{user?.email}</span>
          </div>
        </div>
        <p className="text-base text-slate-300">{user?.bio}</p>
        <div className="flex flex-row gap-5 text-slate-300">
          <div className="flex gap-2">
            <UserCheck />
            <p>{user?.following} Seguindo</p>
          </div>
          <div className="flex gap-2">
            <Users />
            <p>{user?.followers} seguidores</p>
          </div>
        </div>
      </div>
    </div>
  )
}