import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import JobForm from "./pages/JobForm";
import AccomodationForm from "./pages/AccomodationForm";
import VolunteerForms from "./pages/VolunteerForms";
import DonationPage from "./pages/DonationPage";
import AboutUsPage from "./pages/AboutUsPage";
import FindSupportPage from "./pages/FindSupportPage";
import GeoLocSearchPage from "./pages/GeoLocSearchPage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/jobform":
        title = "";
        metaDescription = "";
        break;
      case "/accomodationform":
        title = "";
        metaDescription = "";
        break;
      case "/volunteerformspage":
        title = "";
        metaDescription = "";
        break;
      case "/aboutuspage":
        title = "";
        metaDescription = "";
        break;
      case "/aboutuspage1":
        title = "";
        metaDescription = "";
        break;
      case "/findsupportpage":
        title = "";
        metaDescription = "";
        break;
      case "/geolocsearchpage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/jobform" element={<JobForm />} />

      <Route path="/accomodationform" element={<AccomodationForm />} />

      <Route path="/volunteerformspage" element={<VolunteerForms />} />

      <Route path="/aboutuspage" element={<DonationPage />} />

      <Route path="/aboutuspage1" element={<AboutUsPage />} />

      <Route path="/findsupportpage" element={<FindSupportPage />} />

      <Route path="/geolocsearchpage" element={<GeoLocSearchPage />} />
    </Routes>
  );
}
export default App;
