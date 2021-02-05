import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Formik } from "formik";
import LoginForm from "./LoginForm";

describe("A component", () => {
  test("Renders all fields properly", () => {
    const { queryByText, queryAllByText } = render(
      <Formik>
        <LoginForm></LoginForm>
      </Formik>
    );
    expect(queryAllByText("Email")).not.toBe(null);
    expect(queryAllByText("Password")).not.toBe(null);
    expect(queryByText("Site URL")).not.toBe(null);
    expect(
      queryByText("Your website will be hosted at nervous-line.surge.sh/?id=")
    ).not.toBe(null);
    expect(queryByText("Confirm Password")).not.toBe(null);
  });

  test("Login button exists", () => {
    const { queryByText, queryAllByText } = render(
      <Formik>
        <LoginForm></LoginForm>
      </Formik>
    );

    const loginButton = queryAllByText("Login");
    expect(loginButton).not.toBe(null);
  });

  test("Signup button exists", () => {
    const { queryByText, queryAllByText } = render(
      <Formik>
        <LoginForm></LoginForm>
      </Formik>
    );
    const signupButton = queryAllByText("Sign Up");
    expect(signupButton).not.toBe(null);
  });
});
