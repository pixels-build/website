import { navigation } from "../root";
import { A } from "solid-start";
import ConnectButton from "./ConnectButton";
import { useLocation } from "solid-start";
import Banner from "./Banner";

export default function Header() {
  const location = useLocation();

  return (
    <>
      <Banner />
      <header class="sticky top-0 w-full z-20">
        <div class="absolute top-0 w-full flex items-center justify-between p-8">
          <div class="flex gap-8">
            <A
              href="/"
              draggable={false}
              class="flex gap-4 group items-center cursor-pointer select-none"
            >
              <img
                src="/logo.svg"
                class="w-16 h-16 hover:scale-110 transition-transform"
              />
            </A>
            <div class="flex gap-2 items-center">
              <p class="text-xl -mt-0.5">
                $0.056 <span class="text-[#20BD43]">+10%</span>
              </p>
            </div>
          </div>
          <div class="flex items-center gap-8">
            <nav class="flex gap-6">
              {navigation.map((item) => (
                <A
                  href={item.url}
                  style={{
                    color: location.pathname === item.url ? "black" : "",
                  }}
                  class="text-xl text-grey hover:text-black transition-colors duration-200 ease-in-out"
                >
                  {item.name}
                </A>
              ))}
            </nav>
            <ConnectButton />
          </div>
        </div>
      </header>
    </>
  );
}
