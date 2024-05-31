import { Label } from "./components/common/label";
import { TSize, TVariant } from "./types/types";

function App() {
  const VARIANTS: TVariant[] = [
    "neutral",
    "error",
    "warning",
    "success",
    "brand",
  ];
  const SIZES: TSize[] = ["small", "medium", "large"];
  return (
    <main>
      <div className="mt-[200px] mx-auto w-60 h-[236px] flex flex-col gap-6">
        {VARIANTS.map((variant) => (
          <div className="flex gap-6 items-center" key={variant}>
            {SIZES.map((size) => (
              <Label variant={variant} size={size} key={`${variant}/ ${size}`}>
                Label
              </Label>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
