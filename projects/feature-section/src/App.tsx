import { RiCheckLine } from "@remixicon/react";
import { Button } from "./components/common/buttons";
import FeatureImg from "../src/assets/img/prism.png";
function App() {
  const FEATURE_LIST = [
    "Minimum 5K image resolution",
    "Various format variants available",
    "Retina display support",
  ];
  return (
    <main className="p-4 min-h-screen bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB]">
      <section className="bg-white py-[14px] rounded shadow-sm sm:rounded-md sm:py-2 xl:py-[9x]">
        <div className="flex flex-col xl:flex-row py-12 px-4 sm:py-16 xl:flex xl:gap-8 xl:p-24 gap-8 sm:gap-16">
          <div className="flex flex-col gap-8  sm:gap-16  xl:h-min xl:m-auto">
            <h2 className="text-4xl font-semibold sm:text-5xl xl:text-6xl">
              Premium abstract images
            </h2>
            <div className="flex flex-col gap-5 ">
              {FEATURE_LIST.map((feature) => (
                <div className="flex gap-3" key={feature}>
                  <RiCheckLine
                    color="#6366F1"
                    className="rounded-full
                  bg-indigo-50 my-auto"
                  />
                  <span className="text-lg text-neutral-600 font-normal">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 sm:gap-[32px]">
              <Button variant="secondary">See pricing</Button>
              <Button>Learn more</Button>
            </div>
          </div>
          <img
            src={FeatureImg}
            className="mt-4 h-[264px] sm:-mt-8 sm:h-[526px] xl:mt-0"
          />
        </div>
      </section>
    </main>
  );
}

export default App;
