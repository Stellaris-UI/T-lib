import React, { Fragment } from "react";
import { Containertestprops } from "./container-testComponent.types";
import "./container-testComponent.scss";

const ContainerTestComponent: React.FC<Containertestprops> = ({ theming }) => (
  <Fragment>
    <div
      data-testid="ContainerTest"
      className={`container container-bg-${theming}`}
    >
      <h1>Hi</h1>
      <h2>I'm the container component</h2>
    </div>
  </Fragment>
);

export default ContainerTestComponent;
