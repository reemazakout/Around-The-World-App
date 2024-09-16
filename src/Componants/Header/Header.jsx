import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Logo from "../Logo/Logo";

export default function Header() {
  return (
    <>
      <header className="dark:bg-gray-800">
        <div className="mx-auto p-7 shadow-md">
          <div className="container flex items-center justify-between">
            <Logo />
            <ThemeSwitcher />
          </div>
        </div>
      </header>
    </>
  );
}
