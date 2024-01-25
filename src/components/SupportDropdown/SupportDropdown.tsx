import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  StyledDropdownContent,
  StyledDropdownItem,
  StyledSupport,
  StyledSupportDetail,
} from './SupportDropdown.styled';
import { ColoredUser } from '@/assets/ColoredUser';
import { FdsIcon } from '@/assets/FdsIcon';
import { TransactionsIcon } from '@/assets/TransactionsIcon';
import { useEffect, useRef, useState } from 'react';
import { EmailIcon } from '../../assets/EmailIcon';
import { PhoneIcon } from '../../assets/PhoneIcon';

export const SupportDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutRef = useRef<any | null>(null);

  const handleMouseEnter = () => {
    clearTimeout(closeTimeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  return (
    <DropdownMenu.Root open={isOpen}>
      <DropdownMenu.Trigger asChild onPointerEnter={handleMouseEnter} onPointerLeave={handleMouseLeave}>
        <StyledSupport>Support</StyledSupport>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <StyledDropdownContent sideOffset={10}>
          <StyledDropdownItem>
            <PhoneIcon width={'12px'} height={'12px'} />
            <div>
              <StyledSupportDetail href={'tel:+918877737777'}>+91 88777 37777</StyledSupportDetail>
              <StyledSupportDetail href={'tel:+91887775666'}>+91 88777 5666</StyledSupportDetail>
            </div>
          </StyledDropdownItem>
          <StyledDropdownItem>
            <EmailIcon width={'12px'} height={'12px'} />
            <div>
              <StyledSupportDetail href={'mailto:support@silverbullet.in'}>support@silverbullet.in</StyledSupportDetail>
              <StyledSupportDetail href={'mailto:info@silverbullet.in'}>info@silverbullet.in</StyledSupportDetail>
            </div>
          </StyledDropdownItem>
          <DropdownMenu.Separator />
        </StyledDropdownContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
