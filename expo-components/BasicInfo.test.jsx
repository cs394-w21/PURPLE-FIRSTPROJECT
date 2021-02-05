import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Formik } from "formik";
import BasicInfo from "./BasicInfo";

describe("A component", () => {
  test("Renders all fields properly", () => {
    const { queryByText } = render(
      <Formik>
        <BasicInfo></BasicInfo>
      </Formik>
    );
    expect(queryByText("Name")).not.toBe(null);
    expect(queryByText("Email")).not.toBe(null);
    expect(queryByText("Phone")).not.toBe(null);
    expect(queryByText("Location")).not.toBe(null);
  });
});
