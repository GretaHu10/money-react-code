import Layout from 'components/Layout';
import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/money" />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/money" element={<Money />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

const Tags = () => (
  <Layout>
    <h2>标签页</h2>
  </Layout>
)
const Money = () => (
  <Layout>
    <h2>记账页</h2>
  </Layout>

)

const Statistics = () => (
  <Layout>
    <h2>统计页</h2>
  </Layout>
)
const NoMatch = () => (
  <h3>
    路径写错啦
  </h3>
);

export default App;
