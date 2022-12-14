// import { Icon } from "components/Icon";
import React, { useState } from "react";
import { generateOutput } from "./NumberPadSection/generateOutput";
import { Wrapper } from "./NumberPadSection/Wrapper";

type Props = {
  value: number,
  onChange: (value: number) => void,
  onOk?: () => void
}
const NumberPadSection: React.FC<Props> = (props) => {
  // const output = props.value.toString()
  const [output, _setOutput] = useState(props.value.toString())
  const setOutput = (output: string) => {
    let newOutput
    if (output.length > 16) {
      newOutput = output.slice(0, 16)
    } else if (output.length === 0) {
      newOutput = '0'
    } else {
      newOutput = output
    }
    _setOutput(newOutput)
    props.onChange(parseFloat(newOutput))
  }
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent
    if (text === null) { return }
    if (text === 'ok') {
      if (props.onOk) { props.onOk() }
      return
    }
    setOutput(generateOutput(text, output))
  }
  return (
    <Wrapper>
      <div className="output">{output}</div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="ok">ok</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </Wrapper>)
}

export { NumberPadSection }