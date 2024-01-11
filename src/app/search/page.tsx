import ClientSearch from "@/components/search/client.search";
import Container from "@mui/material/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search your track",
  description: "Miêu tả thôi mà",
};

const SearchPage = () => {
  return (
    <Container sx={{ mt: 3 }}>
      <ClientSearch />
    </Container>
  );
};

export default SearchPage;
