import styled from "styled-components";
import { Category } from "./Category";
import { Nav } from "./Nav";

const Wrapper = styled.div`
/* border:1px solid red; */
height: 100vh;
display: flex;
flex-direction: column;
`
const Main = styled.div`
/* border: 1px solid green ; */
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