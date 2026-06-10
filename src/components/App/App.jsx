import { Route, Routes } from "react-router-dom";
import AppBar from "./AppBar/AppBar.jsx";
import MobileMenu from "./MobileMenu/MobileMenu.jsx";
import Loader from "./Loader/Loader.jsx";
import Footer from "./Footer/Footer.jsx";
import { lazy, Suspense, useState } from "react";

import css from "./App.module.css";

const Home = lazy(() => import("../pages/Home/Home.jsx"));

const App = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleMobileOpen = () => {
    setIsMobileOpen(!isMobileOpen);
  }
  return (
    <>
      <AppBar isOpen={isMobileOpen} onOpen={handleMobileOpen}/>

      <MobileMenu isOpen={isMobileOpen} onClose={handleMobileOpen}/>

      <main className={css.content}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;