import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/myapps" element={<Navigate replace to="/learn" />}></Route>
      <Route path="/learn" element={<Learn />}>
        <Route path="courses" element={<Courses />}>
          <Route path=":courseid" element={<CourseId />}></Route>
        </Route>
        <Route path="bundles" element={<Bundles />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  </Router>
);

function Home() {
  return (
    <div>
      <h1>Home route</h1>
    </div>
  );
}

function Learn() {
  return (
    <div>
      <h1>Learn</h1>
      <h4>All courses are listed below</h4>
      <Link to="/learn/courses">courses</Link> |
      <Link to="/learn/bundles">bundle</Link>
      <Outlet />
    </div>
  );
}

function Courses() {
  const courseList = ['React', 'Agular', 'Vwe', 'NodeJs'];
  const randomCourseName =
    courseList[Math.floor(Math.random * courseList.length)];
  return (
    <div>
      <h1>Course List</h1>
      <h4>Course Card</h4>
      <p>More Tests</p>
      <NavLink to={`/learn/courses/${randomCourseName}`}>
        {randomCourseName}
      </NavLink>
      <Outlet />
    </div>
  );
}

function Bundles() {
  return (
    <div>
      <h1>Bundle List</h1>
      <h4>Bundle Card</h4>
    </div>
  );
}

function CourseId() {
  const navigate = useNavigate();
  const { courseid } = useParams();
  return (
    <div>
      <h1>URL params is: {courseid}</h1>
      <button
        onClick={() => {
          navigate('/dashboard', { state: courseid });
        }}
        className="btn btn-warning"
      >
        Price
      </button>
      <Link to="/dashboard" state={courseid}>
        Test Link
      </Link>
    </div>
  );
}

function Dashboard() {
  const location = useLocation();
  return (
    <div>
      <h1>Info that I got here is {location.state}</h1>
    </div>
  );
}

reportWebVitals();
