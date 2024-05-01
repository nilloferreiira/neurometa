import { ChevronLeft, ChevronRight, Dot  } from "lucide-react";
import Link from "next/link";

interface SideBarProps {
  isAsideOpen: boolean
  setIsAsideOpen: () => void
}

export function Aside({isAsideOpen, setIsAsideOpen}: SideBarProps) {

  return (
    <aside className={`transition-all ${isAsideOpen ? 'w-2/4 md:w-1/6' : 'w-16'} p-4 flex flex-col gap-5 items-center justify-start h-screen bg-white`}>
      <button
        className="w-full pl-2 transition-all"
        onClick={setIsAsideOpen}
      >
        {/* quando aberto colocar para direita */}
        {isAsideOpen ? <ChevronRight /> : <ChevronLeft />}
        
      </button>
      {isAsideOpen && (
        <ul className="w-full space-y-2">
          <li className="flex items-center justify-start hover:opacity-80">
            <Dot /> <Link href={"#"}>Lista de psicologos</Link>
          </li>
          <li className="flex items-center justify-start hover:opacity-80">
            <Dot /> <Link href={"#"}>Lista de psicologos</Link>
          </li>
          <li className="flex items-center justify-start hover:opacity-80">
            <Dot /> <Link href={"#"}>Lista de psicologos</Link>
          </li>
        </ul>
      )}
    </aside>
  );
}