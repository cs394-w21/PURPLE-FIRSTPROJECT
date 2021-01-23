import React from "react";
import { View, Button, Text } from "react-native";
import { FieldArray, useField } from "formik";
import FormField from "./FormField";
import styles from "../expo-utils/styles";

const Skill = (props) => {
  const { skill, index, remove } = props;
  const removeItem = React.useCallback(() => {
    remove(index);
  }, [index]);
  return (
    <View style={styles.skillPair}>
      <FormField label="Skill Label" name={`skills[${index}].label`} />
      <FormField label="Skill Value" name={`skills[${index}].value`} />
      <Button onPress={removeItem} color="red" title="Remove" />
    </View>
  );
};

const Skills = () => {
  const [{ value }] = useField("skills");
  const [counter, setCounter] = React.useState(value.length);
  return (
    <View style={styles.skillContainer}>
      <FieldArray
        name="skills"
        render={(arrayHelpers) => (
          <>
            {value.map((skill, index) => {
              return (
                <Skill
                  remove={arrayHelpers.remove}
                  key={skill.label || `Skill ${index}`}
                  skill={skill}
                  index={index}
                />
              );
            })}
            <Button
              onPress={() =>
                arrayHelpers.push({
                  label: "",
                  value: "",
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
