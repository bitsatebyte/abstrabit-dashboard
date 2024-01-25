import React from 'react';
import {
  StyledNavBarWrapper,
  StyledNavItem,
  StyledNavInnerWrapper,
  StyledNavLinksWrapper,
  StyledNavLink,
} from './Header.styled';
import { RackextLogo } from '../../assets/RackextLogo';

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
    {
      href: '/support',
      title: 'Support',
      id: 'link-3',
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
          </StyledNavLinksWrapper>
        </StyledNavItem>
      </StyledNavInnerWrapper>
    </StyledNavBarWrapper>
  );
};

export default Header;
