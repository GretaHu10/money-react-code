import Icon from "components/Icon";
import Layout from "components/Layout";
import styled from "styled-components";



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
const TagsSection = styled.section`
  background-color:white;
  padding: 12px 16px;
  box-shadow: 0 0 3px rgba(255,255,255,0.25);
  > ol{
    margin: 0 -12px;
    > li{
      background-color: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
    }
  }
  > button{
    margin-top: 8px;
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
  }
`
const NotesSection = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label{
    display: flex;
    align-items: center;
    > span{
        margin-right: 16px;
        white-space: nowrap;
    }
    > input{
        width: 100%;
        height: 72px;
        background: none;
        border: none;
    }
  }
`
const NumberPadSection = styled.section`
display: flex;
flex-direction: column;
  > .output{
    background-color: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px rgba(0,0,0,0.25);
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
function Money() {
  return (
    <Layout>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li >收入</li>
        </ul>
        <span>取消</span>
      </CategorySection>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注：</span>
          <input type="text" placeholder="在这里添加备注" />
        </label>
      </NotesSection>
      <NumberPadSection>
        <div className="output">100</div>
        <div className="pad clearfix">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>
            <Icon name="date" />
          </button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>
            <Icon name="clear" />
          </button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>
            <Icon name="back" />
          </button>
          <button>.</button>
          <button>0</button>
          <button className="ok">ok</button>
        </div>
      </NumberPadSection>
    </Layout>
  )
}
export default Money;