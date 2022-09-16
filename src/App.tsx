import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom';

const Tags = () => (
  <div><h2>标签页</h2></div>
)
const Money = () => (
  <div><h2>记账页</h2></div>
)

const Statistics = () => (
  <div><h2>统计页</h2></div>
)
const NoMatch = () => (
  <div>
    <h3>
      路径写错啦
    </h3>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to="/tags">标签页</Link></li>
          <li><Link to="/money">记账页</Link></li>
          <li><Link to="/statistics">统计页</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<Navigate to="/money" />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/money" element={<Money />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
