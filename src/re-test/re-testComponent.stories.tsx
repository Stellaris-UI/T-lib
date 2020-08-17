import React from "react";
import ReTestComponent from './re-testComponent';

export default {
  title: "ReTestComponent"
};

export const Primary = () => <ReTestComponent theming="light" />;

export const Secondary = () => <ReTestComponent theming="dark" />;