import { Route, Routes } from "react-router-dom";

import Footer from "./sections/footer";
import Hero from "./sections/hero";
import Upload from "./sections/upload";
import WaitList from "./sections/waitlist";

const Home = () => (
  <section>
    <Hero />
    <WaitList />
    <Footer />
  </section>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  );
};

export default App;
