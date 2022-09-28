import { Icon } from "components/Icon";
import { Layout } from "components/Layout";
import styled from "styled-components";
import { NotesSection } from "./Money/NotesSection";
import { NumberPadSection } from "./Money/NumberPadSection";
import { TagsSection } from "./Money/TagsSection";


const MyLayout = styled(Layout)`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
`

function Money() {
  return (
    <MyLayout>
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
    </MyLayout>
  )
}
export { Money };