import Nav from 'components/Nav';
import React from 'react';

import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import styled from 'styled-components';



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
const Wrapper = styled.div`
/* border:1px solid red; */
min-height: 100vh;
display: flex;
flex-direction: column;
`
const Main = styled.div`
/* border: 1px solid green ; */
flex-grow: 1;
overflow: auto;
`


function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Routes>
            <Route path="/" element={<Navigate to="/money" />} />
            <Route path="/tags" element={<Tags />} />
            <Route path="/money" element={<Money />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Main>
        <Nav />
      </Wrapper>
    </Router>
  );
}


export default App;
