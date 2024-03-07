import { useState, useEffect } from "react";

export default function useLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflowY = "auto";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return loading;
}
