import SectionTitle from "../Common/SectionTitle";

const AboutSectionFour = () => {
  return (
    <section itemScope id="termsPolicy">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                name="1"
                title="Booking a ride"
                paragraph="You can easily submit a ride request right here on our website. Just fill out the form with your phone number, pickup location, and destination. Once we receive your request, we'll swing into action. Our team will give you a shout-out via call or WhatsApp to confirm all the details of your ride."
                mb="44px"
              />

              <SectionTitle
                name="2"
                title="Riding with us"
                paragraph="Your safety is our priority. All our drivers are vetted and licensed, and our vehicles are regularly inspected."
                mb="44px"
              />

              <SectionTitle
                name="3"
                title="Cancellations and changes"
                paragraph="We understand that plans can sometimes take an unexpected turn. You have up to 30 minutes before your scheduled pickup time to cancel or make changes to your ride.Need to tweak your pickup location or adjust your ride time? No problem! Simply give us a ring or shoot us a message on WhatsApp, and we'll get everything sorted out for you.Please note that prices may vary based on changes made to your ride, such as modifications to pickup location, destination, or time. We'll always inform you of any price adjustments before finalizing the changes."
                mb="44px"
              />

              <SectionTitle
                name="4"
                title="Payments"
                paragraph="We believe in transparency, which is why we'll always provide you with the estimated price of your ride when we contact you to confirm your booking. You'll know exactly how much your ride will cost before you make any commitments. When it comes time to pay, you have the flexibility to choose between cash, Visa card, Master card, AMEX card."
                mb="44px"
              />

              <SectionTitle
                name="5"
                title="Feedback and support"
                paragraph=" Have a question, concern, or just want to say hi? Our support team is available 24/7 to assist you. We’re always looking to improve. Share your feedback with us, and help us make blackhorse even better."
                mb="44px"
              />

              <SectionTitle
                name="6"
                title="Privacy and security"
                paragraph="We take your privacy seriously. Rest assured that any personal information you share with us is kept safe and secure. We comply with all relevant data protection laws and regulations to safeguard your information."
                mb="44px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionFour;
