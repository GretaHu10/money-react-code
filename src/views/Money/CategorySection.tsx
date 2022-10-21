import { Topbar } from "components/Topbar";
import { useState } from "react"
import styled from "styled-components"

const Wrapper = styled.ul`
    display: flex;
    > li{
      padding: 0px 16px 8px 16px;
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
  > span{
    font-size: 16px;
    position: absolute;
    right: 10px;
    bottom: 8px;
  }
`

type Props = {
  value: '-' | '+',
  onChange: (value: '-' | '+') => void;
}
const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = { '-': '支出', '+': '收入' }
  type Keys = keyof typeof categoryMap
  const [categoryList] = useState<Keys[]>(['-', '+'])
  const category = props.value

  return (
    <Topbar>
      <Wrapper>
        {categoryList.map(c =>
          <li key={c} className={category === c ? "selected" : ""}
            onClick={() => { props.onChange(c) }}>{categoryMap[c]}
          </li>
        )}
      </Wrapper>
    </Topbar>
  )
}

export { CategorySection };