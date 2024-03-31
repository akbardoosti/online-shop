import MainSlider from "./components/main-slider";
import CategoryItemsList from "./components/category-items-list";

export default function Home() {
  return (
   <>
    <MainSlider/>
    <div className="my-3">
      <CategoryItemsList/>
    </div>
   </>
  );
}
