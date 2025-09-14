import { useEffect, useState, useRef } from "react";

const useRevealOnScroll = (threshold = 0.3) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // ✅ reveal once
          observer.unobserve(entry.target); // ✅ stop observing after first reveal
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return [ref, isVisible];
};

export default useRevealOnScroll;
