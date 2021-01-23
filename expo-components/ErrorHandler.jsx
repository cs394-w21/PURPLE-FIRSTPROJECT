import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";

const ErrorMessage = (props) => {
  const { error } = props;
  return <Text>{error}</Text>;
};

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};

const ErrorHandler = (props) => {
  const { meta } = props;
  const { error, touched } = meta;
  if (!error || !touched) return null;
  return <ErrorMessage error={error} />;
};

ErrorHandler.propTypes = {
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ErrorHandler;
