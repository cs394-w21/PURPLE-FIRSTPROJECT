import React from "react";
import useResume from "./src/hooks/useResume";
import Loading from "./expo-components/Loading";
import ResumeForm from "./expo-components/ResumeForm";

export default function App() {
  const { loading, resume } = useResume("unique-ID");
  if (loading) return <Loading />;
  return <ResumeForm resume={resume} />;
}
