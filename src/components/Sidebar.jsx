import { sidebarMenu } from "../constant/sidebarMenu";

export default function Sidebar({  activeMenuId, setActiveMenuId }) {
  return (
    <aside
      className={`bg-gray-200 shadow-lg transition-all duration-300
   w-16
       md:flex flex-col`}
    >
      <div className="p-4 font-bold text-lg">
        D
      </div>

      <nav className="flex-1 space-y-2 px-2">
        {sidebarMenu.map((menu) => (
          <MenuItem
            key={menu.id}
            icon={menu.icon}
            label={menu.label}
            active={menu.id === activeMenuId}
            onClick={() => setActiveMenuId(menu.id)}
          />
        ))}
      </nav>
    </aside>
  );
}

function MenuItem({ icon: Icon,  active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex bg-white items-center gap-3 px-3 py-3 rounded-lg cursor-pointer
      ${active ? "bg-red-100 text-red-600" : "hover:bg-gray-100"}`}
    >
      <Icon size={20} />
    </div>
  );
}
