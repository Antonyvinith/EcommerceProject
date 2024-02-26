import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  const add = () => setcount((prev) => prev + 1);
  const subtract = () => setcount((prev) => prev - 1);

  return (
    <div class="root"></div>
    
  );
};

export default Counter;
