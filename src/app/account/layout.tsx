import { FC, ReactNode } from 'react';

interface AccLayoutProps {
  children: ReactNode;
}

const AccountLayout: FC<AccLayoutProps> = ({ children }) => {
  return <div className=" bg-slate-200 p-10 rounded-md">{children}</div>;
};

export default AccountLayout;
