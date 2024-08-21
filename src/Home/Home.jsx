import { Container, Box, Stack } from "@mui/material";
import HeroSlider from "../component/HeroSlider/HeroSlider";
import SearchHospital from "../component/SearchHospital/SearchHospital";
import FAQs from "../component/Sections/FAQs/FAQs.jsx";
import OurFamilies from "../component/Sections/OurFamilies/OurFamilies";
import Blogs from "../component/Sections/Blogs/Blogs.jsx";
import PatientCaring from "../component/Sections/PatientCaring/PatientCaring";
import Specialists from "../component/Sections/Specialists/Specialists";
import Specialization from "../component/Sections/Specialization/Specialization";
import Offers from "../component/Sections/Offers/Offers";
import NavBar from "../component/NavBar/NavBar.jsx";
import HeroServices from "../component/HeroSlider/HeroSlider.jsx";

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
      >
        <NavBar />
        <Container maxWidth="xl">
          <HeroSlider />
          <Stack
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <SearchHospital />
            <HeroServices />
          </Stack>
        </Container>
      </Box>

      <Offers />

      <Specialization />

      <Specialists />

      <PatientCaring />

      <Blogs />

      <OurFamilies />

      <FAQs />
    </Box>
  );
}
