import React from "react";
import { render } from "@testing-library/react";

import ReTestComponent from "./re-testComponent";
import { Retestprops } from "./re-testComponent.types";

describe("ReTest Component", () => {
  let props: Retestprops;

  beforeEach(() => {
    props = {
      theming: "light"
    };
  });

  const renderComponent = () => render(<ReTestComponent {...props} />);

  it("should have light className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("ReTestButton");

    expect(testComponent).toHaveClass("re-btn-light");
  });

  it("should have dark className with theme set as dark", () => {
    props.theming = "dark";
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("ReTestButton");

    expect(testComponent).toHaveClass("re-btn-dark");
  });
});
