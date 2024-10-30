import { Navbar, CategoryBar, MovieList, EventCarousel } from "./components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <div className="bg-slate-300 flex flex-col gap-2">
      <Navbar />
      <CategoryBar />
      <Outlet/>
    </div>
    </>
  );
}

export default App;
