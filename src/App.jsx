import React from "react";
import useResume from "./hooks/useResume";
import "./App.css";
import Pdf from "./components/Pdf";
import ResumeView from "./components/ResumeView";

const App = () => {
  const { loading, resume } = useResume(window.location.pathname.substring(1));
  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <Pdf loading={loading} resume={resume} />
      <ResumeView resume={resume} />
    </>
  );
};

export default App;
