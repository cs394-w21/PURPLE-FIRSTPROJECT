import React from "react";
// import "react-native-get-random-values";
import { Text } from "react-native";
import { render } from "@testing-library/react-native";
import { Formik } from "formik";
import ExperienceItem from "./ExperienceItem";

describe("A component", () => {
  test("Renders correctly", () => {
    const { queryByText } = render(
      <Formik>
        <ExperienceItem index={0} remove={() => {}}></ExperienceItem>
      </Formik>
    );

    expect(queryByText("Name")).not.toBe(null);
    expect(queryByText("Start")).not.toBe(null);
    expect(queryByText("Stop")).not.toBe(null);
    expect(queryByText("Role")).not.toBe(null);
  });
});
