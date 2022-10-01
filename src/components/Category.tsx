import { useState } from "react"
import styled from "styled-components"

const Wrapper = styled.section`
position: relative;
  > ul{
    margin-top: 30px;
    font-size: 24px;
    display: flex;
    justify-content: center;   
    > li{
      padding: 8px 16px;
      text-align: center;
      position: relative; 
       &.selected::after{
        content: "";
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
       }
    }
  }
  > span{
    font-size: 16px;
    position: absolute;
    right: 10px;
    bottom: 8px;
  }
`


const Category: React.FC = () => {
  const categoryMap = { '-': '支出', '+': '收入' }
  type Keys = keyof typeof categoryMap
  const [categoryList] = useState<Keys[]>(['-', '+'])
  const [category, setCategory] = useState('-')

  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li key={c} className={category === c ? "selected" : ""}
            onClick={() => { setCategory(c) }}>{categoryMap[c]}
          </li>
        )}
      </ul>
      <span>取消</span>
    </Wrapper>
  )
}

export { Category };