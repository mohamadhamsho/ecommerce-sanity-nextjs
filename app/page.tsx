// export const revalidate = 30; // revalidate at most every hour

import Hero from "./components/Hero";
import Newest from "./components/Newest";

export default function Home() {
  return (
    <div className="bg-white ">
      <Hero />
      <Newest />
    </div>
  );
}
