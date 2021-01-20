import React from "react";
import ReactPDF from "@react-pdf/renderer";
import useResume from "./hooks/useResume";

console.log(ReactPDF);
function App() {
  const { loading, resume } = useResume("unique-ID");
  if (loading) return <h1>Loading...</h1>;
  console.log(resume);
  return (
    <div>
      <a href="/">
        {" "}
        If your resume did not start downloading automatically, please click
        here.
      </a>
    </div>
  );
}

export default App;
