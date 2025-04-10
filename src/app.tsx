import { Lanes } from "./components/app/lanes";
import { Timeline } from "./components/app/timeline";

export function App() {
  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-6 px-6">
      <Timeline />
      <Lanes />
    </div>
  );
}
