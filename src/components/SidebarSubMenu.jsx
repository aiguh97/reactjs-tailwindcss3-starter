import { sidebarMenu } from "../constant/sidebarMenu"
import { useNavigate, useLocation } from "react-router-dom"

export default function SidebarSubmenu({ activeMenuId, onClose }) {
  const navigate = useNavigate()
  const location = useLocation()

  const activeMenu = sidebarMenu.find(
    (menu) => menu.id === activeMenuId
  )

  if (!activeMenu?.submenu) return null

  return (
    <aside className="w-72 bg-gray-100 shadow-lg h-screen p-4">
      {/* Header mobile */}
      <div className="md:hidden flex justify-between items-center mb-4">
        <span className="font-bold">{activeMenu.label}</span>
        <button onClick={onClose}>✕</button>
      </div>

      <nav className="space-y-2">
        {activeMenu.submenu.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              navigate(item.route)
              onClose?.() // ✅ SAFE CALL
            }}
            className={`
              flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
              ${
                location.pathname === item.route
                  ? "bg-red-100 text-red-600"
                  : "hover:bg-gray-200"
              }
            `}
          >
            <item.icon size={18} />
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  )
}
