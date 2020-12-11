import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Presentation } from './components/desktop/presentation';
import { Header } from './components/desktop/header';
import { RightMenu } from './RightMenu';
import { LeftMenu } from './LeftMenu';
import { MobileHeader } from './components/mobile/header';
import { MobileTopMenu } from './MobileTopMenu';
import { MobileBottomMenu } from './MobileBottomMenu';
import { MobilePresentation } from './components/mobile/presentation';
import { Skills } from './components/skills/index.desktop';
import { SkillsContext, Challenge, Skill, SkillsContextState } from './components/skills/context';
import { computeSkills } from './computeSkills';
import { MobileSkills } from './components/skills/index.mobile';
import { T721 } from './components/desktop/t721';
import { MobileT721 } from './components/mobile/t721';
import { scroller } from 'react-scroll'
const MediaQuery = require('react-responsive').default;
const useMediaQuery = require('react-responsive').useMediaQuery;

export const getSelection = (skillsAndChallenges: Pick<SkillsContextState, 'challenges' | 'skills'>) => {

  const url = new URLSearchParams(window.location.search);

  const selection = url.get('selection');

  if (selection) {
    if (selection.indexOf('skill@') === 0) {
      const skillName = selection.slice('skill@'.length);

      if (skillsAndChallenges.skills[skillName]) {
        return [
          'skill',
          skillName
        ]
      }

    } else if (selection.indexOf('challenge@') === 0) {
      const challengeIdx = parseInt(selection.slice('challenge@'.length), 10);

      if (skillsAndChallenges.challenges[challengeIdx]) {
        return [
          'challenge',
          challengeIdx
        ]
      }
    }
  }

  return [
    null,
    null
  ]
}


function App() {
  const skillsAndChallenges = useMemo(() => computeSkills(), []);
  const querySelection = useMemo(() => getSelection(skillsAndChallenges), [skillsAndChallenges]);
  const [currentPage, _setCurrentPage] = useState(0);
  const [selectedChallenge, _setSelectedChallenge] = useState<number | null>(querySelection[0] === 'challenge' ? querySelection[1] as number : null);
  const [selectedSkill, _setSelectedSkill] = useState<string | null>(querySelection[0] === 'skill' ? querySelection[1] as string : null);
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
  useEffect(() => {
    if (querySelection[0] !== null) {
      setTimeout(() => {
        scroller.scrollTo(isDesktopOrLaptop ? 'skills' : `${querySelection[0]}s`, {
          duration: 500,
          delay: 0,
          smooth: 'easeInOutQuart'
        });
      }, 500)
    }
  }, [querySelection, isDesktopOrLaptop]);

  const wrappedSetSelectedChallenge = useCallback((idx: number | null) => {
    if (idx === null) {

      const url = new URLSearchParams();

      url.delete('selection');

      const searchParams = url.toString();
      const newUrl = window.location.origin + window.location.pathname + (searchParams !== '' ? '?' : '') + searchParams

      window.history.pushState({ path: newUrl }, '', newUrl)

      _setSelectedChallenge(null);
    } else {
      const url = new URLSearchParams();

      url.set('selection', `challenge@${idx}`);

      const searchParams = url.toString();
      const newUrl = window.location.origin + window.location.pathname + (searchParams !== '' ? '?' : '') + searchParams

      window.history.pushState({ path: newUrl }, '', newUrl)

      _setSelectedChallenge(idx);
    }
  }, []);

  const wrappedSetSelectedSkill = useCallback((name: string | null) => {
    if (name === null) {

      const url = new URLSearchParams();

      url.delete('selection');

      const searchParams = url.toString();
      const newUrl = window.location.origin + window.location.pathname + (searchParams !== '' ? '?' : '') + searchParams

      window.history.pushState({ path: newUrl }, '', newUrl)

      _setSelectedSkill(null);
    } else {
      const url = new URLSearchParams();

      url.set('selection', `skill@${name}`);

      const searchParams = url.toString();
      const newUrl = window.location.origin + window.location.pathname + (searchParams !== '' ? '?' : '') + searchParams

      window.history.pushState({ path: newUrl }, '', newUrl)

      _setSelectedSkill(name);
    }
  }, []);

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
    if (challenge === null) {
      wrappedSetSelectedChallenge(null);
    } else {
      wrappedSetSelectedChallenge(skillsAndChallenges.challenges.findIndex((chall) => chall.name === challenge?.name));
    }
  }

  const setSelectedSkill = (skill: Skill | null) => {
    _setSelectedChallenge(null);
    wrappedSetSelectedSkill(skill?.key || null);
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
        ...skillsAndChallenges,
        selectedChallenge: selectedChallenge !== null ? skillsAndChallenges.challenges[selectedChallenge] : null,
        selectChallenge: setSelectedChallenge,
        selectedSkill: selectedSkill !== null ? skillsAndChallenges.skills[selectedSkill] : null,
        selectSkill: setSelectedSkill
      }}>
        <MediaQuery minDeviceWidth={1224}>
          <Header />
          <Presentation />
          <T721 />
          <Skills />

          <LeftMenu />
          <RightMenu
            idx={currentPage} onChange={setCurrentPage}
          />
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <MobileHeader />
          <MobilePresentation />
          <MobileT721 />
          <MobileSkills />

          <MobileTopMenu />
          <MobileBottomMenu />

        </MediaQuery>

      </SkillsContext.Provider>
    </>
  );
}

export default App;
