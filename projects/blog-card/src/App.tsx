import { BlogCard } from "./components/blogCard";
import { IBlogCard } from "./types/types";
import TitleImg from "../src/assets/img/spacejoy-YqFz7UMm8qE-unsplash.jpg";
function App() {
  const BLOG_DATA: IBlogCard = {
    img: TitleImg,
    tags: ["Interior"],
    title: "Top 5 Living Room Inspirations",
    description:
      "Curated vibrants colors for your living, make it pop & calm in the same time.",
    link: "#",
  };
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] pt-[120px] flex justify-center">
      <BlogCard {...BLOG_DATA} />
    </main>
  );
}

export default App;
