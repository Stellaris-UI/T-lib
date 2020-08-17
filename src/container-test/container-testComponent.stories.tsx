import React from "react";
import ContainerTestComponent from "./container-testComponent";

export default {
  title: "ContainerTestComponent",
};

export const Primary = () => <ContainerTestComponent theming="light" />;

export const Secondary = () => <ContainerTestComponent theming="dark" />;
