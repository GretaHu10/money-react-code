import styled from "styled-components";

const Topbar = styled.section`
position: relative;
font-size: 24px;
background: #f8d02d;
> div{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 38px 14px 8px 14px;
}
> .icon{
    position: absolute;
    left:14px;
    bottom: 8px;
    width: 0.75em;
}
`

export { Topbar }