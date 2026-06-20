import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (threshold = 0.2) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // якщо анімація має спрацювати лише один раз
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};

export default useIntersectionObserver;