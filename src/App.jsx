import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./layouts/DefaultLayout";
import RecordsIndex from "./pages/RecordsIndex";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />} path="/">
          <Route index element={<HomePage />}></Route>
          <Route path="/records" element={<RecordsIndex />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
