
import React from "react";
import Hero from "./pages/home/hero/Hero";
import Wood from "./pages/home/beerSoGood/wood";
import Paperbg from "./pages/home/PaperBg/Paperbg";
import Divider from "./pages/home/divider/divider";
import Discover from "./pages/home/discoverBeer/Discover";
import Section5 from "./pages/home/section5/Section5";
import Section6 from "./pages/home/section6/section6";
import Review from "./pages/home/testimonial/Review";
import Divider2 from "./pages/home/divider2/divider2";
import Articles from "./pages/home/recentArticles/Articles";
import Histories from "./pages/home/history/Histories";



function App() {
  return (
    <>
      <Hero />
      <Wood />
      <Paperbg />
      <Histories />
      <Divider />
      <Discover />
      <Section5 />
      <Section6 />
      <Review />
      <Divider2 />
      <Articles />

    </>
  )
}

export default App


