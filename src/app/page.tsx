import MainSlider from "./components/main-slider";
import CategoryItemsList from "./components/category-items-list";
import Surprizing from "./components/surprising";
import Shopify from "@/app/components/shopify";

export default function Home() {
  return (
      <>
          <MainSlider/>
          <div className="my-[1.5rem]">
              <Shopify/>
          </div>
          <div className="my-3">
              <CategoryItemsList/>
          </div>

          <div className="mt-4">
              <Surprizing/>
          </div>
      </>
  );
}
