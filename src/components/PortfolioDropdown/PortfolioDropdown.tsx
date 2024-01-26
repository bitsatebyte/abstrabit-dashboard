import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  DropdownButton,
  StyledDropdownContent,
  StyledDropdownItem,
} from './PortfolioDropdown.styled';
import { ArrowDown } from '@/assets/ArrowDown';
import { useState } from 'react';

export const PortfolioDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownMenu.Root onOpenChange={handleOpenChange} open={isOpen}>
      <DropdownMenu.Trigger asChild>
        <DropdownButton $open={isOpen}>
          <span>Deposit Amt</span>
          <ArrowDown width={'8px'} height={'8px'} />
        </DropdownButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <StyledDropdownContent sideOffset={10}>
          <StyledDropdownItem>
            <span>Deposit Amt</span>
          </StyledDropdownItem>
          <DropdownMenu.Separator />
        </StyledDropdownContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
