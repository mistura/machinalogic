import { useEffect } from "react";

const defaultTitle = document.title;

function fullTitle(title?: string) {
  return title ? `${title} - ${defaultTitle}` : defaultTitle;
}

export function useTitle(title?: string) {
  useEffect(() => {
    document.title = fullTitle(title);
  }, [title]);
}
