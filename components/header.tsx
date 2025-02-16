import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="grid grid-cols-12 justify-between items-center w-full sticky mt-12 px-4 bg-background">
      <div className="col-span-4 lg:col-span-4"></div>
      <div className="col-span-8 lg:col-span-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Cooking Companion</h1>
        <ThemeToggle />
      </div>
      <div className="hidden lg:block lg:col-span-4"></div>
    </header>
  );
}
