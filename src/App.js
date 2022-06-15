import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from "react-router-dom";
import Header from "../src/pages/Header";
import Main from "../src/pages/Main";
import Footer from "../src/pages/Footer";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
