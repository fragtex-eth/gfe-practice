import { ProfileCard } from "./components/ProfileCard";
import { IProfileCard } from "./types/types";
import ProfilePicture from "../src/assets/img/profile.png";
function App() {
  const PROFILE_CARD_DATA: IProfileCard = {
    img: ProfilePicture,
    name: "Sarah Dole",
    occupation: "Front End Engineer @ Microsoft",
    description:
      "I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.",
  };
  return (
    <div className="h-screen">
      <main className="h-full bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] pt-[200px] ">
        <ProfileCard {...PROFILE_CARD_DATA} />
      </main>
    </div>
  );
}

export default App;
