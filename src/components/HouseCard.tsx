import Image from "next/image";
import { Star } from "phosphor-react";

export function HouseCard() {
  return (
    <div>
      <div className="relative">
        <button className="meu-botao">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className="block fill-black/50 h-6 w-6 stroke-white stroke-2"
          >
            <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
          </svg>
        </button>

        <Image
          src="https://images.unsplash.com/photo-1584956861988-913b8c1c7270"
          alt="hobbit house"
          width={1262}
          height={947}
          className="w-full aspect-[1/.9] object-cover rounded-xl"
        />
      </div>

      <div className="grid mt-2">
        <div className="flex justify-between">
          <h2 className="font-semibold">Lorem Ipsun, Lorem</h2>
          <span className="flex gap-1 items-center">
            <Star size={14} />
            5.0
          </span>
        </div>
        <div className="text-sm text-zinc-500">500km de distancia</div>
        <div className="text-sm text-zinc-500">17 - 15 de dez.</div>
        <div className="mt-1">
          <span className="font-bold">R$ 557</span> noite
        </div>
      </div>
    </div>
  );
}
