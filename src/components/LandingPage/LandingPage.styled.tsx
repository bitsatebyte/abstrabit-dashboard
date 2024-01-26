import styled from "styled-components";
import { StyledRoundCard } from "../Card";

export const StyledGreeting = styled.h1`
  letter-spacing: 0px;
  color: #1A1B1E;
  font-size: 24px;
  font-weight: 500;
`;

export const StyledSection = styled.section`
  margin-top: 2.2rem;
`;

export const StyledFixedDepositWrapper = styled.div`
  display: flex;
  gap: 2.6rem;
`;

export const StyledFixedDepositPortfolioCard = styled(StyledRoundCard)`
  min-width: 398px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  padding: 2.5rem;
`;

export const StyledFixedDepositMaturityTimeline = styled(StyledRoundCard)`
  width: 100%;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 10px #0000000D;
  padding: 2.5rem;
`;

export const StyledFinanceWrapper = styled.div`
  display: flex;
  margin-top: 2.6rem;
  gap: 2rem;
`;

export const StyledFinanceCardsWrapper = styled.div`
  display: flex;
  gap: 2.6rem;
  flex-wrap: wrap;
`;

export const StyledScheduleWrapper = styled.div`
  padding: 2.5rem;
  width: 398px;
  border-bottom: 1px solid #E0E1E3;
`;

export const StyledPortfolioHeader = styled.div`
  display: flex;
  margin-bottom: 2rem;
  justify-content: space-between;
`;

export const StyledTitle = styled.h3`
  letter-spacing: 0px;
  color: #1A1B1E;
  font-size: 16px;
  font-weight: 600;
`;

export const UpcomingScheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #EBEBEB;
  border-radius: 5px;

  .upcoming-schedule:nth-child(3) {
    border-bottom: none;
  }
`;

export const StyledAllQuestions = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

export const StyledArrowSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 65px;
`;

export const StyledDiv = styled.div``;

export const StyledColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
`;
