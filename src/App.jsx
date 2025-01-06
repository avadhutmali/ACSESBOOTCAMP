import React, { useEffect } from "react";
import Header from "./components/Header";
import ModelViewer from "./components/ModelViewer";
import Roadmap from "./components/Roadmap";
import CustomEvents from "./components/CustomEvents.jsx";
import CountDown from "./components/CountDown.jsx";
import Topics from "./components/Topics.jsx";
import Form from "./components/Form.jsx";
import Footer from "./components/Footer.jsx";
import Lenis from "lenis";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();
    //ffff
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <div
      className="min-h-screen w-full overflow-x-hidden"
      style={{
        background:
          "linear-gradient(180deg, #01072b, #041a41, #062959, #043972, #24528b, #5074a2, #7997b9, #a5bbd1)",
      }}
    >
      <Header />
      <ModelViewer modelPath="/c.glb" scale={0.1} />
      <CountDown />
      <Roadmap />
      <CustomEvents />
      <Topics />
      <Form />
      <Footer />
    </div>
  );
};

export default App;
