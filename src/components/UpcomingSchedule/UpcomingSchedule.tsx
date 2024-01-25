import { CalendarIcon } from '@/components/CalendarIcon';
import {
  StyledBlueButton,
  StyledBorderedButton,
  StyledButtonsWrapper,
  StyledDetailsWrapper,
  StyledParagraph,
  StyledScheduleBody,
  StyledScheduleCompany,
  StyledScheduleDetailsTitle,
  StyledScheduleTitle,
  StyledScheduleWrapper,
  StyledScheduledOn,
} from './UpcomingSchedule.styled';

type UpcomingSchedule = {
  id: string;
  title: string;
  calendar: {
    title: string;
    date: number;
    month: string;
    year: number;
  };
  company: string;
  depositAmount: number;
  tenure: string;
  interestRate: number;
  blueButtonText: string;
  whiteButtonText: string;
};

export const UpcomingSchedule = (props: UpcomingSchedule) => {
  return (
    <StyledScheduleWrapper className='upcoming-schedule'>
      <StyledScheduleTitle>{props.title}</StyledScheduleTitle>
      <StyledScheduleBody>
        <div>
          <StyledScheduledOn>Scheduled On</StyledScheduledOn>
          <CalendarIcon
            day={props.calendar.date}
            month={props.calendar.month}
            year={props.calendar.year}
          />
        </div>
        <div>
          <StyledScheduleCompany>{props.company}</StyledScheduleCompany>
          <StyledDetailsWrapper>
            <div>
              <StyledScheduleDetailsTitle>
                Deposit Amt
              </StyledScheduleDetailsTitle>
              <StyledParagraph>
                Rs. {props.depositAmount.toLocaleString()}
              </StyledParagraph>
            </div>
            <div>
              <StyledScheduleDetailsTitle>Tenure</StyledScheduleDetailsTitle>
              <StyledParagraph>{props.tenure}</StyledParagraph>
            </div>
            <div>
              <StyledScheduleDetailsTitle>
                Interest Rate
              </StyledScheduleDetailsTitle>
              <StyledParagraph>{props.interestRate}%</StyledParagraph>
            </div>
          </StyledDetailsWrapper>
        </div>
      </StyledScheduleBody>
      <StyledButtonsWrapper>
        <StyledBlueButton>{props.blueButtonText}</StyledBlueButton>
        <StyledBorderedButton>{props.whiteButtonText}</StyledBorderedButton>
      </StyledButtonsWrapper>
    </StyledScheduleWrapper>
  );
};
