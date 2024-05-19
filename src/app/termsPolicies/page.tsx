import Breadcrumb from "@/components/Common/Breadcrumb";
import TermsPolicySection from "@/components/About/TermsPolicySection";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "blackhorse terms and policies reliable transportation services in boston",
  description: "Explore the terms and policies governing your relationship with blackhorse. By using our transportation services, you agree to our terms and conditions, privacy policy, and cancellation policy. Understand your rights and obligations.",
  keywords: "blackhorse, Terms and Policies, Transportation Services, Boston, Reliable, Terms and Conditions, Privacy Policy, Cancellation Policy",

}

const TermsPolicyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Terms and Policies"
        description="We’re thrilled to have you on board with blackhorse, your go-to ride for hassle-free transportation in and around Boston. Below are terms and policies that keep things running smoothly for all of us."
      />
      <TermsPolicySection />
    </>
  );
};

export default TermsPolicyPage;
