import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSection = () => {
  return (
    <section itemScope  id="about" >
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                name="1"
                title="What we do"
                paragraph="Need a ride to the airport? We'll get you there on time and stress-free. Planning a weekend escape to the mountains? We'll be your chariot, ready to whisk you away. Got a big event coming up? We'll transport your whole crew in style."
                mb="44px"
              />

              <SectionTitle
                  name="2"
                title="We're more than just a ride"
                paragraph="At blackhorse, we're about the journey, not just the destination. We want to help you create memories that will last a lifetime. So sit back, relax, and let us take the wheel."
                mb="44px"
              />
              <SectionTitle
                name="3"
                title="Why choose blackhorse"
                paragraph="We know how important it is to be on time, so we can be counted on to get you where you need to be, when you need to be there.
                We believe that transportation should be enjoyable. Our drivers are friendly and informative, and our coaches are equipped with all the amenities."
                mb="44px"
              />
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/cab.jpeg"
                  alt="business luxury cabs"
                  fill
                  className="mx-auto max-w-full rounded-sm drop-shadow-three lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
