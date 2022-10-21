import { Layout } from "components/Layout";
import { useRecords } from "hooks/useRecords";
import { useTags } from "hooks/useTags";
import { useState } from "react";
import { CategorySection } from "./Money/CategorySection";

const Statistics = () => {
    const [category, setCategory] = useState<'-' | '+'>('-')
    const { records } = useRecords()
    const { getName } = useTags()
    return (
        <Layout>
            <CategorySection
                value={category}
                onChange={value => setCategory(value)} />
            <div>
                {records.map(r => {
                    return <div>
                        {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
                        <hr />
                        {r.amount}
                        <hr />
                        {r.createdAt}
                    </div>
                })}
            </div>
        </Layout>
    )
}

export { Statistics };