import { styled } from "@stitches/react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Accordion from "@radix-ui/react-accordion";
import Example from "./animation";
import AnimationTry, { AccordionItem } from "./Accordion";
import Root, { AccordionRoot } from "./Accordion/root";
import { useState } from "react";
import Item from "./Accordion/Item";
import Trigger from "./Accordion/trigger";
import Content from "./Accordion/content";

// This is a generic button, eg: from your design system

const dummy = [
  { title: "a", desc: "this is title 1" },
  { title: "b", desc: "this is title 1" },
  { title: "c", desc: "this is title 1" },
  { title: "d", desc: "this is title 1" },
];

export default function App() {
  const [value, setValue] = useState("");
  return (
    <>
      <Accordion.Root
        className="bg-mauve6   shadow-[0_2px_10px] shadow-black/5"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        <Item value="item-1">
          <Trigger>Is it accessible?</Trigger>
          <Content>Yes. It adheres to the WAI-ARIA design pattern.</Content>
        </Item>
        <Item value="item-2">
          <Trigger>Is it accessible?</Trigger>
          <Content>Yes. It adheres to the WAI-ARIA design pattern.</Content>
        </Item>
        <Item value="item-3">
          <Trigger>Is it accessible?</Trigger>
          <Content>Yes. It adheres to the WAI-ARIA design pattern.</Content>
        </Item>
      </Accordion.Root>

      {/* <AnimationTry />
      <Example />
      <AccordionItem />
      <StyledAccordion type="single">
        <StyledItem value="item-1">
          <StyledHeader>
            <StyledTrigger>Trigger text</StyledTrigger>
          </StyledHeader>
          <StyledPanel>Panel content</StyledPanel>
        </StyledItem>
      </StyledAccordion>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button>Open dialog</Button>
        </Dialog.Trigger>
        <Dialog.Content>...</Dialog.Content>
      </Dialog.Root> */}
    </>
  );
}
