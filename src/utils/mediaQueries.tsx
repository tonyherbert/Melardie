import { useEffect, useState } from "react";

interface MediaQuery {
  query: string;
  matches: boolean;
}

const useMediaQuery = (query: string): MediaQuery => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const updateMatches = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    mediaQuery.addEventListener("change", updateMatches);
    setMatches(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener("change", updateMatches);
    };
  }, [query]);

  return {
    query,
    matches,
  };
};

export const mediaQueries = {
  small: "(max-width: 768px)",
  medium: "(min-width: 769px) and (max-width: 1024px)",
  large: "(min-width: 1025px)",
};

export default useMediaQuery;
