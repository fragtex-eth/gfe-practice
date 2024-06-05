import { Button } from "./components/common/button";
import PrismImg from "./assets/img/prism.png";

function App() {
  return (
    <div className="p-4 bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB]">
      <main className="py-14 sm:py-[27px] lg:py-0 shadow rounded bg-[#F9FAFB]">
        <section className="px-3 py-12 sm:py-16 sm:px-4 lg:flex lg:gap-8 lg:px-24 lg:py-0">
          <div className="lg:pt-[206px]">
            <h1 className="text-4xl font-semibold mb-4 sm:text-5xl sm:mb-6 lg:text-6xl">
              Well crafted abstract images
            </h1>
            <p className="mb-8 sm:mb-[64px] text-lg font-normal text-neutral-600 sm:text-xl lg:mb-16">
              High quality abstract images for your projects, wallpaper and
              presentations.
            </p>
            <div className="flex gap-4 mb-12 sm:gap-[32px] sm:mb-8">
              <Button>Learn more</Button>
              <Button variant="secondary">See pricing</Button>
            </div>
          </div>
          <img
            src={PrismImg}
            className="w-[319px] h-[264px] sm:w-[704px] sm:h-[526px] lg:my-[105px] md:w-[704px] md:h-[526px]"
          />
        </section>
      </main>
    </div>
  );
}

export default App;
