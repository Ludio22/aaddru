import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Main from "./components/main.jsx";
import Progress from "./components/progress.jsx";
import About from "./components/about.jsx";
import './css/app.css'
import FeedBack from "./components/feed_back.jsx";
import Donation from "./components/donation";
import Version from "./components/versions.jsx";

function App(props) {
  return (
    <BrowserRouter>
      <div className="Main_Container">
        <Header />
        <Route path="/" exact component={() => <Main main={props.state.main} />} />
        <Route path="/progress" exact component={() => <Progress cases={props.state.cases} />} />
        <Route path="/about" exact component={() => <About about={props.state.about} />} />
        <Route path="/feed_back" exact component={() => <FeedBack />} />
        <Route path="/donation" exact component={() => <Donation />} />
        <Route path="/version" exact component={() => <Version />} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
