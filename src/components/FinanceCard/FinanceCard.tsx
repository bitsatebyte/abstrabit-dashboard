import Image, { type StaticImageData } from 'next/image';
import { CheckBox } from '@/assets/CheckBox';
import {
  StyledPortfolioOfferingsCard,
  StyledCardHeader,
  StyledCardHeaderItem,
  StyledCardTitle,
  StyledCardBody,
  StyledBenefit,
  StyledCardFooter,
  StyledInterestText,
  StyledInterestPercentage,
  StyledButton,
  StyledDiv,
  StyledBenefitText,
} from './FinanceCard.styled';
import { type ColorPalette } from '@/types/ColorPalette';

type Benefit = {
  id: string;
  text: string;
}

export type FinanceCard = {
  id: string;
  logo: {
    src: StaticImageData;
    alt: string;
  };
  company: string;
  benefits: Benefit[];
  interestRate: number;
  colors: ColorPalette;
};

export const FinanceCard = (props: FinanceCard): JSX.Element => {
  return (
    <StyledPortfolioOfferingsCard $background={props.colors.backgroundColor}>
      <StyledCardHeader>
        <StyledCardHeaderItem>
          <Image src={props.logo.src} alt={props.logo.alt} />
        </StyledCardHeaderItem>
        <StyledCardHeaderItem>
          <StyledCardTitle>{props.company}</StyledCardTitle>
        </StyledCardHeaderItem>
      </StyledCardHeader>
      <StyledCardBody>
        {props.benefits.map((benefit) => (
          <StyledBenefit key={benefit.id} $background={props.colors.benefitsColor}>
            <CheckBox width={'16px'} height={'16px'} color={props.colors.checkboxColor} />
            <StyledBenefitText>{benefit.text}</StyledBenefitText>
          </StyledBenefit>
        ))}
      </StyledCardBody>
      <StyledCardFooter>
        <StyledDiv>
          <StyledInterestText>Interest upto</StyledInterestText>
          <StyledInterestPercentage>{props.interestRate}% p.a</StyledInterestPercentage>
        </StyledDiv>
        <StyledDiv>
          <StyledButton $color={props.colors.buttonColor}>Book Now</StyledButton>
        </StyledDiv>
      </StyledCardFooter>
    </StyledPortfolioOfferingsCard>
  );
};
