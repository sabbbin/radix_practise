import { styled, keyframes } from "@stitches/react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { violet, mauve, blackA } from "@radix-ui/colors";
import {
  MixerHorizontalIcon,
  Cross2Icon,
  OpacityIcon,
} from "@radix-ui/react-icons";
import Stitches from "@stitches/react/types/stitches";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px" },
  "100%": { opacity: 1, transform: "translateY(0" },
});

export const StyledContent = styled(PopoverPrimitive.Content, {
  borderRadius: 4,
  padding: 20,
  width: 260,
  backgroundcolor: "white",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  "@media(prefers-reduce-motion:no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
    willChange: "trasform opacity",
    '&[data-state=["open"]': {
      '$[data-state=["top"]': { animationName: slideDownAndFade },
      '$[data-state=["right"]': {
        animationName: slideRightAndFade,
      },
    },
  },
  "&:focus": {
    boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px ${violet.violet7}`,
  },
});
type StyledContentProps = React.ComponentProps<typeof StyledContent>;
const StyledArrow = styled(PopoverPrimitive.Arrow, {
  fill: "white",
});

function Content({ children, ...props }: StyledContentProps) {
  return (
    <PopoverPrimitive.Portal>
      <StyledContent {...props}>{children}</StyledContent>
    </PopoverPrimitive.Portal>
  );
}

const StyledClose = styled(PopoverPrimitive.Close, {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  "&:hover": { backgroundColor: violet.violet1 },
  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet7}` },
});

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverContent = Content;

export const PopoverClose = StyledClose;
