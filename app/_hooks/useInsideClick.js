import { useEffect, useRef } from "react";

export function useInsideClick(handler, listenCapturing = true) {
  const ref = useRef(null);

  useEffect(
    function () {
      function handleClick(event) {
        if (ref.current && ref.current.contains(event.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing);
      return () => {
        document.removeEventListener("click", handleClick, listenCapturing);
      };
    },
    [handler, listenCapturing]
  );

  return ref;
}
