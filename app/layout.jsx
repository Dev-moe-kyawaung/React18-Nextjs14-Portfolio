import "./globals.css";
import Navbar from "../components/Navbar";
import DarkModeToggle from "../components/DarkModeToggle";
import ParticlesBackground from "../components/ParticlesBackground";

export const metadata = {
  title: "Moe Kyaw Aung · Senior Android Developer",
  description: "Senior Android Developer portfolio by Moe Kyaw Aung (Dev-moe-kyawaung)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head />
      <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 antialiased">
        <ParticlesBackground />
        <Navbar />
        <DarkModeToggle />
        {children}
      </body>
    </html>
  );
}
