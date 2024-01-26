import { Content, Item } from "@radix-ui/react-dropdown-menu";
import styled, { css } from "styled-components";

export const DropdownButton = styled.button<{ $open: boolean }>`
  ${({ $open }: { $open: boolean; }) => css`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 5px #0000000D;
    border: 1px solid #CBCBCB;
    border-radius: 5px;
    width: 128px;
    height: 38px;
    display: flex;
    justify-content: space-between;
    gap: 2px;
    align-items: center;
    padding: 1.5rem;
    cursor: pointer;
  `}
`;

export const StyledDropdownContent = styled(Content)`
  width: 200px;
  margin-right: 6rem;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 20px #0000001A;
  padding: 15px 14px;
`;

export const StyledDropdownItem = styled(Item)`
  display: flex;
  font-size: 15px;
  line-height: 32px;
  cursor: pointer;
  align-items: center;
  gap: 12px;
`;