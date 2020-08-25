import React, { useState } from 'react';
import { Presentation } from './components/desktop/presentation';
import { Header } from './components/desktop/header';
import { RightMenu } from './RightMenu';
import { LeftMenu } from './LeftMenu';
import { MobileHeader } from './components/mobile/header';
import { MobileTopMenu } from './MobileTopMenu';
import { MobileBottomMenu } from './MobileBottomMenu';
import { MobilePresentation } from './components/mobile/presentation';
const MediaQuery = require('react-responsive').default;


function App() {

  const [currentPage, _setCurrentPage] = useState(0);

  const setCurrentPage = (idx: number) => {
    if (idx < 0) {
      _setCurrentPage(0);
    } else if (idx > 2) {
      _setCurrentPage(2)
    } else {
      _setCurrentPage(idx);
    }
  }

  return (
    <>
      <MediaQuery minDeviceWidth={1224}>
        <Header />
        <Presentation />
        <div />
        <LeftMenu />
        <RightMenu
          idx={currentPage} onChange={setCurrentPage}
        />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1224}>
        <MobileHeader />
        <MobilePresentation />
        <MobileTopMenu
          idx={currentPage} onChange={setCurrentPage}
        />
        <MobileBottomMenu />

      </MediaQuery>
    </>
  );
}

export default App;
