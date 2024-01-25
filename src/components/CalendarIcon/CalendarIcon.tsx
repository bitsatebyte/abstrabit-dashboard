import {
  CalendarIconWrapper,
  CalendarIconGray,
  CalendarIconRed,
} from './CalendarIcon.styled';

type CalendarIconProps = {
  day: number;
  month: string;
  year: number;
};

export const CalendarIcon = (props: CalendarIconProps) => {
  return (
    <CalendarIconWrapper>
      <CalendarIconGray
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {props.day}
      </CalendarIconGray>
      <CalendarIconRed
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {props.month}, {props.year}
      </CalendarIconRed>
    </CalendarIconWrapper>
  );
};
