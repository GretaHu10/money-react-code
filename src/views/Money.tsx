import Icon from "components/Icon";
import Layout from "components/Layout";
import styled from "styled-components";



const CategorySection = styled.section`
position: relative;
  > ul{
    margin-top: 20px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    > li{
      /* border:1px solid red; */
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
    /* display: inline-flex; */
    font-size: 16px;
    position: absolute;
    right: 10px;
    bottom: 8px;
  }
`
const TagsSection = styled.section`
  background-color:white;
  padding: 12px 16px;
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
  background-color: #f5f5f5;
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
                <div>100</div>
                <div>
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
                    <button>0</button>
                    <button>.</button>
                    <button>ok</button>
                </div>
            </NumberPadSection>
        </Layout>
    )
}
export default Money;