import React from "react";
// import ReactPDF from '@react-pdf/renderer';
import useResume from "./hooks/useResume";

function App() {
  const { loading, resume } = useResume("unique-ID");
  if (loading) return <h1>Loading...</h1>;
  console.log(resume);
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}

export default App;
