import { Content, Item } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
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
  border-radius: 5px;
`;

export const StyledDropdownItem = styled(Item)`
  display: flex;
  font-size: 20px;
  line-height: 32px;
  cursor: pointer;
  align-items: center;
  gap: 16px;
  padding: 15px 14px;
  border-bottom: 1px solid #EFEFEF;
`;

export const StyledSupportDetailWrapper = styled.div`
  
`;

export const StyledSupportDetail = styled(Link)`
  text-decoration: none;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0px;
  color: #3B39D9;
  display: block;
`;