import styled, { css } from "styled-components";
import { StyledRoundCard } from "@/components/Card";

export const StyledPortfolioOfferingsCard = styled(StyledRoundCard)<{ $background: string }>`
  ${({ $background }: { $background: string; }) => css`
    width: 398px;
    height: 202px;
    border: 4px solid #FFFFFF;
    padding: 2rem 2.6rem 2.3rem 2.2rem;
    background: ${$background};
  `}
`;

export const StyledCardHeader = styled.div`
  display: flex;
  justify-content: left;
  gap: 1.6rem;
  align-items: center;
`;

export const StyledCardHeaderItem = styled.div``;

export const StyledCardTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 0px;
`;

export const StyledCardBody = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.4rem;
`;

export const StyledBenefit = styled.div<{ $background: string; }>`
  ${({ $background }: { $background: string; }) => css`
    border-radius: 5px;
    height: 35px;
    display: flex;
    padding: 1rem 0.9rem 0.9rem 0.769rem;
    align-items: center;
    background: ${$background};
    gap: 1rem;
    width: 50%;
  `}
`;

export const StyledCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const StyledButton = styled.button<{ $color: string; }>`
  ${({ $color }: { $color: string; }) => css`
    box-shadow: 0px 5px 5px #0000000D;
    border-radius: 5px;
    background: ${$color} 0% 0% no-repeat padding-box;
    border: none;
    padding: 1.15rem 3rem;
    color: white;
    cursor: pointer;
    font-size: 16px;
  `}
`;

export const StyledInterestText = styled.p`
  font-size: 14px;
  letter-spacing: 0px;
  color: #1A1B1E;
  opacity: 0.6;
  margin-bottom: 0.8rem;
`;

export const StyledInterestPercentage = styled.p`
  font-size: 14px;
  letter-spacing: 0px;
  color: #1A1B1E;
  font-weight: 700;
`;

export const StyledBenefitText = styled.span`
  font-size: 1.1rem;
  font-weight: 100;
  letter-spacing: 0px;
  line-height: 17px;
`;

export const StyledDiv = styled.div``;