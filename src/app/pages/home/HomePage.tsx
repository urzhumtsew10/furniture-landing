import { AboutUs, BestSelling, Experience, Header, Hero, Materials, Reviews } from "@/widgets";

export const HomePage = () => {
  return (
    <div className="relative w-full h-230 md:h-271 bg-cover bg-no-repeat bg-[url('/assets/main-background.png')]">
      <Header />
      <Hero />
      <AboutUs />
      <BestSelling />
      <Experience />
      <Materials />
      <Reviews />
    </div>
  );
};
