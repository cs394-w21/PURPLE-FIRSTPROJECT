import React from "react";
import { View, Button, Text } from "react-native";
import { FieldArray, useField } from "formik";
import FormField from "./FormField";
import styles from "../expo-utils/styles";
import { v4 as uuid } from "uuid";

const Skill = (props) => {
  const { skill, index, remove } = props;
  const removeItem = React.useCallback(() => {
    remove(index);
  }, [index]);
  console.log(skill);
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
                  key={skill.id}
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
