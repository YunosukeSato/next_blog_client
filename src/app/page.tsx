import { Featured } from "./components/Featured/Featured";
import { CategoryList } from "./components/CategoryList/CategoryList";
import { CardList } from "./components/CardList/CardList";
import { Menu } from "./components/Menu/Menu";

export default function Home() {
  return (
    <>
    <Featured />
    <CategoryList />
    <div>
      <CardList />
      <Menu />
    </div>
    </>
  );
}
