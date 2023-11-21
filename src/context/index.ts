import { createContext } from "react";

export default createContext({
    pageNumber: 0,
    handlePageNumber: (_event: React.SyntheticEvent, _newPage: number) => {},
    drawerOpen: false,
    setDrawerOpen: (_isOpen : boolean )=> {},
});

