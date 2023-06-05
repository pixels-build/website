import { JSXElement } from "solid-js";
import { twMerge } from "tailwind-merge";

export default function Modal(props: {
  show: boolean;
  setShow: (value: boolean) => void;
  children: JSXElement;
  class?: string;
}) {
  return (
    <div
      style={{
        opacity: props.show ? 1 : 0,
        "background-color": props.show ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)",
        "pointer-events": props.show ? "auto" : "none",
      }}
      onClick={() => props.setShow(false)}
      class="fixed z-[69420] top-0 left-0 w-full h-full flex items-center justify-center transition-all"
    >
      <div
        style={{ "pointer-events": props.show ? "auto" : "none" }}
        onClick={(e) => e.stopPropagation()}
        class={twMerge("flex flex-col rounded-2xl p-4 bg-white", props.class)}
      >
        {props.children}
      </div>
    </div>
  );
}
