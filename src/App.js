import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Main from "./components/main.jsx";
import './css/app.css'

function App(props) {
  return (
    <BrowserRouter>
      <div className="Main_Container">
        <Header />
          <Route rath="/" exact component={() => <Main />} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
