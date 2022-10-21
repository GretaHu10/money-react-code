import { Layout } from "components/Layout";
import { useRecords } from "hooks/useRecords";
import { useTags } from "hooks/useTags";
import { useState } from "react";
import { CategorySection } from "./Money/CategorySection";
import day from 'dayjs';
import styled from "styled-components";

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    background: white;
    font-size: 18px;
    line-height: 20px;
    padding: 10px 16px;
    > .note{
        margin-right: auto;
        margin-left: 16px;
        color: #999;
    }
`
const Statistics = () => {
    const [category, setCategory] = useState<'-' | '+'>('-')
    const { records } = useRecords()
    const { getName } = useTags()
    const selectedRecords = records.filter(r => r.category === category)
    return (
        <Layout>
            <CategorySection
                value={category}
                onChange={value => setCategory(value)} />
            <div>
                {selectedRecords.map(r => {
                    return <Item>
                        <div className="tags">
                            {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
                        </div>
                        {r.note && <div className="note">
                            {r.note}
                        </div>}
                        <div className="amount">
                            ￥{r.amount}
                        </div>
                        <div className="date">
                            {day(r.createdAt).format('YYYY年MM月DD日')}
                        </div>
                    </Item>
                })}
            </div>
        </Layout>
    )
}

export { Statistics };