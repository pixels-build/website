import { connect } from "@wagmi/core";
import NewButton from "./Button";
import { WalletConnectConnector } from "@wagmi/core/connectors/walletConnect";
import { Show, createSignal } from "solid-js";

const [connected, setConnected] = createSignal(false);

export { connected, setConnected };

export default function ConnectButton() {
  return (
    <NewButton
      onClick={async () => {
        const { account } = await connect({
          connector: new WalletConnectConnector({
            options: {
              projectId: "9e080c458781a9a2d4c42149c5f02972",
            },
          }),
        });

        if (account) setConnected(true);
      }}
      class="bg-black"
    >
      <Show when={connected()} fallback={"Connect"}>
        <div class="flex gap-2 items-center">
          <img src="/connected.svg" class="w-3 h-3" />
          <p class="-mt-0.5">Connected</p>
        </div>
      </Show>
    </NewButton>
  );
}
