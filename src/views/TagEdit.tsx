import { Button } from "components/Button"
import { Center } from "components/Center"
import { Gap } from "components/Gap"
import { Icon } from "components/Icon"
import { Input } from "components/Input"
import { Layout } from "components/Layout"
import { Topbar } from "components/Topbar"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { useTags } from "useTags"

const InputWrapper = styled.div`
    background:white;
    padding: 0px 16px;
    margin-top: 8px;
`



type Params = {
    id: string
}
const TagEdit: React.FC = (props) => {
    const { findTag, updateTag } = useTags()
    let { id: idstring } = useParams<Params>()
    const tag = findTag(parseInt(idstring!))
    return (
        <Layout>
            <Topbar>
                <Icon name="left" />
                <div>编辑标签</div>
                <Icon />
            </Topbar>
            <InputWrapper>
                <Input label="标签名" type="text" placeholder="可以写标签名啦"
                    value={tag.name}
                    onChange={(e) => {
                        updateTag(tag.id, { name: e.target.value })
                    }} />
            </InputWrapper>
            <Center>
                <Gap /><Gap /><Gap />
                <Button>删除标签</Button>
            </Center>
        </Layout>
    )
}


export { TagEdit }