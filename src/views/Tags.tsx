import { Layout } from "components/Layout";
import { useTags } from "useTags";

function Tags() {
    const { tags, setTags } = useTags()
    return (
        <Layout>
            <h2>标签页</h2>
        </Layout>)
}

export { Tags };