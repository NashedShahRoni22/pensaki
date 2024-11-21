import { Outlet, ScrollRestoration } from "react-router-dom";
import ContactBar from "../shared/ContactBar";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

export default function Main() {
  return (
    <main className="font-poppins">
      <ScrollRestoration />
      <ContactBar />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
