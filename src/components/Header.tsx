import Image from "next/image";
import { MagnifyingGlass, Globe, List, UserCircle } from "phosphor-react";

import Logo from "../assets/logo.svg";
import { Button } from "./Button";

export function Header() {
  return (
    <header className="shadow px-6 xl:px-20 md:px-10">
      <div className="flex items-center w-full mx-auto h-20 justify-between">
        <div className="flex items-center gap-2 lg:flex-1 min-w-fit">
          <Image {...Logo} alt="airbnb" className="fill-rose-500" />
          <span className="text-airbnb font-extrabold text-2xl hidden xl:block">
            airbnb
          </span>
        </div>

        <div className="flex-1">
          <button className="ring-1 px-2 shadow-md hover:shadow-lg transition-shadow ring-zinc-300 rounded-full text-sm flex items-center mx-8">
            <div className="flex-grow flex divide-x divide-zinc-400">
              <span className="px-2 truncate">Qualquer lugar</span>
              <span className="px-2 truncate">Qualquer semana</span>
              <span className="px-2 truncate text-zinc-400">Hóspedes?</span>
            </div>
            <div className="grid place-items-center bg-airbnb rounded-full h-8 w-8 text-white my-2">
              <MagnifyingGlass size={16} />
            </div>
          </button>
        </div>

        <div className="flex-1 flex gap-1 justify-end">
          <div className="items-center lg:flex hidden">
            <Button>
              <span className="truncate text-zinc-800 font-semibold">
                Seja um anfitrião
              </span>
            </Button>

            <Button>
              <Globe size={20} />
            </Button>
          </div>

          <Button buttonType="outline">
            <div className="flex gap-1 text-zinc-800">
              <List size={22} />
              <UserCircle size={22} />
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
}
