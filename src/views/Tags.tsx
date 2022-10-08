import { Button } from "components/Button";
import { Center } from "components/Center";
import { Gap } from "components/Gap";
import { Icon } from "components/Icon";
import { Layout } from "components/Layout";
import { Topbar } from "components/Topbar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTags } from "useTags";


const TagList = styled.ol`
    margin-top: 8px;
    font-size: 16px;
    background: white;
    > li{
        border-bottom: 1px solid #d5d5d9;
        margin:0 16px;
        > a{
            padding: 12px 16px 12px 16px;        
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            > .icon{
                width: 1em;
                height: 1em;
                fill:#333;
            }
        }       
    }
`

function Tags() {
    const { tags, addTag } = useTags()
    return (
        <Layout>
            <Topbar>
                <div>标签列表</div>
            </Topbar>
            <TagList>
                {tags.map(tag =>
                    <li key={tag.id}>
                        <Link to={'/tags/' + tag.id}>
                            <span>{tag.id}:{tag.name}</span>
                            <Icon name="right" />
                        </Link>
                    </li>)}
            </TagList>

            <Center>
                <Gap /><Gap /><Gap />
                <Button onClick={addTag}>新增标签</Button>
            </Center>
        </Layout>)
}

export { Tags };