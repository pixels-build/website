import { For, Setter, Show, createEffect, createSignal } from "solid-js";
import Button from "~/components/Button";
import Modal from "~/components/Modal";
// import SelectButton from "~/components/SelectButton";

// import { fetchBalance } from '@wagmi/core'

// const balance = await fetchBalance({
//   address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
//   token: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
// })

export type Token = {
  name: string;
  symbol: string;
  image: string;
};

export const TOKENS: Token[] = [
  {
    name: "Ethereum",
    symbol: "ETH",
    image: "/ethereum.png",
  },
  {
    name: "Pixel",
    symbol: "PIXEL",
    image: "/logo.svg",
  },
  {
    name: "Noun",
    symbol: "NOUN",
    image: "/nouns.png",
  },
];

export const NOUNS = [1, 5, 86, 345, 20, 87, 15, 17, 34, 29, 56, 167, 244];

export default function Trade() {
  const [fromToken, setFromToken] = createSignal<Token | null>(null);
  const [fromAmount, setFromAmount] = createSignal<number>(0);
  const [fromNouns, setFromNouns] = createSignal<number[]>([]);

  const [forToken, setForToken] = createSignal<Token | null>(null);
  const [forAmount, setForAmount] = createSignal<number>(0);
  const [forNouns, setForNouns] = createSignal<number[]>([]);

  return (
    <div class="fixed top-0 left-0 flex flex-col gap-16 items-center justify-center w-full h-screen">
      <h1 class="text-6xl font-karmatic-arcade tracking-[0.8rem]">Trade</h1>
      <div class="flex flex-col gap-4 p-3 bg-white rounded-[2rem] w-[350px] shadow-2xl border-2 border-lightgrey">
        <div class="flex w-full flex-col gap-2">
          <div class="flex w-full p-2 gap-4 bg-[#F0F0F0] rounded-full justify-between">
            <SelectToken
              tokens={TOKENS}
              selectedToken={fromToken()}
              setSelectedToken={setFromToken}
            />
            <Show
              when={fromToken()?.symbol === "NOUN"}
              fallback={
                <InputAmount amount={forAmount()} setAmount={setForAmount} />
              }
            >
              <InputNouns
                nouns={NOUNS}
                selectedNouns={fromNouns()}
                setSelectedNouns={setFromNouns}
              />
            </Show>
          </div>
          <div class="flex w-full p-2 gap-4 bg-[#F0F0F0] rounded-full">
            <SelectToken
              tokens={TOKENS}
              selectedToken={forToken()}
              setSelectedToken={setForToken}
            />

            <Show
              when={forToken()?.symbol === "NOUN"}
              fallback={
                <InputAmount amount={forAmount()} setAmount={setForAmount} />
              }
            >
              <InputNouns
                nouns={NOUNS}
                selectedNouns={forNouns()}
                setSelectedNouns={setForNouns}
              />
            </Show>
          </div>
        </div>

        <Button hover="opacity" onClick={() => alert("test")}>
          Swap
        </Button>
      </div>
    </div>
  );
}

function InputAmount(props: {
  disabled?: boolean;
  amount: number;
  setAmount: Setter<number>;
}) {
  return (
    <input
      type="number"
      placeholder="0"
      disabled={props.disabled}
      onChange={(e) => props.setAmount(parseInt(e.target.value))}
      class="bg-transparent text-right mr-2 text-2xl w-full outline-none -mt-0.5 tracking-tighter"
    />
  );
}

function SelectToken(props: {
  tokens: Token[];
  selectedToken: Token | null;
  setSelectedToken: Setter<Token>;
}) {
  const [showModal, setShowModal] = createSignal(false);

  return (
    <>
      <Button
        onClick={() => {
          setShowModal(true);
        }}
        style={{
          height: "2.5rem",
          padding: props.selectedToken ? "0.4rem 0.4rem" : "",
          color: props.selectedToken ? "black" : "#A4A4A4",
        }}
        class="bg-lightgrey"
      >
        <Show
          when={props.selectedToken}
          fallback={<p class="flex items-center h-full">Select</p>}
        >
          {(token) => {
            return (
              <div class="flex items-center gap-1 h-full mr-[2rem]">
                <img src={token().image} class="rounded-full h-full" />
                <p class="-mt-0.5">{token().symbol}</p>
              </div>
            );
          }}
        </Show>
      </Button>
      <Modal show={showModal()} setShow={setShowModal} class="gap-4 max-w-2xl">
        <p>Tokens</p>
        <div class="flex gap-2">
          <For each={props.tokens}>
            {(token) => (
              <div
                onClick={() => {
                  props.setSelectedToken(token);
                  setShowModal(false);
                }}
                class="flex gap-1 items-center bg-lightgrey hover:bg-grey/40 transition-colors cursor-pointer rounded-full p-1.5 pr-2.5"
              >
                <img src={token.image} class="w-8 h-8 rounded-full" />
                {token.symbol}
              </div>
            )}
          </For>
        </div>
      </Modal>
    </>
  );
}

function InputNouns(props: {
  nouns: number[];
  selectedNouns: number[];
  setSelectedNouns: Setter<number[]>;
}) {
  const [showModal, setShowModal] = createSignal(false);

  return (
    <>
      <Show
        when={props.selectedNouns.length < 1}
        fallback={
          <div class="flex justify-end items-center gap-2 w-full">
            {props.selectedNouns.length > 1
              ? `${props.selectedNouns.length} Nouns`
              : `Noun ${props.selectedNouns[0]}`}
            <img
              onClick={() => setShowModal(true)}
              draggable={false}
              src={`https://api.cloudnouns.com/v2/nouns/${props.selectedNouns[0]}`}
              class="h-[2.5rem] rounded-full cursor-pointer"
            />
          </div>
        }
      >
        <Button
          onClick={() => {
            setShowModal(true);
          }}
          style={{
            height: "2.5rem",
            color: props.selectedNouns ? "black" : "#A4A4A4",
          }}
          class="bg-lightgrey"
        >
          <p class="flex items-center h-full text-grey">Select</p>
        </Button>
      </Show>
      <Modal show={showModal()} setShow={setShowModal} class="gap-4 max-w-2xl">
        <p>Nouns</p>
        <div class="grid grid-cols-5 gap-2 w-96">
          <For each={props.nouns}>
            {(id) => (
              <img
                onClick={() => {
                  if (props.selectedNouns.includes(id)) {
                    props.setSelectedNouns([
                      ...props.selectedNouns.filter((n) => n !== id),
                    ]);
                  } else {
                    props.setSelectedNouns([...props.selectedNouns, id]);
                  }
                }}
                style={{
                  "border-width": props.selectedNouns.includes(id)
                    ? "3px"
                    : "0",
                }}
                draggable={false}
                src={`https://api.cloudnouns.com/v2/nouns/${id}`}
                class="w-full rounded-xl border-blue cursor-pointer"
              />
            )}
          </For>
        </div>
        <Button
          onClick={() => {
            if (props.selectedNouns.length > 0) {
              setShowModal(false);
            }
          }}
          style={{
            "background-color":
              props.selectedNouns.length > 0 ? "#2B83F6" : "#E2E2E2",
            color: props.selectedNouns.length > 0 ? "white" : "#A4A4A4",
            "pointer-events": props.selectedNouns.length > 0 ? "auto" : "none",
          }}
        >
          Select
        </Button>
      </Modal>
    </>
  );
}
