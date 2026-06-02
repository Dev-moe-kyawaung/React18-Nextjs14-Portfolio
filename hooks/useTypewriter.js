import { useState, useEffect } from "react";

export function useTypewriter(texts, speed = 60, delayBetween = 1500) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const current = texts[index];

      if (!isDeleting && charIndex < current.length) {
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), delayBetween);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }

      setDisplayedText(current.slice(0, charIndex));
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index, texts, speed, delayBetween]);

  return displayedText;
}
