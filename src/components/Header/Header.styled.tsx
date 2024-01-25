import Link from "next/link";
import styled from "styled-components";

export const StyledNavBarWrapper = styled.nav`
  height: 8.5rem;
  padding: 1.84rem 6rem;
`;
  
export const StyledNavInnerWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`;

export const StyledNavLinksWrapper = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 4.5rem;
  height: 100%;
  align-items: center;
`;

export const StyledNavItem = styled.li``;

export const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: #1A1B1E;
  font-size: 1.7rem;
`;