"use client";

import React from "react";

const CypressTestComponent = () => {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className="flex flex-col gap-8">
      <span>CYPRUS TEST COMPONENT</span>
      <button onClick={() => handleClick()}>Click me</button>
    </div>
  );
};

export default CypressTestComponent;
