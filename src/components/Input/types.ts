import { ComponentPropsWithoutRef } from "react";
import { IconType } from "react-icons";

export interface InputProps extends ComponentPropsWithoutRef<'input'>{
  icon: IconType
}