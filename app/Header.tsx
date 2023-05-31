import { navigation } from "./layout";

export default function Header() {
  return (
    <header className="fixed top-9 w-full p-8 flex justify-between items-center">
      <a
        href="/"
        draggable={false}
        className="flex gap-4 group items-center cursor-pointer select-none"
      >
        <img
          src="/logo.svg"
          className="w-16 h-16 hover:scale-110 transition-transform"
        />
      </a>
      <nav className="flex gap-6">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.url}
            className="font-silkscreen text-xl text-grey hover:text-black transition-colors duration-200 ease-in-out"
          >
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
