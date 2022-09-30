import { Icon } from "components/Icon";
import { Layout } from "components/Layout";
import styled from "styled-components";
import { NoteSection } from "./Money/NoteSection";
import { NumberPadSection } from "./Money/NumberPadSection";
import { TagsSection } from "./Money/TagsSection";


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Money() {
  return (
    <MyLayout>
      <TagsSection />
      <NoteSection />
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