import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./pages/DashboardLayout";
import Submenu2 from "./pages/Submenu2";
import CourseList from "./pages/CourseList";
import CourseCreate from "./pages/CourseCreate";
// import DashboardLayout from "./layouts/DashboardLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<CourseList/>} />
          <Route path="/course" element={<div>Create Course</div>} />
          <Route path="/course/create" element={<CourseCreate/>} />
          <Route path="/submenu2" element={<Submenu2/>} />
          <Route path="/submenu3" element={<Submenu2/>} />
        </Route>
         <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
