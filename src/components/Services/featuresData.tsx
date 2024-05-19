import { Feature } from "@/types/feature";
import airplane from "../../../public/images/services/airplane.png";
import city from "../../../public/images/services/city.png";
import hotel from "../../../public/images/services/hotel.png";
import festival from "../../../public/images/services/festival.png";
import family from "../../../public/images/services/family.png";
import business from "../../../public/images/services/business.png";
import Image from "next/image";
const featuresData: Feature[] = [
  {
    id: 1,
    icon: <Image src={airplane} alt="airport service" />,
    title: "Airport ",
    paragraph:
      "Arriving or departing from the airport should be seamless and stress-free, and our airport service is designed with just that in mind. Whether you're catching a flight or returning home, our reliable drivers are committed to providing timely and comfortable transportation to and from the airport.",
  },
  {
    id: 1,
    icon: <Image src={family} alt="family service" />,
    title: "Family",
    paragraph:
      "Family outings are precious moments, and our family service is tailored to make them memorable and enjoyable for everyone. Whether it's a day out exploring the city, or attending special events, our family-friendly vehicles are equipped to accommodate your entire group comfortably and safely.",
  },
  {
    id: 1,
    icon: <Image src={hotel} alt="hotel service" />,
    title: "Hotel",
    paragraph:
      "Book a ride for a convenient and comfortable ride straight to your hotel. Whether you're arriving after a long flight or venturing out for an evening, we'll get you there refreshed and ready to explore.  Simply enter your hotel address, and let us handle the rest.",
  },
  {
    id: 1,
    icon: <Image src={festival} alt="event service" />,
    title: "Event",
    paragraph:
      "Ditch the stress of parking and traffic jams! Book a ride and get dropped off right near the event entrance. Focus on the fun and forget about the hassle. Our drivers will navigate the crowds, so you can arrive feeling energized and ready to party.",
  },
  {
    id: 1,
    icon: <Image src={city} alt="city service" />,
    title: "City",
    paragraph:
      "Planning a weekend getaway or visiting family in another city? Skip the long bus rides or train schedules.  Book for a comfortable and convenient city-to-city transfer. Relax and enjoy the scenery.Perfect for groups or those with extra luggage, our city-to-city service gets you to your next adventure seamlessly.",
  },
  {
    id: 1,
    icon: <Image src={business} alt="business service" />,
    title: "Business",
    paragraph:
      "Our comprehensive service takes care of all your company's transportation needs.  Employees enjoy reliable rides to and from work, while you can provide VIP transportation for important clients, partners, or anyone needing a professional touch.",
  },
];
export default featuresData;
