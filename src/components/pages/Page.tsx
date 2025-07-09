import { Box } from "@mui/material";
interface PageProps {
  index: number;
  children: React.ReactNode;
  pageNumber: number;
}
const Page = (props: PageProps) => {
  const { children, pageNumber, index, ...others } = props;

  return (
    <div
      role="tabpanel"
      hidden={pageNumber !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`sidebar-tab-${index}`}
      {...others}
    >
      {pageNumber === index && <Box sx={{ height: "100vh", overflow: "hidden" }}>{children}</Box>}
    </div>
  );
};

export default Page;
