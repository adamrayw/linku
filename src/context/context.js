import { createContext } from "react";

export const Context = createContext([[], () => {}]);
export const Tema = createContext("");
export const IndexBorder = createContext();

// export const ContextProvider = ({ children }) => {
//   const [context, setContext] = useState([]);
//   return (
//     <Context.Provider value={[context, setContext]}>
//       {children}
//     </Context.Provider>
//   );
// };
