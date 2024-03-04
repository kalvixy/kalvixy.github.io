// components/Layout.tsx
import { ReactNode } from 'react';
import NavBar from './NavBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center mx-8 mb-16 text-xl">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;