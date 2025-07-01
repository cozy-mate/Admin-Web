import { Route, Routes } from "react-router-dom";
import MainPage from "@/pages/main";
import Layout from "./layout";
import InquiryPage from "@/pages/inquiry";
import InquiryDetailPage from "@/pages/inquiryDetail";
import ReportPage from "@/pages/report";
import ReportDetailPage from "@/pages/reportDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />

      <Route element={<Layout />}>
        <Route path="/inquiry" element={<InquiryPage />} />
        <Route path="/inquiry/:id" element={<InquiryDetailPage />} />

        <Route path="/report" element={<ReportPage />} />
        <Route path="/report/:id" element={<ReportDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
