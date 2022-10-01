import styled from "styled-components";

const Wrapper = styled.section`
display: flex;
flex-direction: column;
  > .output{
    background-color: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow:  inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  > .pad{
    background:#f5f5f5 ;
    display: flex;
    flex-wrap: wrap;
    > button{
      text-align: center;
      font-size: 18px;
      width: 25%;
      height: 64px;
      border: none;
      font-size: 18px;
      box-shadow: 0 0 3px rgba(0,0,0,0.25);
      &.ok{
        width:50%;
      }
    }
  }
`
export { Wrapper }