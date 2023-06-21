import Link from "next/link";
import { Container } from "./Container";
import { HouseCard } from "./HouseCard";

const HOUSES = Array.from({ length: 20 }, (_, idx) => ({
  id: idx + 1,
  image: "https://images.unsplash.com/photo-1584956861988-913b8c1c7270",
  city: "Nova Prata",
  country: "Brasil",
  distance: 1495,
  cost: 557.0,
}));

export function Houses() {
  return (
    <Container>
      <div className="mt-8 grid gap-6 grid-cols-[repeat(auto-fit,minmax(272px,1fr))]">
        {HOUSES.map((house) => (
          <Link key={house.id} href="#">
            <HouseCard />
          </Link>
        ))}
      </div>
    </Container>
  );
}
