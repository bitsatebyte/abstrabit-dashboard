import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  StyledDropdownContent,
  StyledDropdownItem,
  StyledSupport,
} from './SupportDropdown.styled';
import { ColoredUser } from '@/assets/ColoredUser';
import { FdsIcon } from '@/assets/FdsIcon';
import { TransactionsIcon } from '@/assets/TransactionsIcon';
import { useState } from 'react';

export const SupportDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <DropdownMenu.Root open={isOpen}>
      <DropdownMenu.Trigger asChild onPointerEnter={handleMouseEnter} onPointerLeave={handleMouseLeave}>
        <StyledSupport>Support</StyledSupport>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <StyledDropdownContent sideOffset={10}>
          <StyledDropdownItem>
            <ColoredUser width={'20px'} height={'20px'} color='blue' />
            <span>My Profile</span>
          </StyledDropdownItem>
          <StyledDropdownItem>
            <FdsIcon width={'20px'} height={'20px'} />
            <span>My FDs</span>
          </StyledDropdownItem>
          <StyledDropdownItem>
            <TransactionsIcon width={'20px'} height={'20px'} />
            <span>My Transactions</span>
          </StyledDropdownItem>
          <DropdownMenu.Separator />
        </StyledDropdownContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
