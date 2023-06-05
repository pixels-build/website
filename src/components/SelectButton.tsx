import { NOUNS, TOKENS, Token } from "~/routes/trade";
import Button from "./Button";
import { For, Setter, Show, createSignal } from "solid-js";
import Modal from "./Modal";

export default function SelectButton(props: {
  selectedToken: Token | null;
  selectedNouns: number[];
  setSelectedNouns: Setter<number[]>;
  onTokenSelected: (token: Token) => void;
  onNounsSelected: (noun: number[]) => void;
  selectableTokens: { [key: string]: Token };
}) {
  const [showModal, setShowModal] = createSignal(false);

  return (
    <>
      <Button
        onClick={() => {
          setShowModal(true);
        }}
        style={{
          height: "3rem",
          padding: props.selectedToken ? "0.4rem 0.4rem" : "",
          color: props.selectedToken ? "black" : "#A4A4A4",
        }}
        class="bg-lightgrey"
      >
        <Show when={props.selectedToken} fallback={"Select"}>
          {(token) => {
            const isNoun = token().symbol === "NOUN";

            return (
              <div class="flex items-center gap-2 h-full mr-1.5">
                <img
                  src={
                    isNoun && props.selectedNouns.length === 1
                      ? `https://api.cloudnouns.com/v2/nouns/${props.selectedNouns[0]}`
                      : token().image
                  }
                  class="rounded-full h-full"
                />
                {isNoun
                  ? props.selectedNouns.length > 1
                    ? `${props.selectedNouns.length} Nouns`
                    : `Noun ${props.selectedNouns[0]}`
                  : token().symbol}
              </div>
            );
          }}
        </Show>
      </Button>
      <Modal show={showModal()} setShow={setShowModal} class="gap-4">
        <p>Tokens</p>
        <div class="flex gap-2">
          <For
            each={Object.values(TOKENS).filter(
              (token) => token.symbol !== "NOUN"
            )}
          >
            {(token) => (
              <div
                onClick={() => {
                  props.onTokenSelected(token);
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
        <p>Nouns</p>
        <div class="grid grid-cols-5 gap-2 w-96">
          {NOUNS.map((id) => (
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
                "border-width": props.selectedNouns.includes(id) ? "3px" : "0",
              }}
              draggable={false}
              src={`https://api.cloudnouns.com/v2/nouns/${id}`}
              class="w-full rounded-xl border-blue cursor-pointer"
            />
          ))}
        </div>

        <div class="flex justify-between">
          <Button
            onClick={() => {
              if (props.selectedNouns.length > 0) {
                props.onNounsSelected(props.selectedNouns);
              }
              setShowModal(false);
            }}
            style={{
              "background-color":
                props.selectedNouns.length > 0 ? "#2B83F6" : "#E2E2E2",
              color: props.selectedNouns.length > 0 ? "white" : "#A4A4A4",
              "pointer-events":
                props.selectedNouns.length > 0 ? "auto" : "none",
            }}
          >
            Select
          </Button>
        </div>
      </Modal>
    </>
  );
}
