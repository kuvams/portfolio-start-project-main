import './App.css';
import styled from 'styled-components';
import { LeftMenu } from './layout/leftMenu/LeftMenu';
import { MainContent } from './layout/mainContent/MainContent';
import { RightMenu } from './layout/rightMenu/RightMenu';


function App() {
    return (
        <StyledPage>
            <LeftMenu />
            <RightMenu />
            <MainContent />
        </StyledPage>
    );
}

export default App;

const StyledPage = styled.div`
    /* height: 100vh; */
    width: 100%;
    display: flex;
`


