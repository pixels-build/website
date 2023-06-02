import { For } from "solid-js";
import NounCard from "~/components/NounCard";

export default function Market() {
  const nouns = [1, 5, 86, 345, 20, 87, 15, 17, 34, 29, 56, 167, 244];
  return (
    <div class="flex flex-col gap-16 items-center justify-center w-full h-full mt-24 pt-16">
      <h1 class="text-6xl font-karmatic-arcade tracking-[0.8rem]">Market</h1>
      <div class="grid grid-cols-4 gap-6 max-w-7xl">
        <For each={nouns}>{(noun) => <NounCard id={noun} />}</For>
      </div>
    </div>
  );
}
