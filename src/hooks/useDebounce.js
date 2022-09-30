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

//   const debouncedQuery = useDebounce(searchQuery, 1000);
//   const { data } = useGetCountryByNameQuery(searchQuery);
//   dispatch(filtered(data));
