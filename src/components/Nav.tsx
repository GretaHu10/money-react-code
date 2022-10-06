import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Center } from "./Center";
import { Icon } from "./Icon";


const NavWrapper = styled.nav`
background-color: white;
box-shadow: 0 0 3px rgba(255,255,255,1);
line-height: 24px;
> ul {
  display: flex;
  > li{
    width:33.33333%;
    text-align: center;
    > a {
      display: flex;
      padding: 5px 0 3px 0;
      flex-direction: column;
      align-items: center;
      > div{
        border-radius: 50%;
        width: 32px;
        height: 32px;
      }
      &.active{
        div{
          background: #f8d02d;
        }
      }
    } 
  }
}
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""}>
            <Center>
              <Icon name="tag" />
            </Center>
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""}>
            <Center>
              <Icon name="money" />
            </Center>
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""}>
            <Center>
              <Icon name="chart" />
            </Center>
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}

export { Nav };