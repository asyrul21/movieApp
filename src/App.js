import React from 'react';


import './styles/App.css';
import BaseLayout from './components/layouts/BaseLayout'
import ContentContainer from './components/layouts/ContentContainer';
import Main from './components/Main';

function App() {
  return (
    <BaseLayout>
      <ContentContainer>
        <Main />
      </ContentContainer>
    </BaseLayout >
  );
}

export default App;
