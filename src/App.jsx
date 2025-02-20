import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./layouts/DefaultLayout";
import RecordsIndex from "./pages/RecordsIndex";
import AddRecord from "./pages/AddRecord";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />} path="/">
          <Route index element={<HomePage />}></Route>
          <Route path="/records" element={<RecordsIndex />}></Route>
          <Route path="addrecord" element={<AddRecord />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
