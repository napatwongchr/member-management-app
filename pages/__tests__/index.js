import React from "react";
import PageIndex from "../../pages/index";
import { render } from "@testing-library/react";

test("app runs correctly", () => {
  const { getByTestId } = render(<PageIndex />);
  expect(getByTestId("welcome-text")).toHaveTextContent(
    "Welcome to Member management app"
  );
});
