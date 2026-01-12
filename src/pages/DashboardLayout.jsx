import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar"
import SidebarSubmenu from "../components/SidebarSubMenu"
import Topbar from "../components/Topbar"

export default function DashboardLayout() {
  const [openDrawer, setOpenDrawer] = useState(true)
  const [activeMenuId, setActiveMenuId] = useState("courses")

  // 🔥 AUTO CLOSE ON < md
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)")

    const handleChange = (e) => {
      setOpenDrawer(e.matches) // md+ = true, mobile = false
    }

    // initial
    setOpenDrawer(mediaQuery.matches)

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return (
    <div className="flex min-h-screen bg-gray-100 w-screen overflow-hidden">
      {/* SIDEBAR WRAPPER */}
      <div
        className={`
          fixed md:static z-40 flex
          transition-transform duration-300 ease-in-out
          ${openDrawer ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <Sidebar
          activeMenuId={activeMenuId}
          setActiveMenuId={setActiveMenuId}
        />

        <SidebarSubmenu
          activeMenuId={activeMenuId}
          onClose={() => setOpenDrawer(false)}
        />
      </div>

      {/* OVERLAY (MOBILE ONLY) */}
      {!openDrawer && null}
      {openDrawer && (
        <div
          onClick={() => setOpenDrawer(false)}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col relative z-10">
        <Topbar onToggle={() => setOpenDrawer((v) => !v)} />

        <main className="p-4 md:p-6 w-full">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
