import React from 'react';
import Accordion from './Accordion';
import DesignPage from './header';
import BasicCard from './Card';

function Main(){
    return(
        <div>
        <DesignPage/>
        <BasicCard/>
        <Accordion/> 
        </div>
    )
}
export default Main;