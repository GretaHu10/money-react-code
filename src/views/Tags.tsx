import { Icon } from "components/Icon";
import { Layout } from "components/Layout";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTags } from "useTags";


const TagList = styled.ol`
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
const Button = styled.button`
    border:none;
    background: #f8d02d;
    color: white;
    font-size: 16px;
    padding: 8px 13px;
    border-radius: 4px;
`
const Center = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center ;
`
const Gap = styled.div`
    height: 16px;
`

function Tags() {
    const { tags } = useTags()
    return (
        <Layout>
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
                <Button>新增标签</Button>
            </Center>
        </Layout>)
}

export { Tags };