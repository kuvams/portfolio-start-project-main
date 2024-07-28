import './App.css';
import styled from 'styled-components';
import { LeftMenu } from './layout/leftMenu/LeftMenu';
import { MainContent } from './layout/mainContent/MainContent';
import { RightMenu } from './layout/rightMenu/RightMenu';


function App() {
    return (
        <StyledPage>
            <LeftMenu/>
            <MainContent/>
            <RightMenu/>
        </StyledPage>
    );
}

export default App;

const StyledPage = styled.div`
    display: flex;
    height: 100vh;
    justify-content: space-between;
`


