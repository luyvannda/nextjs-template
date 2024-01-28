'use client';

import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

interface RecoilContextProviderProps {
  children: ReactNode;
}

export default function RecoilContextProvider({
  children,
}: RecoilContextProviderProps) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
