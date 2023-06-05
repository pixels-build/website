import { A } from "solid-start";

export default function Banner() {
  return (
    <A
      href=""
      target="_blank"
      rel="noopener noreferrer"
      class="h-9 flex-shrink-0 bg-blue hover:brightness-[90%] transition-all text-white text-sm font-semibold w-full whitespace-nowrap flex items-center justify-center"
    >
      Check out our proposal -{">"}
    </A>
  );
}
