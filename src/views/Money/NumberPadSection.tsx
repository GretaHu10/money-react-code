// import { Icon } from "components/Icon";
import React, { useState } from "react";
import { generateOutput } from "./NumberPadSection/generateOutput";
import { Wrapper } from "./NumberPadSection/Wrapper";

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
    if (text === 'ok') {
      // TODO
      return
    }
    if (text === '日期') {
      // date
      return
    }
    setOutput(generateOutput(text, output))
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