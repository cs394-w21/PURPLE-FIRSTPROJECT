import React from "react";
import useResume from "./hooks/useResume";
import Loading from "./components/Loading";
import ResumeView from "./components/ResumeView";

export default function App() {
  const { loading, resume } = useResume("unique-ID");
  if (loading) return <Loading />;
  return <ResumeView resume={resume} />;
}
