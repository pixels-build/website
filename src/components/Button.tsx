import { JSX, JSXElement } from "solid-js";
import { Dynamic } from "solid-js/web";
import { A } from "solid-start";
import { twMerge } from "tailwind-merge";

export default function Button(props: {
  children: JSXElement;
  href?: string;
  newTab?: boolean;
  onClick?: (e: MouseEvent) => Promise<void> | void;
  class?: string;
  style?: JSX.CSSProperties;
  hover?: "scale" | "opacity";
  disabled?: boolean;
}) {
  return (
    <Dynamic
      disabled={props.disabled}
      component={props.href ? A : "button"}
      href={props.href}
      rel={props.newTab ? "noopener noreferrer" : ""}
      target={props.newTab ? "_blank" : ""}
      onClick={props.onClick}
      class={twMerge(
        "rounded-full px-5 py-4 cursor-pointer",
        props.disabled ? "bg-lightgrey text-grey" : "bg-blue text-white",
        props.class,
        !props.disabled &&
          (props.hover === "opacity"
            ? "hover:bg-blue/75 transition-colors"
            : props.hover === "scale"
            ? "hover:scale-110 transition-transform"
            : "")
      )}
      style={props.style}
    >
      {props.children}
    </Dynamic>
  );
}
