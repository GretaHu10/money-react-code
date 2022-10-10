import { Layout } from "components/Layout";
import { useRecords } from "hooks/useRecord";
import { useState } from "react";
import styled from "styled-components";
import { CategorySection } from "./Money/CategorySection";
import { NoteSection } from "./Money/NoteSection";
import { NumberPadSection } from "./Money/NumberPadSection";
import { TagsSection } from "./Money/TagsSection";


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
type Category = '-' | '+'
const defaultFormDate = {
  category: '-' as Category,
  tagIds: [] as number[],
  note: '',
  amount: 0
}

function Money() {
  console.log('Money 执行了')
  const [selected, setSelected] = useState(defaultFormDate)
  const { records, addRecord } = useRecords()

  console.log('records')
  console.log(records)

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({ ...selected, ...obj })
  }

  const submit = () => {
    addRecord(selected)
    alert('记好啦')
    setSelected(defaultFormDate)
  }

  return (
    <MyLayout>
      {JSON.stringify(selected)}
      <CategorySection
        value={selected.category}
        onChange={category => onChange({ category })} />
      <TagsSection
        value={selected.tagIds}
        onChange={tagIds => onChange({ tagIds })} />
      <NoteSection
        value={selected.note}
        onChange={note => onChange({ note })} />
      <NumberPadSection
        value={selected.amount}
        onChange={amount => onChange({ amount })}
        onOk={submit} />
    </MyLayout>
  )
}
export { Money };