import { createId } from "lib/createId"
import styled from "styled-components"
import { useTags } from "useTags"

const Wrapper = styled.section`
flex-grow: 1;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
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
    &.selected{
      background: #f8d02d;
    }
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
type Props = {
  value: number[],
  onChange: (selected: number[]) => void //参数空，返回值空
}
const TagsSection: React.FC<Props> = (props) => {
  const { tags, addTag } = useTags()
  const selectedTagIds = props.value

  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId)
    if (index >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tagId))
    } else {
      props.onChange([...selectedTagIds, tagId])
    }
  }
  const getClass = (tagId: number) =>
    selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : ''

  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag.id} onClick={() => { onToggleTag(tag.id) }}
            className={getClass(tag.id)} > {tag.name}
          </li>
        )}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  )
}


export { TagsSection }