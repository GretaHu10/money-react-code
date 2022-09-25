import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icon";


const NavWrapper = styled.nav`
background-color: white;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
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
      > .icon{
        fill: #333;
      }
      &.active{
        .icon{
          fill: #f8d02d;
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
            isActive
              ? "active"
              : isPending
                ? "pending"
                : ""
          }>
            <Icon name="tag" />
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" className={({ isActive, isPending }) =>
            isActive
              ? "active"
              : isPending
                ? "pending"
                : ""
          }>
            <Icon name="money" />
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" className={({ isActive, isPending }) =>
            isActive
              ? "active"
              : isPending
                ? "pending"
                : ""
          }>
            <Icon name="chart" />
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav;