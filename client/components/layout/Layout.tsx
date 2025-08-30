import { Outlet } from "react-router-dom";
import Header from "./Header";
import SocialBar from "./SocialBar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Header />
      <main className="relative">
        <Outlet />
      </main>
      <SocialBar />
    </div>
  );
}
