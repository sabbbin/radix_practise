import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { keyframes, styled } from "@stitches/react";

const AccordionRoot = styled(Accordion.Root, {
  backgroundColor: "red",
  borderRadius: "50%",
  padding: "9px",
});

export const AccordionItem = () => {
  return (
    <>
      <AccordionRoot type="single" collapsible>
        <Accordion.Item value="item-1">
          <Accordion.Header>
            <Accordion.Trigger>count1</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>this is accordion count1</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Header>
            <Accordion.Trigger>cOUNT2 </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>this is accordion count 2</Accordion.Content>
        </Accordion.Item>
      </AccordionRoot>

      <Accordion.Root type="multiple">
        <Accordion.Item value="item-1">
          <Accordion.Header>
            <Accordion.Trigger>count1</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>this is accordion count1</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Header>
            <Accordion.Trigger>cOUNT2 </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>this is accordion count 2</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </>
  );
};

const open = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const close = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

const AccordionHeader = styled(Accordion.Header, {
  margin: 0,
});

const AccordionContent = styled(Accordion.Content, {
  overflow: "hidden",
  '&[data-state="open"]': { animation: `${open} 500ms ease-out` },
  '&[data-state="closed"]': { animation: `${close} 300ms ease-out` },
});

export default function AnimationTry() {
  return (
    <Accordion.Root type="single">
      <Accordion.Item value="item-1">
        <AccordionHeader>
          <Accordion.Trigger>1</Accordion.Trigger>
        </AccordionHeader>
        <AccordionContent>this is accordion count1</AccordionContent>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Header>
          <Accordion.Trigger>2 </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>this is accordion count 2</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
