import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const SafetySection = () => {
  return (
    <section itemScope id="safety">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                name="1"
                title="Regular maintenance"
                paragraph="We take our commitment to safety seriously.  Our certified mechanics meticulously inspect each vehicle, ensuring every system is in top condition. This includes checking brakes, tires, fluid levels, lights, and all safety features. We leave nothing to chance, so you can relax and focus on enjoying the ride."
                mb="44px"
              />

              <SectionTitle
                name="2"
                title="Experienced drivers"
                paragraph=" Our team consists of seasoned professionals who undergo rigorous training and background checks. They're experts in navigating the roads, prioritizing safety above all else."
                mb="44px"
              />

              <SectionTitle
                name="3"
                title="Safety policies"
                paragraph="We have clear and comprehensive safety procedures in place, followed by both drivers and passengers. This includes pre-trip inspections, emergency protocols, and clear communication throughout the journey."
                mb="44px"
              />
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0 ">
                <Image
                  src="/images/about/cab2.jpeg"
                  alt="business cab driving in a safe way."
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

export default SafetySection;
