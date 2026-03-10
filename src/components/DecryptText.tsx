"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useInView } from "framer-motion";

interface DecryptTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export default function DecryptText({
  text,
  className = "",
  delay = 0,
  speed = 50,
}: DecryptTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayText, setDisplayText] = useState(text);
  const lastTextRef = useRef(text);

  const runAnimation = useCallback((animDelay: number) => {
    const timeout = setTimeout(() => {
      let iteration = 0;
      const textChars = text.split("");
      const totalIterations = Math.min(text.length * 2, 40);

      const interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";

              // Characters that have been "decrypted"
              if (index < iteration / 3) {
                return text[index];
              }

              // Get shuffled char from text itself for width consistency
              const nonSpaceChars = textChars.filter(c => c !== " " && c !== char);
              if (nonSpaceChars.length === 0) return char;
              return nonSpaceChars[Math.floor(Math.random() * nonSpaceChars.length)];
            })
            .join("")
        );

        iteration++;

        if (iteration > totalIterations) {
          clearInterval(interval);
          setDisplayText(text);
        }
      }, speed);

      return () => clearInterval(interval);
    }, animDelay);

    return () => clearTimeout(timeout);
  }, [text, speed]);

  // Re-animate when text changes (for dynamic content like Collection)
  useEffect(() => {
    if (text !== lastTextRef.current) {
      lastTextRef.current = text;
      return runAnimation(0);
    }
  }, [text, runAnimation]);

  // Initial animation on scroll into view
  useEffect(() => {
    if (!isInView) return;
    return runAnimation(delay);
  }, [isInView, delay, runAnimation]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
}
