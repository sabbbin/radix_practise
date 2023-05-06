import React, { forwardRef } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";

type TriggerProps = Accordion.AccordionTriggerProps;

// export default function Trigger({ col , ...props}: Accordion.AccordionTriggerProps) {
//   return <button {...props}></button>;
// }

const Trigger = React.forwardRef(
  ({ children, className, ...props }: TriggerProps, forwardRef) => (
    <Accordion.Trigger
      className={classNames("bg-fuchsia-300", className)}
      {...props}
      ref={forwardRef as never}
    >
      {children}
    </Accordion.Trigger>
  )
);

export default Trigger;
