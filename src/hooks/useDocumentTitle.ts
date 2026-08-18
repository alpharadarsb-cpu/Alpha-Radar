import { useEffect } from "react";

const SITE_TITLE = "Alpha Radar — Leadership Consulting, Business Growth & Corporate Learning";

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    const previous = document.title;
    document.title = title ? `${title} | Alpha Radar` : SITE_TITLE;
    return () => {
      document.title = previous;
    };
  }, [title]);
}
