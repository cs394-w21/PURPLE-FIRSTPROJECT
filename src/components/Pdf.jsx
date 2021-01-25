import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumeDownloader from "./ResumeDownloader";
import Resume from "./PdfResume";

const Pdf = (props) => {
  // eslint-disable-next-line react/prop-types
  const { loading, resume } = props;
  return (
    <div className="pdf-container">
      {/* <PDFViewer width="100%" height="700px">
        <Resume loading={loading} resume={resume} />
      </PDFViewer> */}
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
