import { JSXElement, Show } from "solid-js";
import { Dynamic } from "solid-js/web";
import { A } from "solid-start";

export default function Button(props: {
  color?: string;
  children: JSXElement;
  href?: string;
  newTab?: boolean;
  onClick?: (e: MouseEvent) => Promise<void>;
  outline?: boolean;
  fontSize?: number;
}) {
  return (
    <Dynamic
      component={props.href ? A : "button"}
      href={props.href}
      rel={props.newTab ? "noopener noreferrer" : ""}
      target={props.newTab ? "_blank" : ""}
      onClick={props.onClick}
      style={{
        "background-color": props.color ?? "black",
      }}
      class="relative px-6 py-1 hover:scale-110 transition-transform cursor-pointer"
    >
      <div
        style={{ "background-color": props.color ?? "black" }}
        class="absolute top-0 left-0 ml-2 -mt-2 w-[calc(100%_-_16px)] h-[calc(100%_+_16px)]"
      />
      <Show when={props.outline}>
        <div class="absolute top-0 left-0 ml-1 mt-1 bg-white h-[calc(100%_-_8px)] w-[calc(100%_-_8px)]" />

        <div class="absolute top-0 left-0 ml-3 -mt-1 bg-white h-[calc(100%_+_8px)] w-[calc(100%_-_24px)]" />
      </Show>
      <span
        style={{
          "font-size": `${props.fontSize ?? 16}px`,
        }}
        class="relative z-10 text-white font-silkscreen text-lg leading-none"
      >
        {props.children}
      </span>
    </Dynamic>
  );
}
