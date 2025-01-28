import { FC, ReactNode, JSX } from 'react';
import { StyledBox } from './styles/layout';

interface ILayoutProps {
    children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({
    children
}): JSX.Element => {
    return (
        <>
            <StyledBox>
                {children}
            </StyledBox>
        </>
    );
}

export default Layout;