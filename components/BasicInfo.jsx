import React from "react";
import { StyleSheet, Text, View, Linking } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    textAlign: "center",
  },
  name: {
    color: "black",
    fontSize: 40,
    padding: 5,
  },
  email: {
    color: "blue",
    textDecorationLine: "underline",
    fontSize: 20,
  },
  text: {
    color: "black",
    fontSize: 20,
  },
});

const useEmailLink = (email) => {
  const gotoEmail = React.useCallback(() => {
    Linking.openURL(`mailto:${email}`);
  }, [email]);
  return gotoEmail;
};

const BasicInfo = (props) => {
  const { name, phone, email, location } = props;
  const gotoEmail = useEmailLink(email);
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.text}>Phone: {phone}</Text>
      <Text style={styles.email} onPress={gotoEmail}>
        Email: {email}
      </Text>
      <Text style={styles.text}>Location: {location}</Text>
    </View>
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
