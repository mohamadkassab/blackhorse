import SafetySection from "@/components/About/SafetySection";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "blackhorse Stay Safe With Transportation Services In Boston",
  description: "Discover our safety measures and commitment to your well-being at blackhorse. Explore our safety page for essential guidelines, resources, and our dedication to providing a secure environment for all users.",
  keywords: "Safety guidelines, Safety measures, Safety protocols, Safety procedures, Safety precautions, Safety standards, Safety regulations, Safety tips, Safety advice, Safety information",

}

const SafetyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Safety"
        description="At blackhorse, your safety is our top priority. We understand that peace of mind is essential for a relaxing and enjoyable journey. Here's what sets us apart when it comes to safe and reliable transportation. After all, the open road awaits, and we want you to experience it with the confidence of knowing you're in the best hands."
      />
      <SafetySection />
    </>
  );
};

export default SafetyPage;
