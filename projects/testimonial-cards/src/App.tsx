import "./App.css";
import { ITestCard } from "./types/types";
import { TestimonialCard } from "./components/common/testimonial-card";
import SdoleImg from "./assets/img/profile-thumbnail.png";

function App() {
  const CARD_DATA: ITestCard = {
    img: SdoleImg,
    name: "Sarah Dole",
    username: "@sarahdole",
    text: `I've been searching for high-quality abstract images for my design <br/> projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!`,
  };
  return (
    <div className="h-screen">
      <main className="h-full bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] pt-[200px]">
        <TestimonialCard {...CARD_DATA} />
      </main>
    </div>
  );
}

export default App;
