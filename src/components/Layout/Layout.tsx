import { PropsWithChildren } from 'react';
import Header from '@/components/Header';

export type LayoutProps = {
}

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;