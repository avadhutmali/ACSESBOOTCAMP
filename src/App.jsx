import React from "react";
import Header from "./components/Header";
import ModelViewer from "./components/ModelViewer";
import Roadmap from "./components/Roadmap";
import CustomEvents from "./components/CustomEvents.jsx";

const App = () => {
  return (
    <div
      className="h-[400vh] w-full"
      style={{
        background: "linear-gradient(180deg, #01072b, #041a41, #062959, #043972, #24528b, #5074a2, #7997b9, #a5bbd1)",
      }}
    >
      <Header/>
      <ModelViewer modelPath="/c.glb" scale={.09} />
      <Roadmap/>
      <CustomEvents/>
      
    </div>
  );
};

export default App;
