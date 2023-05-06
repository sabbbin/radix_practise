import React, { forwardRef, useContext } from "react";
import { AccordionRoot } from "./root";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";

export interface IAccordionItem
  extends Omit<
    Accordion.CollapsibleProps,
    "open" | "defaultOpen" | "onOpenChange"
  > {
  value: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const Item = React.forwardRef(
  (
    { children, className, ...props }: Accordion.AccordionItemProps,
    forwardRef
  ) => (
    <Accordion.Item
      className={classNames("bg-red-800")}
      {...props}
      ref={forwardRef as never}
    >
      {children}
    </Accordion.Item>
  )
);

export default Item;

// export default function Item({
//   value,
//   disabled,
//   children,
//   ...props
// }: IAccordionItem) {
//   const { onValueChange, defaultValue } = useContext(AccordionRoot);
//   if (defaultValue == value) {
//   }

//   return <div {...props}>{children}</div>;
// }
