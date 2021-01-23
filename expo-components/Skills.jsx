import React from "react";
import { v4 as uuid } from "uuid";
import { View, Button } from "react-native";
import PropTypes from "prop-types";
import { FieldArray, useField } from "formik";
import FormField from "./FormField";
import styles from "../expo-utils/styles";

const Skill = (props) => {
  const { index, remove } = props;
  const removeItem = React.useCallback(() => {
    remove(index);
  }, [index, remove]);
  return (
    <View style={styles.skillPair}>
      <FormField label="Skill Label" name={`skills[${index}].label`} />
      <FormField label="Skill Value" name={`skills[${index}].value`} />
      <Button onPress={removeItem} color="red" title="Remove" />
    </View>
  );
};

Skill.propTypes = {
  index: PropTypes.number.isRequired,
  remove: PropTypes.func.isRequired,
};

const Skills = () => {
  const [{ value }] = useField("skills");
  return (
    <View style={styles.skillContainer}>
      <FieldArray
        name="skills"
        render={(arrayHelpers) => (
          <>
            {value.map((skill, index) => (
              <Skill
                remove={arrayHelpers.remove}
                key={skill.id}
                skill={skill}
                index={index}
              />
            ))}
            <Button
              onPress={() =>
                arrayHelpers.push({
                  label: "",
                  value: "",
                  id: uuid(),
                })
              }
              title="Add skill"
              color="red"
            />
          </>
        )}
      />
    </View>
  );
};

export default Skills;
