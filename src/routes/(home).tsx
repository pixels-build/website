import { A } from "solid-start";
import Button from "~/components/Button";

export default function Home() {
  return (
    <div class="flex flex-col h-[calc(100vh_-_2.25rem)]">
      <div class="flex flex-col h-full justify-center items-center gap-16">
        <h1 class="relative text-8xl font-karmatic-arcade tracking-[2rem]">
          <A
            href="https://nouns.wtf"
            rel="noopener noreferrer"
            target="_blank"
            class="absolute -top-2 -left-14 -rotate-12 hover:scale-110 transition-all ease-in-out"
          >
            <img src="/noggle.png" />
          </A>
          Pixels
        </h1>
        <p class="text-2xl text-grey">
          Bringing liquidity and fractionalization to NounsDAO
        </p>
        <Button href="/trade" hover="scale">
          Start Trading
        </Button>
      </div>
    </div>
  );
}
