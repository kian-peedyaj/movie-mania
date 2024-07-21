"use client";

import { useFormStatus } from "react-dom";
import { ReactNode, type ComponentProps } from "react";
import { Button } from "@/components/ui/button";

type Props = ComponentProps<"button"> & {
  pendingText?: ReactNode;
};

export function SubmitButton({ children, pendingText, ...props }: Props) {
  const { pending, action } = useFormStatus();

  const isPending = pending && action === props.formAction;

  return (
    <Button {...props} type="submit" aria-disabled={pending}>
      {isPending ? pendingText : children}
    </Button>
  );
}
