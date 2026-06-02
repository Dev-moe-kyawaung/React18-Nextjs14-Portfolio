import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between gap-4 px-8 py-5 backdrop-blur-md bg-white/70 dark:bg-gray-900/70">
      <div className="text-xl font-bold text-teal-600 dark:text-teal-400">
        MKA
      </div>

      <div className="flex items-center gap-6">
        <Link href="#about" className="text-sm text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400">
          About
        </Link>
        <Link href="#skills" className="text-sm text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400">
          Skills
        </Link>
        <Link href="#apps" className="text-sm text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400">
          Apps
        </Link>
        <Link
          href="https://github.com/Dev-moe-kyawaung"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
        >
          GitHub
        </Link>
        <Link
          href="https://gravatar.com/moekyawaung13721"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
        >
          Gravatar
        </Link>
      </div>
    </nav>
  );
}
