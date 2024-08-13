import './App.css';
import styled from 'styled-components';
import { LeftMenu } from './layout/leftMenu/LeftMenu';
import { MainContent } from './layout/mainContent/MainContent';
import { RightMenu } from './layout/rightMenu/RightMenu';
import { theme } from './styles/Theme';


function App() {
    return (
        <StyledPage>
            <LeftMenu/>
            <RightMenu />
            <MainContent />
        </StyledPage>
    );
}

export default App;
// test commit
const StyledPage = styled.div`
    /* height: 100vh; */
    width: 100%;
    display: flex;
    padding: 0 140px 0 335px;

    @media ${theme.media.sideBar} {
    padding: 0;
    }
`


