import "keen-slider/keen-slider.min.css";
import { SlidersHorizontal } from "phosphor-react";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

import db from "../assets/database.json";
import { Container } from "./Container";

export function Filters() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "snap",
    rtl: false,
    slides: { perView: "auto", spacing: 26 },
  });

  return (
    <Container>
      <div className="flex w-full gap-6 mt-5">
        <div ref={sliderRef} className="keen-slider flex-grow">
          {db.categories.map((category) => (
            <div key={category.name} className="keen-slider__slide min-w-fit">
              <button
                onClick={() => setSelectedCategory(category.name)}
                className={`p-3 grid place-items-center gap-2 border-b-2 ${
                  selectedCategory === category.name
                    ? "border-b-zinc-900"
                    : "hover:border-b-zinc-200 border-b-transparent"
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-airbnb" />
                <span className="text-xs text-zinc-900 font-semibold">
                  {category.name}
                </span>
              </button>
            </div>
          ))}
          <div className="bg-gradient-to-l from-transparent to-white absolute inset-y-0 left-0 w-4" />
          <div className="bg-gradient-to-r from-transparent to-white absolute inset-y-0 right-0 w-4" />
        </div>

        <div className="grid place-items-center">
          <button className="flex gap-1 items-center ring-1 ring-zinc-400 rounded px-3 py-3">
            <SlidersHorizontal size={16} />
            <span className="text-sm">Filtros</span>
          </button>
        </div>
      </div>
    </Container>
  );
}
