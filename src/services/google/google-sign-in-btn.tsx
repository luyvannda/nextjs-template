import { Button } from '@/components/ui/button';
import { ReactNode, FC } from 'react';

interface GoogleSignInBtnProps {
  children: ReactNode;
}

const GoogleSignInBtn: FC<GoogleSignInBtnProps> = ({ children }) => {
  const logInWithGoogle = () => console.log('log in with google');

  return (
    <Button onClick={logInWithGoogle} className="w-full">
      {children}
    </Button>
  );
};

export default GoogleSignInBtn;
