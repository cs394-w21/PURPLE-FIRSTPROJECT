import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Formik } from "formik";
import EducationItem from "./EducationItem";

describe("A component", () => {
  test("Renders all fields properly", () => {
    const { queryByText } = render(
      <Formik>
        <EducationItem index={0} remove={() => {}}></EducationItem>
      </Formik>
    );
    expect(queryByText("Name")).not.toBe(null);
    expect(queryByText("Start")).not.toBe(null);
    expect(queryByText("Stop")).not.toBe(null);
    expect(queryByText("Degree")).not.toBe(null);
    expect(queryByText("Description")).not.toBe(null);
  });

  test("Remove button exists and works", () => {
    const fauxRemove = jest.fn();
    const { queryByText } = render(
      <Formik>
        <EducationItem index={0} remove={fauxRemove}></EducationItem>
      </Formik>
    );
    const removeButton = queryByText("Remove");
    expect(removeButton).not.toBe(null);

    fireEvent.press(removeButton);
    expect(fauxRemove).toHaveBeenCalled();
  });
});
