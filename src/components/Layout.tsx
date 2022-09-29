import styled from "styled-components";
import { Category } from "./Category";
import { Nav } from "./Nav";

const Wrapper = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
`
const Main = styled.div`
flex-grow: 1;
overflow: auto;
`

const Layout = (props: any) => {
    return (
        <Wrapper>
            <Category />
            <Main className={props.className}>
                {props.children}
            </Main>
            <Nav />
        </Wrapper>
    )
}
export { Layout };