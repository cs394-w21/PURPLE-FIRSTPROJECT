import React from "react";
import queryString from "query-string";
import useResume from "./hooks/useResume";
import "./App.css";
import Pdf from "./components/Pdf";
import ResumeView from "./components/ResumeView";

const App = () => {
  const { loading, resume } = useResume(
    queryString.parse(window.location.search).id
  );
  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <Pdf loading={loading} resume={resume} />
      <ResumeView resume={resume} />
    </>
  );
};

export default App;
