import styled from "styled-components"

const CategorySection = styled.section`
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


const Category = () => {
    return (
        <CategorySection>
            <ul>
                <li className="selected">支出</li>
                <li >收入</li>
            </ul>
            <span>取消</span>
        </CategorySection>
    )
}

export { Category };