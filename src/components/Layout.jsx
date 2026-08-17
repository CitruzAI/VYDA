import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import MobileStickyCta from "./MobileStickyCta.jsx";

export default function Layout({ children, stickyCta = true }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return (
    <div className="pb-[68px] md:pb-0">
      <Nav />
      <main>{children}</main>
      <Footer />
      {stickyCta && <MobileStickyCta />}
    </div>
  );
}
