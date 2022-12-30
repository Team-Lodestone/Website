import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/Home";

function App() {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  );
}

export default App;
