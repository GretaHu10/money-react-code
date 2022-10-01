// import { Icon } from "components/Icon";
import React, { useState } from "react";
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
const NumberPadSection: React.FC = () => {
  const [output, _setOutput] = useState('0')
  const setOutput = (output: string) => {
    if (output.length > 16) {
      output = output.slice(0, 16)
    } else if (output.length === 0) {
      output = '0'
    }
    _setOutput(output)
  }
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent
    if (text === null) { return }
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (output === '0') {
          setOutput(text)
        } else {
          setOutput(output + text)
        }
        break;
      case '.':
        if (output.indexOf('.') >= 0) { return }
        setOutput(output + '.')
        break
      case '日期':
        console.log('日期')
        break
      case '清空':
        setOutput('')
        break
      case '删除':
        if (output.length === 1) {
          setOutput('')
        } else {
          setOutput(output.slice(0, -1))
        }
        break
      case 'ok':
        console.log('ok')
        break

    }
  }
  return (
    <Wrapper>
      <div className="output">{output}</div>
      <div className="pad" onClick={onClickButtonWrapper}>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>日期</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>.</button>
        <button>0</button>
        <button className="ok">ok</button>
      </div>
    </Wrapper>)
}

export { NumberPadSection }