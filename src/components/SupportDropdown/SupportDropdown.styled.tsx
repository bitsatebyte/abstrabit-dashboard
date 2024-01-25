import { Content, Item } from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";

export const StyledSupport = styled.span`
  font-size: 17px;
  line-height: 21px;
  letter-spacing: 0px;
  cursor: pointer;
`;

export const StyledDropdownContent = styled(Content)`
  width: 238px;
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