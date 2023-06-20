import React, { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export default function Slote() {
  return (
    <Slot>
      <div> Helo</div>
    </Slot>
  );
}

export function Button({ aschild, ...props }) {
  const Comp = aschild ? Slot : "button";
  console.log("props", props);
  console.log("component", Comp);
  return <Comp {...props} />;
}

export function Buttona({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
