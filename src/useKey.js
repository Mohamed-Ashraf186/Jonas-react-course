import { act } from "react";
import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", callback);
      return () => document.removeEventListener("keydown", callback);
    },
    [action, key]
  );
}

// useEffect(
//   function () {
//     function callback(e) {
//       if (e.code === "Escape") {
//         action();
//       }
//     }

//     document.addEventListener("keydown", callback);

//     return function () {
//       document.removeEventListener("keydown", callback);
//     };
//   },

//   [onCloseMovie]
// );
