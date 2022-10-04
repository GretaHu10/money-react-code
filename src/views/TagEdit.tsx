import { Button } from "components/Button"
import { Icon } from "components/Icon"
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
                <div>编辑标签</div>
                <span>取消</span>
            </Wrapper>
            <div>
                <label>
                    <span>标签名</span>
                    <input type="text" placeholder={tag.name} />

                </label>
            </div>
            <div>
                <Button>删除标签</Button>
            </div>

        </Layout>
    )
}


export { TagEdit }