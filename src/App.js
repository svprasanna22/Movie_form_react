import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import FeedbackForm from "./Componets/GiveFeedback";
import ViewReviews from "./Componets/ViewReviews";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1>🎬 Movie Feedback App</h1>
        <nav className="nav">
          <Link to="/feedback">Give Feedback</Link>
          <Link to="/reviews">View Reviews</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/feedback" />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/reviews" element={<ViewReviews />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
