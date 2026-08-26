import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Hotels from "./pages/Hotels.jsx";
import HotelDetail from "./pages/HotelDetail.jsx";
import MiceEvents from "./pages/MiceEvents.jsx";
import Partner from "./pages/Partner.jsx";
import Careers from "./pages/Careers.jsx";
import Blog from "./pages/Blog.jsx";
import BlogArticle from "./pages/BlogArticle.jsx";

function RedirectExternal({ to }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);
  return null;
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:slug" element={<HotelDetail />} />
        <Route path="/nivaara" element={<RedirectExternal to="https://nivaarahotels.com/" />} />
        <Route path="/mice-events" element={<MiceEvents />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
      </Routes>
    </Layout>
  );
}
