import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";

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
    <>
      <Toaster
        position="top-right"
        expand={true}
        richColors
        closeButton
        theme="dark"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </>
  );
};

export default App;
