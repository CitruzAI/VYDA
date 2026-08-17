import Hero from "../sections/Hero.jsx";
import BookingWidget from "../sections/BookingWidget.jsx";
import Experience from "../sections/Experience.jsx";
import FeaturedStays from "../sections/FeaturedStays.jsx";
import Destinations from "../sections/Destinations.jsx";
import Rooms from "../sections/Rooms.jsx";
import Dining from "../sections/Dining.jsx";
import Mice from "../sections/Mice.jsx";
import WhyVyda from "../sections/WhyVyda.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import Offer from "../sections/Offer.jsx";
import FinalCta from "../sections/FinalCta.jsx";
import HomeBlogPreview from "../sections/HomeBlogPreview.jsx";
import Amenities from "../sections/Amenities.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <BookingWidget />
      <Experience />
      <FeaturedStays />
      <Amenities />
      <Destinations />
      <Rooms />
      <Dining />
      <Mice />
      <WhyVyda />
      <Testimonials />
      <HomeBlogPreview />
      <Offer />
      <FinalCta />
    </>
  );
}
