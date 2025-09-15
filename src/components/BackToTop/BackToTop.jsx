import { useEffect, useState, useRef } from "react";
import "./BackToTop.scss";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const docHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

          const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

          setProgress(scrolled);
          setIsVisible(scrollTop > 50);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const size = 30;
  const strokeWidth = 1;
  const outerSize = size + strokeWidth * 2; // 42px svg
  const perimeter = size * 4;

  return (
    <>
      {isVisible && (
        <div className="back-to-top" onClick={scrollToTop}>
          <svg
            className="progress-bars"
            width={outerSize}
            height={outerSize}
          >
            <rect
              x={strokeWidth / 2}
              y={strokeWidth / 2}
              width={size}
              height={size}
              rx="3"
              ry="3"
              stroke="black"
              fill="none"
              strokeWidth={strokeWidth}
              strokeDasharray={perimeter}
              strokeDashoffset={perimeter - (progress / 100) * perimeter}
            />
          </svg>
          <span className="arrow">↑</span>
        </div>
      )}
    </>
  );
}
