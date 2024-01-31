import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  DropdownButton,
  StyledDropdownContent,
  StyledDropdownItem,
} from './Dropdown.styled';
import { UserIcon } from '@/assets/UserIcon';
import { ArrowDown } from '@/assets/ArrowDown';
import { ColoredUser } from '@/assets/ColoredUser';
import { FdsIcon } from '@/assets/FdsIcon';
import { TransactionsIcon } from '@/assets/TransactionsIcon';
import { LogoutIcon } from '@/assets/LogoutIcon';
import { useState } from 'react';

export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEnter = (e: any) => {
    setIsOpen(true);
  }

  const handleLeave = (e: any) => {
    setIsOpen(false);
  }

  return (
    <DropdownMenu.Root open={isOpen} modal={false}>
      <DropdownMenu.Trigger asChild onPointerEnter={handleEnter} onPointerLeave={handleLeave}>
        <DropdownButton $open={isOpen}>
          <UserIcon width={'16px'} height={'16px'} color='#4A4ED4' />
          <ArrowDown width={'16px'} height={'16px'} />
        </DropdownButton>
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
          <StyledDropdownItem>
            <LogoutIcon width={'20px'} height={'20px'} />
            <span>Logout</span>
          </StyledDropdownItem>
          <DropdownMenu.Separator />
        </StyledDropdownContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
