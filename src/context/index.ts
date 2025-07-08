import { createContext, Dispatch, SetStateAction } from "react";

export interface MainContextType {
  pageNumber: number;
  handlePageNumber: (event: React.SyntheticEvent, newValue: number) => void;
  drawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
  direction: "ltr" | "rtl";
  setDirection: Dispatch<SetStateAction<"ltr" | "rtl">>;
  mode: string;
  setMode: Dispatch<SetStateAction<string>>;
}

const MainContext = createContext<MainContextType>({
  pageNumber: 0,
  handlePageNumber: () => {},
  drawerOpen: false,
  setDrawerOpen: () => {},
  direction: "ltr",
  setDirection: () => {},
  mode: "light",
  setMode: () => {},
});

export default MainContext;
