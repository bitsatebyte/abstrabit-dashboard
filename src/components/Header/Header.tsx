import React from 'react';
import {
  StyledNavBarWrapper,
  StyledNavItem,
  StyledNavInnerWrapper,
  StyledNavLinksWrapper,
  StyledNavLink,
} from './Header.styled';
import { RackextLogo } from '../../assets/RackextLogo';
import { DropDown } from '../DropDown';
import { SupportDropdown } from '../SupportDropdown';

type NavLink = {
  href: string;
  title: string;
  id: string;
};

const Header = () => {
  const navLinks: NavLink[] = [
    {
      href: '/dashboard',
      title: 'Dashboard',
      id: 'link-1',
    },
    {
      href: '/faqs',
      title: 'FAQs',
      id: 'link-2',
    },
  ];

  return (
    <StyledNavBarWrapper>
      <StyledNavInnerWrapper>
        <StyledNavItem>
          <RackextLogo />
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLinksWrapper>
            {navLinks.map((navLink) => (
              <StyledNavItem key={navLink.id}>
                <StyledNavLink href={navLink.href}>
                  {navLink.title}
                </StyledNavLink>
              </StyledNavItem>
            ))}
            <StyledNavItem>
              <SupportDropdown />
            </StyledNavItem>
            <StyledNavItem>
              <DropDown />
            </StyledNavItem>
          </StyledNavLinksWrapper>
        </StyledNavItem>
      </StyledNavInnerWrapper>
    </StyledNavBarWrapper>
  );
};

export default Header;
