import { useParams } from "react-router-dom"
import { useTags } from "useTags"

type Params = {
    id: string
}
const TagEdit: React.FC = (props) => {
    const { findTag } = useTags()
    let { id } = useParams<Params>()
    const tag = findTag(parseInt(id!))
    return (
        <div>
            {tag.name}
        </div>
    )
}
export { TagEdit }