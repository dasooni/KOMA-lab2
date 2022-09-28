import ReactDOM from "react-dom/client"
import { BrowserRouter as  Router, Routes, Route, Link } from "react-router-dom";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";


export default function App() {
  return (
    <Router> 
        <div>
            <nav>
              <Link to="/">Home</Link>
            </nav>
            <Routes>
                <Route path="/country/:id" element={<CountryDetails/>}></Route>
                <Route path="/" element={<CountryList/>} ></Route>
            </Routes>
        </div>
    </Router>

  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);