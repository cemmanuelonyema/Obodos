// import React, { useEffect, useState } from 'react';

// export const useDebounce = (value, delay) => {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     //clean up - runs on every rerender
//     return () => {
//       clearTimeout(timeoutId);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// };
