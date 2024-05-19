// components/Layout.tsx
import { ReactNode } from 'react';

interface LayoutProps {
  leftChildren?: ReactNode;
  rightChildren?: ReactNode;
  styleOverride?: string;
}

const TwoColumnRow: React.FC<LayoutProps> = ({ leftChildren, rightChildren, styleOverride }) => {

    const style = styleOverride ?? 'bg-teal-700 text-white'
  return (
    <div className={`flex flex-row justify-items-center items-center ${style} my-5 py-2`}>
        <div className='flex flex-1 justify-center'>
            {leftChildren}
        </div>
        <div className='flex flex-1 justify-center'>
            {rightChildren}
        </div>
    </div>
  );
};

export default TwoColumnRow;