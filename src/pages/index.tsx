import { Filters } from "../components/Filters";
import { Header } from "../components/Header";
import { Houses } from "../components/Houses";

export default function Home() {
  return (
    <>
      <Header />
      <Filters />
      <Houses />
    </>
  );
}
