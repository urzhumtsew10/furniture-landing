import { Container, FeatureSection, SectionTitle } from "@/shared";

export const AboutUs = () => {
  return (
    <section className="flex justify-center">
      <Container className="py-[32px] lg:pb-[120px] flex flex-wrap xl:flex-nowrap justify-center xl:justify-between items-center">
        <SectionTitle
          text="Why Choosing Us"
          className="text-center xl:text-start w-100 xl:w-2xs mb-6 md:mb-20 xl:mb-0"
        />
        <FeatureSection />
      </Container>
    </section>
  );
};
