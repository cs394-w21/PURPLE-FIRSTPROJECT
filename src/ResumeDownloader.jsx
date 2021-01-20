import PropTypes from "prop-types";

const PdfDownloader = ({ loading }) =>
  loading ? `Loading...` : `Click here to download.`;

PdfDownloader.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default PdfDownloader;
