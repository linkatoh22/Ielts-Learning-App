import styled from "styled-components";
import MainMenu from "./components/Mainmenu";
import { Outlet } from 'react-router-dom';
import { useState } from "react";
import Footer from "./components/Footer";

const ContentWrapper  = styled.div`
    width:90%;
    margin:auto;
`
// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background-color: rgba(0,0,0,0.5);
//   z-index: 5; 
//   transition: opacity 0.3s ease;
// `;
export default function RootLayout(){
    
    return(
        <>
            
            <MainMenu ></MainMenu>
           
                <ContentWrapper>
                        {/* <Sidebar isVisible={isSidebar} setIsSidebar={setIsSidebar}/>
                        {isSidebar && <Overlay onClick={() => setIsSidebar(false)} />} */}
                    
                        
                        <Outlet />
                    
                </ContentWrapper>


            <Footer></Footer>
        </>
    )
}