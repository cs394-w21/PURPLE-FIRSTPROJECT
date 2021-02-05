import "react-native-get-random-values";
import React from "react";
import { v4 as uuid } from "uuid";
import { View, Button } from "react-native";
import PropTypes from "prop-types";
import FormField from "./FormField";
import styles from "../expo-utils/styles";
import FieldList from "./FieldList";
import ExperienceItem from "./ExperienceItem";

// const ExperienceItem = (props) => {
//   const { index, remove } = props;
//   const removeItem = React.useCallback(() => {
//     remove(index);
//   }, [index, remove]);
//   return (
//     <View style={styles.listChunk}>
//       <FormField label="Name" name={`experience[${index}].name`} />
//       <FormField label="Start" name={`experience[${index}].start`} />
//       <FormField label="Stop" name={`experience[${index}].stop`} />
//       <FormField label="Role" name={`experience[${index}].role`} />
//       <FormField
//         label="Description"
//         name={`experience[${index}].description`}
//       />
//       <Button onPress={removeItem} title="Remove" />
//     </View>
//   );
// };

// ExperienceItem.propTypes = {
//   index: PropTypes.number.isRequired,
//   remove: PropTypes.func.isRequired,
// };

const Experience = () => (
  <FieldList
    name="experience"
    label="Job"
    title="Work Experience"
    Component={ExperienceItem}
    generateNewSlice={() => ({
      name: "",
      start: "",
      stop: "",
      role: "",
      description: "",
      id: uuid(),
    })}
  />
);

export default Experience;
