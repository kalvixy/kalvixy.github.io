import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Construction from "./pages/Construction";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Construction />}>
          {/**
           *       
           * <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
              </Route>
            </Routes>
          */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const domNode = document.getElementById('root');
console.log(domNode); // ???
const root = createRoot(domNode);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
