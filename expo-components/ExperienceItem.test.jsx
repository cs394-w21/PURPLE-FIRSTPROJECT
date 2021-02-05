import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Formik } from "formik";
import ExperienceItem from "./ExperienceItem";

describe("A component", () => {
  test("Renders all fields properly", () => {
    const { queryByText } = render(
      <Formik>
        <ExperienceItem index={0} remove={() => {}}></ExperienceItem>
      </Formik>
    );
    expect(queryByText("Name")).not.toBe(null);
    expect(queryByText("Start")).not.toBe(null);
    expect(queryByText("Stop")).not.toBe(null);
    expect(queryByText("Role")).not.toBe(null);
    expect(queryByText("Description")).not.toBe(null);
  });

  test("Remove button exists and works", () => {
    const fauxRemove = jest.fn();
    const { queryByText } = render(
      <Formik>
        <ExperienceItem index={0} remove={fauxRemove}></ExperienceItem>
      </Formik>
    );
    const removeButton = queryByText("Remove");
    expect(removeButton).not.toBe(null);

    fireEvent.press(removeButton);
    expect(fauxRemove).toHaveBeenCalled();
  });
});
