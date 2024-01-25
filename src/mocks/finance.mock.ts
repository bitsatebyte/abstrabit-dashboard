import ShriramFinance from '@/assets/shriram_finance.png';
import MahindraFinance from '@/assets/mahindra_finance.png';
import UtkarshFinance from '@/assets/utkarsh_finance.png';
import BajajFinserv from '@/assets/bajaj_finserv.png';
import { type FinanceCard } from '@/components/FinanceCard';
import { bajajFinserv, mahindraFinance, shriramFinance, utkarshFinance } from './colorPalette';

export const financeCards: FinanceCard[] = [
    {
      id: 'usfb',
      logo: {
        src: UtkarshFinance,
        alt: 'Utkarsh small finance bank logo',
      },
      company: 'Utkarsh Small Finance Bank',
      benefits: [
        { id: 'usfb-1', text: 'Highest Interest Rate' },
        { id: 'usfb-2', text: 'RBI Insured' },
      ],
      interestRate: 9.1,
      colors: { ...utkarshFinance },
    },
    {
      id: 'bf',
      logo: {
        src: BajajFinserv,
        alt: 'Bajaj Finserv logo',
      },
      company: 'Bajaj Finserv',
      benefits: [
        { id: 'bf-1', text: 'Crisil AAA Rated' },
        { id: 'bf-2', text: 'No Video KYC required' },
      ],
      interestRate: 8.8,
      colors: { ...bajajFinserv },
    },
    {
      id: 'sf',
      logo: {
        src: ShriramFinance,
        alt: 'Shriram finance logo',
      },
      company: 'Shriram Finance',
      benefits: [
        { id: 'sf-1', text: 'Crisil AAA Rated' },
        { id: 'sf-2', text: 'No Video KYC required' },
      ],
      interestRate: 8.8,
      colors: { ...shriramFinance },
    },
    {
      id: 'mf',
      logo: {
        src: MahindraFinance,
        alt: 'Mahindra finance logo',
      },
      company: 'Mahindra Finance',
      benefits: [
        { id: 'mf-1', text: 'Crisil AAA Rated' },
        { id: 'mf-2', text: 'No Video KYC required' },
      ],
      interestRate: 8.8,
      colors: { ...mahindraFinance },
    },
  ];