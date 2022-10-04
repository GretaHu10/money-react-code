import { Button } from "components/Button"
import { Icon } from "components/Icon"
import { Input } from "components/Input"
import { Layout } from "components/Layout"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { useTags } from "useTags"

const Wrapper = styled.section`
background: #f8d02d;
position: relative;
  > div {
    padding-top: 38px;
    padding-bottom: 8px;
    font-size: 24px;
    display: flex;
    justify-content: center;   
  }
  > span{
    font-size: 16px;
    position: absolute;
    right: 10px;
    bottom: 8px;
  }
`
const InputWrapper = styled.div`
    background: white;
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
            <Wrapper>
                <Icon name="left" />
                <div>编辑标签</div>
            </Wrapper>
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