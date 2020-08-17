import React, { Fragment } from "react";
import { Retestprops } from "./re-testComponent.types";
import "./re-testComponent.scss";

const ReTestComponent: React.FC<Retestprops> = ({ theming }) => (
  <Fragment>
    <button data-testid="ReTestButton" className={`re-btn re-btn-${theming}`}>
      Hi, from the re-test btn component
    </button>
  </Fragment>
);

export default ReTestComponent;
