import AboutSection from "@/components/About/AboutSection";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "blackhorse Reliable Transportation Services In Boston",
  description: "blackhorse provides comfortable and reliable transportation services in Boston. Learn more about our fleet, safety record, and commitment to customer satisfaction. Contact us for a free quote today.",
  keywords:"blackhorse, About Us, Cab Company, Transportation Services, Boston, Premium, Mission, Vision, Values"
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About us"
        description="We're blackhorse, a transportation company with a passion for getting you where you need to go! We're a bunch of friendly folks who love hitting the open road and sharing the journey. Whether you're a group of friends on a weekend getaway, a family on a big adventure, or a corporate team on the move, we're here to make sure you relax and enjoy the ride."
      />
      <AboutSection />
    </>
  );
};

export default AboutPage;
