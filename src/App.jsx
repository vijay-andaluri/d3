import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import OrgChart from "./pages/OrgChart";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/org-chart" element={<OrgChart />} />
      </Routes>
    </BrowserRouter>
  )
}
