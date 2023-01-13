import React from 'react';

function PageSelector(props: any) {
    return (
        (props.corner)
        
        ? <div className="titillium text-white text-2xl font-bold flex gap-24 noselect corner">
            <div className="animate__animated animate__fadeInDown dot-under cursor-pointer" style={{animationDelay: "0.5s"}}>HOME</div>
            <div className="animate__animated animate__fadeInDown dot-under cursor-pointer" style={{animationDelay: "0.4s"}}>TWO</div>
            <div className="animate__animated animate__fadeInDown dot-under cursor-pointer" style={{animationDelay: "0.3s"}}>THREE</div>
            <div className="animate__animated animate__fadeInDown dot-under cursor-pointer" style={{animationDelay: "0.2s"}}>FOUR</div>
        </div>

        : <div className="titillium text-white text-2xl font-medium flex gap-24 noselect">
        <div className="animate__animated animate__fadeInUp dot-under cursor-pointer" style={{animationDelay: "0.2s"}}>
            <h1 data-text="0xHOME" className="glitch">0xHOME</h1></div>
        <div className="animate__animated animate__fadeInUp dot-under cursor-pointer" style={{animationDelay: "0.3s"}}>
            <h1 data-text="0xABOUT_ME" className="glitch">0xABOUT_ME</h1></div>
        <div className="animate__animated animate__fadeInUp dot-under cursor-pointer" style={{animationDelay: "0.4s"}}>
            <h1 data-text="0xPROJECTS" className="glitch">0xPROJECTS</h1></div>
        <div className="animate__animated animate__fadeInUp dot-under cursor-pointer" style={{animationDelay: "0.5s"}}>
            <h1 data-text="0xCONTACT" className="glitch">0xCONTACT</h1></div>
        </div>
    );
}

export default PageSelector;