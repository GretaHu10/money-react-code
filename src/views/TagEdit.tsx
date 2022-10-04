import { Button } from "components/Button"
import { Icon } from "components/Icon"
import { Input } from "components/Input"
import { Layout } from "components/Layout"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { useTags } from "useTags"

const Topbar = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
padding: 30px 14px 8px 14px;
font-size: 24px;
background: #f8d02d;
> .icon{
    width: 0.75em;
}
`
const InputWrapper = styled.div`
    background:white;
    padding: 0px 16px;
    margin-top: 8px;
`



type Params = {
    id: string
}
const TagEdit: React.FC = (props) => {
    const { findTag } = useTags()
    let { id } = useParams<Params>()
    const tag = findTag(parseInt(id!))
    return (
        <Layout>
            <Topbar>
                <Icon name="left" />
                <div>编辑标签</div>
                <Icon />
            </Topbar>
            <InputWrapper>
                <Input label="标签名" type="text" placeholder={tag.name} />
            </InputWrapper>
            <div>
                <Button>删除标签</Button>
            </div>
        </Layout>
    )
}


export { TagEdit }