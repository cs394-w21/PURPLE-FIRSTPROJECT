import React from "react";

import PropTypes from "prop-types";

const getEmailLink = (email) => `mailto:${email}`;

const BasicInfo = (props) => {
  const { name, phone, email, location } = props;
  return (
    <div className="basic-info-container">
      <div className="name">{name}</div>
      <div className="text">Phone: {phone}</div>
      <div className="email">
        <a target="_blank" href={getEmailLink(email)} rel="noreferrer">
          Email: {email}
        </a>
      </div>
      <div className="text">Location: {location}</div>
    </div>
  );
};

export const BasicInfoProps = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
BasicInfo.propTypes = BasicInfoProps;

export default BasicInfo;
