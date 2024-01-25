import Link from 'next/link';
import { ArrowLeft } from '@/assets/ArrowLeft';
import { ArrowRight } from '@/assets/ArrowRight';
import {
  StyledQuestion,
  StyledAnswer,
  StyledDiv,
  StyledQuestionsTitle,
  StyledGetAnswer,
  StyledAllQuestions,
  StyledArrowSection,
  StyledAnswerCard,
  StyledAnswerCardsWrapper,
} from './QuestionAnswer.styled';

export const QuestionAnswer = (props: any) => {
  return (
    <StyledDiv>
      <StyledQuestionsTitle>
        <StyledDiv>
          <StyledGetAnswer>Get Answer</StyledGetAnswer>
          <StyledAllQuestions>to all your questions</StyledAllQuestions>
        </StyledDiv>
        <StyledArrowSection>
          <ArrowLeft width={'60px'} opacity={0.2} cursor={'pointer'} />
          <ArrowRight width={'60px'} cursor={'pointer'} />
        </StyledArrowSection>
      </StyledQuestionsTitle>
      <StyledAnswerCardsWrapper>
        <StyledAnswerCard>
          <StyledQuestion>How FDs are taxed</StyledQuestion>
          <StyledAnswer>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{' '}
          </StyledAnswer>
          <Link href={'/'}>Read More...</Link>
        </StyledAnswerCard>
        <StyledAnswerCard>
          <StyledQuestion>How FDs are taxed</StyledQuestion>
          <StyledAnswer>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{' '}
          </StyledAnswer>
          <Link href={'/'}>Read More...</Link>
        </StyledAnswerCard>
        <StyledAnswerCard>
          <StyledQuestion>How FDs are taxed</StyledQuestion>
          <StyledAnswer>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{' '}
          </StyledAnswer>
          <Link href={'/'}>Read More...</Link>
        </StyledAnswerCard>
      </StyledAnswerCardsWrapper>
    </StyledDiv>
  );
};
