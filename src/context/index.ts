import { createContext } from "react";

export default createContext({
    pageNumber: 0,
    handlePageNumber: (_event: React.SyntheticEvent, _newPage: number) => {},
    handleThemeChange: () => {},
    drawerOpen: false,
    setDrawerOpen: (_isOpen : boolean )=> {},
    language: "fa",
    handleChangeLanguage: (_language: string) => {},
    direction:"rtl",
    mode: "dark"
});

