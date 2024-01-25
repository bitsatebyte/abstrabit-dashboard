import { Content, Item } from "@radix-ui/react-dropdown-menu";
import styled, { css } from "styled-components";

export const DropdownButton = styled.button<{ $open: boolean }>`
  ${({ $open }: { $open: boolean; }) => css`
    @keyframes width-expand {
      from {width: 71px;}
      to {width: 81px;}
    }

    @keyframes width-contract {
      from {width: 81px;}
      to {width: 71px;}
    }

    ${$open ? `animation: width-expand 0.5s ease-out forwards;` : `animation: width-contract 0.5s ease-out forwards;`}
    border: 1px solid #4A4ED4;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 5px #0000000D;
    border-radius: 24px;
    width: 71px;
    height: 42px;
    display: flex;
    justify-content: center;
    gap: 2px;
    align-items: center;
    padding: 1.5rem;
    cursor: pointer;
  `}
`;

export const StyledDropdownContent = styled(Content)`
  width: 238px;
  margin-right: 6rem;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 20px #0000001A;
  padding: 25px 14px;
`;

export const StyledDropdownItem = styled(Item)`
  display: flex;
  font-size: 20px;
  line-height: 32px;
  cursor: pointer;
  align-items: center;
  gap: 12px;
  padding: 1rem;
`;