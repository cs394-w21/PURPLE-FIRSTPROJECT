import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Formik } from "formik";
import Skill from "./Skill";

describe("A component", () => {
  test("Renders all fields properly", () => {
    const { queryByText } = render(
      <Formik>
        <Skill index={0} remove={() => {}}></Skill>
      </Formik>
    );
    expect(queryByText("Skill Label")).not.toBe(null);
    expect(queryByText("Skill Value")).not.toBe(null);
  });

  test("Remove button exists and works", () => {
    const fauxRemove = jest.fn();
    const { queryByText } = render(
      <Formik>
        <Skill index={0} remove={fauxRemove}></Skill>
      </Formik>
    );
    const removeButton = queryByText("Remove");
    expect(removeButton).not.toBe(null);

    fireEvent.press(removeButton);
    expect(fauxRemove).toHaveBeenCalled();
  });
});
