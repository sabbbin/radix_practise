import React, { forwardRef } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";

type ContentProps = Accordion.AccordionContentProps;

// export default function Content({
//   children,
//  collapse,
//   ...props
// }: Accordion.AccordionContentProps) {
//   return <div {...props}></div>;
// }

const Content = React.forwardRef(
  ({ children, className, ...props }: ContentProps, forwardRef) => (
    <Accordion.Content
      className={classNames("bg-red-300", className)}
      {...props}
      ref={forwardRef as never}
    >
      <div className="py-[15px] px-5"> {children}</div>
    </Accordion.Content>
  )
);
export default Content;
