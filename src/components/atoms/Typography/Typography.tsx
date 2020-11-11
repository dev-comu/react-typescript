import React from "react";
import styled from "styled-components";
import { Typography as MuiTypography } from "@material-ui/core";

type CustomProps = {
  variant:
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "button"
    | "caption";
  fontWeight?: "lighter" | "nomal" | "bold";
};

type Props = Omit<React.ComponentProps<typeof MuiTypography>, "variant"> &
  CustomProps;

export const Typography = (props: Props) => (
  <StyledMuiTypography {...props} gutterBottom />
);

const StyledMuiTypography = styled(MuiTypography)``;
