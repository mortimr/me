import React, { useState, useEffect } from 'react';
import { Presentation } from './components/desktop/presentation';
import { Header } from './components/desktop/header';
import { RightMenu } from './RightMenu';
import { LeftMenu } from './LeftMenu';
import { MobileHeader } from './components/mobile/header';
import { MobileTopMenu } from './MobileTopMenu';
import { MobileBottomMenu } from './MobileBottomMenu';
import { MobilePresentation } from './components/mobile/presentation';
import { Skills } from './components/skills/index.desktop';
import { SkillsContext, Challenge, Skill } from './components/skills/context';
import { computeSkills } from './computeSkills';
import { MobileSkills } from './components/skills/index.mobile';
const MediaQuery = require('react-responsive').default;


function App() {

  const [currentPage, _setCurrentPage] = useState(0);
  const [selectedChallenge, _setSelectedChallenge] = useState<Challenge | null>(null);
  const [selectedSkill, _setSelectedSkill] = useState<Skill | null>(null);

  useEffect(() => {
    console.log('What are you looking for 🤔 ?');
    console.log(`
                                     &&&&&&&                                    
                          &&&&&&&&&&&&&&&&&&&&&&&&&&&&#                         
                    ,&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&                    
                 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%&                
              &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%@&%&&&(#             
           &&&&&&&&&&&%&&&&@@@&&&&&&&&&&&&&&&&&&&&&((////((/(((////#//          
         (/(((////(#*,***......,(%&&&&&&&&&&#(((/((/(((/////////(/(#////        
       /////////**/*..., ,,     ....&//((////#(////////(((((////(//(//////      
     .///////////.. .......        ..,,((/////////////////(////*(//(//*////     
    ((/////////**/,  *((((////**,   ...,////////////////((//////(/(#/(//////,   
   ///////////*,  ,((((///////////*. . ,////////(///////(/##(((/(/////////////  
  /////////////(..*(/(((///////////*...//////(/(////////(//((((((/(#//((//////, 
 .////////////((..//..  .***,..,,**(/.*////(/((////////(//(((/////(#((((/////// 
 #############(#(.(*,, .,*///*,**///(,(((((((((((((((((((#(#(/((((/(/////(//(/(/
 ###############,((///////(/(////(((//*%%%%#%%%%##%%%%%%%#%%%##%%######%%%%%%##%
####(((#((##((##(/*////,/,,,*****//////####(#######(#(##(((#(###########(###(#((
(##(##(##(####(###,%***,*,,***,,,/*/(########(((#####(((((((((#(((((#((######(##
#(#((#((##(##(#((##(#**,***,,******(#########(#####(##(####(##(#####/(#((((#(##(
 (%####(##(###(######//,*,**,*,*,///#####(#######(#############(#(##############
 /(#((#/####(##((#####*********///// .#(%((##(#((#((##((#####((#(##(#####(##(###
  (###(#((#(######/*,.(/*/**////////* ..(#//(//((#((##((###(################%## 
  %##%%#%#%&(@&* *...*&%(//**///////*,......,//(, %###(###########(########(((, 
   #%#%,**. *( (.. //,***##%**///****/ .......*(///,  .#####(##(/(((((/((##((/  
    #...      ...*/((((((*//////####((...#..  ..          ./##((((/(#((((((#    
             .. ,*/(((((#########(((((*  ..            ,   ...###########(#     
           .....*/(((((((((#((#####((((.  .           *      ..#########%(      
          ..,..*/((((((((###########(((.   .         *.        .(((*((/#        
           ..../(((((((##############((..  .        . ,         .//*//          
              .(((((((((#####((######((... ..         #         .*#             
                 ((((((((####(#######((......       .                           
                     ((((#####((######/......       ,                           
                          *##(((######(.....                                    

    `)
  }, []);

  const setSelectedChallenge = (challenge: Challenge | null) => {
    _setSelectedSkill(null);
    _setSelectedChallenge(challenge);
  }

  const setSelectedSkill = (skill: Skill | null) => {
    _setSelectedChallenge(null);
    _setSelectedSkill(skill);
  }

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
    <SkillsContext.Provider value={{
      ...computeSkills(),
      selectedChallenge,
      selectChallenge: setSelectedChallenge,
      selectedSkill,
      selectSkill: setSelectedSkill
    }}>
      <MediaQuery minDeviceWidth={1224}>
        <Header />
        <Presentation />
        <Skills/>

        <LeftMenu />
        <RightMenu
          idx={currentPage} onChange={setCurrentPage}
        />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1224}>
        <MobileHeader />
        <MobilePresentation />
        <MobileSkills/>

        <MobileTopMenu />
        <MobileBottomMenu />

      </MediaQuery>

    </SkillsContext.Provider>
    </>
  );
}

export default App;
