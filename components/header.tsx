import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full">
      <h1>Cooking Companion</h1>
      <ThemeToggle />
    </header>
  );
}
