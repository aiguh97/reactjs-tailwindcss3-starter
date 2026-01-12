import { Menu } from "lucide-react";

export default function Topbar({ onToggle }) {
  return (
    <header className="h-14 bg-white border-b flex items-center px-4">
      <button
        onClick={onToggle}
        className="md:hidden p-2 rounded hover:bg-gray-100"
      >
        <Menu />
      </button>
      <h1 className="ml-3 font-semibold text-lg">
        Transactions (Courses)
      </h1>
    </header>
  );
}
