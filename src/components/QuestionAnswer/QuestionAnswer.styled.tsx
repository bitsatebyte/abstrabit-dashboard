import styled from "styled-components";
import { StyledRoundCard } from "@/components/Card";

export const StyledQuestionsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.2rem;
`;

export const StyledGetAnswer = styled.h3`
  font-size: 24px;
`;

export const StyledAllQuestions = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

export const StyledArrowSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
`;

export const StyledAnswerCardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
`;

export const StyledAnswerCard = styled(StyledRoundCard)`
  width: 257px;
  height: 194px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  padding: 2.5rem;
`;

export const StyledDiv = styled.div``;

export const StyledQuestion = styled.h3`
  width: 70%;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const StyledAnswer = styled.p`
  font-size: 14px;
  margin-bottom: 2rem;
`;