import { useTypewriter } from "../hooks/useTypewriter";
import Image from "next/image";

const HERO_ROLES = [
  "Senior Android Developer",
  "Full‑Stack Web Developer",
  "Mobile App Architect",
  "AI & ML Enthusiast",
  "Cybersecurity Learner",
];

export default function Hero() {
  const displayedRole = useTypewriter(HERO_ROLES, 60, 1500);

  return (
    <section className="relative flex h-screen flex-col justify-center gap-6 px-8">
      <div className="absolute inset-0 -z-10 opacity-15 dark:opacity-10">
        <Image
          src="https://res.cloudinary.com/dye5qpwii/image/upload/v1778795825/cloud-icon-poster-1_2_opl7sy.png"
          alt="Cloud background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="space-y-2 max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          မိုးကျော်အောင်{" "}
          <span className="text-teal-600 dark:text-teal-400">· Moe Kyaw Aung</span>
        </h1>

        <p
          className="text-lg text-teal-600 dark:text-teal-400"
          aria-live="polite"
        >
          {displayedRole}
          <span className="animate-blink ml-1">|</span>
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          Tachileik, Myanmar 🇲🇲 ↔ Bangkok, Thailand 🇹🇭
        </p>
      </div>

      <p className="max-w-xl text-sm text-gray-700 dark:text-gray-300">
        Passionate developer building modern mobile and web applications with Kotlin, Jetpack, Next.js, and AI tools.
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href="https://gravatar.com/moekyawaung13721"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-teal-600 px-4 py-2 text-sm text-white hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-400"
        >
          Gravatar Profile
        </a>
        <a
          href="https://lovable.dev/invite/ZVLZ2S5"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
        >
          Lovable WPA
        </a>
        <a
          href="https://moekyawaung.lovable.app"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-gray-700 px-4 py-2 text-sm text-white hover:bg-gray-800"
        >
          moekyawaung.lovable.app
        </a>
      </div>
    </section>
  );
}
