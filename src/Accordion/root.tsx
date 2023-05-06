import React, { ComponentProps, createContext, useContext } from "react";
import * as Accordion from "@radix-ui/react-accordion";

export interface AccordionContextProps {
  value: string;
  defaultValue: string;
  onValueChange: (value: string) => void;
  collapsible: boolean;
}

export const AccordionRoot = createContext<AccordionContextProps>({
  value: "",
  defaultValue: "",
  onValueChange: (value: string) => {},
  collapsible: false,
} as AccordionContextProps);

export type AccordionProps = ComponentProps<"section"> & {
  value: string;
  defaultValue: string;
  onValueChange: (value: string) => void;
  collapsible: boolean;
};

export default function Root({
  value,
  defaultValue,
  onValueChange,
  collapsible,
  ...props
}: AccordionProps) {
  return (
    <AccordionRoot.Provider
      value={{ value, defaultValue, onValueChange, collapsible }}
    >
      <section {...props}></section>;
    </AccordionRoot.Provider>
  );
}
