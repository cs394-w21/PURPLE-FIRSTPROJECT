import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

// const text = {
//   color: "black",
//   fontSize: 20,
//   padding: 2,
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     borderWidth: 3,
//     borderColor: "black",
//     borderStyle: "solid",
//     margin: 8,
//     maxWidth: 310,
//   },
//   itemContainer: {
//     paddingTop: 16,
//   },
//   title: {
//     color: "black",
//     fontSize: 40,
//     paddingTop: 5,
//     paddingBottom: 5,
//   },
//   text,
//   name: {
//     ...text,
//     fontWeight: "bold",
//   },
//   degree: {
//     ...text,
//     fontStyle: "italic",
//     paddingTop: 5,
//     paddingBottom: 5,
//   },
// });

const EducationItem = (props) => {
  const { name, start, stop, degree, description } = props;
  return (
    // <View style={styles.itemContainer}>
    //   <Text style={styles.name}>{name}</Text>
    //   <Text style={styles.text}>
    //     {start}-{stop}
    //   </Text>
    //   <Text style={styles.degree}>{degree}</Text>
    //   <Text style={styles.text}>{description}</Text>
    // </View>
    <div className="item-container">
      <p className="item-name">{name}</p>
      <p className="item-text">
        {start}-{stop}
      </p>
      <p className="item-value">{degree}</p>
      <p className="item-text">{description}</p>
    </div>
  );
};

const EducationItemProps = {
  name: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  stop: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

EducationItem.propTypes = EducationItemProps;

const Education = (props) => {
  const { education } = props;
  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Education</Text>
    //   {education.map((educationItem) => (
    //     <EducationItem
    //       key={educationItem.name}
    //       name={educationItem.name}
    //       start={educationItem.start}
    //       stop={educationItem.stop}
    //       degree={educationItem.degree}
    //       description={educationItem.description}
    //     />
    //   ))}
    // </View>
    <div className="single-section-container">
      <h2 className="section-title">Education</h2>
      {education.map((educationItem) => (
        <EducationItem
          key={educationItem.name}
          name={educationItem.name}
          start={educationItem.start}
          stop={educationItem.stop}
          degree={educationItem.degree}
          description={educationItem.description}
        />
      ))}
    </div>
  );
};

export const EducationProps = {
  education: PropTypes.arrayOf(PropTypes.shape(EducationItemProps).isRequired)
    .isRequired,
};

Education.propTypes = EducationProps;

export default Education;
