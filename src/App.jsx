import React from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import useResume from "./hooks/useResume";
import ResumeDownloader from "./ResumeDownloader";
import Resume from "./Resume";
import "./App.css";

const Pdf = () => {
  const { loading, resume } = useResume("unique-ID");
  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="pdf-container">
      <PDFViewer width="100%" height="700px">
        <Resume loading={loading} resume={resume} />
      </PDFViewer>
      <PDFDownloadLink
        document={<Resume loading={loading} resume={resume} />}
        fileName="resume.pdf"
      >
        {ResumeDownloader}
      </PDFDownloadLink>
    </div>
  );
};

export default Pdf;
