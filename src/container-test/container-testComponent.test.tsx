import React from "react";
import { render } from "@testing-library/react";

import ContainerTestComponent from "./container-testComponent";
import { Containertestprops } from "./container-testComponent.types";

describe("Container Component", () => {
  let props: Containertestprops;

  beforeEach(() => {
    props = {
      theming: "light"
    };
  });

  const renderComponent = () => render(<ContainerTestComponent {...props} />);

  it("should have light className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("ContainerTest");

    expect(testComponent).toHaveClass("container-bg-light");
  });

  it("should have dark className with theme set as dark", () => {
    props.theming = "dark";
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("ContainerTest");

    expect(testComponent).toHaveClass("container-bg-dark");
  });
});