import React, { useState } from "react";
import "./App.css";
import MenuList from "./components/MenuList/MenuList";
import DisplayMood from "./components/DisplayMood/DisplayMood";

function App() {
  const [currentMood, setCurrentMood] = useState("");

  return (
    <div>
      <h1 className="text-center">오늘의 기분을 선택해 주세요😄</h1>
      <div>
        <MenuList setCurrentMood={setCurrentMood} />
        <DisplayMood mood={currentMood} />
      </div>
    </div>
  );
}

export default App;
