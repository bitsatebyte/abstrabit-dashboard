// @ts-nocheck
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Legend,
  Tooltip,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  TimeScale,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  StyledColumnFlex,
  StyledDiv,
  StyledFinanceCardsWrapper,
  StyledFinanceWrapper,
  StyledFixedDepositMaturityTimeline,
  StyledFixedDepositPortfolioCard,
  StyledFixedDepositWrapper,
  StyledGreeting,
  StyledPortfolioHeader,
  StyledSection,
  StyledTitle,
  UpcomingScheduleWrapper,
} from './LandingPage.styled';
import { FinanceCard } from '@/components/FinanceCard';
import { UpcomingSchedule } from '@/components/UpcomingSchedule';
import { QuestionAnswer } from '@/components/QuestionAnswer';
import { pieChartData, pieChartOptions } from '@/charts/pieChartOptions';
import { timelineOptions, timelineData, timelinePlugins } from '@/charts/timelineOptions';
import { financeCards } from '@/mocks';
import { upcomingSchedule } from '../../mocks/schedule.mock';
import { PortfolioDropdown } from '../PortfolioDropdown';

export const LandingPage = (props: any): JSX.Element => {
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    ChartDataLabels,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    TimeScale,
  );

  return (
    <>
      <StyledGreeting>Welcome, Johan Paul</StyledGreeting>
      <StyledSection>
        <StyledFixedDepositWrapper>
          <StyledFixedDepositPortfolioCard>
            <StyledPortfolioHeader>
              <StyledTitle>Your FD Portfolio</StyledTitle>
              <PortfolioDropdown />
            </StyledPortfolioHeader>
            <StyledDiv>
              <Pie data={pieChartData} options={pieChartOptions} />
            </StyledDiv>
          </StyledFixedDepositPortfolioCard>
          <StyledFixedDepositMaturityTimeline>
            <StyledDiv style={{ marginBottom: '2rem' }}>
              <StyledTitle>FD Maturity Timeline</StyledTitle>
            </StyledDiv>
            <StyledDiv>
              <Bar options={timelineOptions} data={timelineData} plugins={timelinePlugins} />
            </StyledDiv>
          </StyledFixedDepositMaturityTimeline>
        </StyledFixedDepositWrapper>
        <StyledFinanceWrapper>
          <StyledColumnFlex>
            <StyledFinanceCardsWrapper>
              {financeCards.map((financeCard) => (
                <FinanceCard {...financeCard} key={financeCard.id} />
              ))}
            </StyledFinanceCardsWrapper>
            <QuestionAnswer />
          </StyledColumnFlex>
          <UpcomingScheduleWrapper>
            {upcomingSchedule.map((upcomingSchedule) => (
              <UpcomingSchedule key={upcomingSchedule.id} {...upcomingSchedule}/>
            ))}
          </UpcomingScheduleWrapper>
        </StyledFinanceWrapper>
      </StyledSection>
    </>
  );
};
