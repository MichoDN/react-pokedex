import React from 'react';

const Decoration = () => {
    const ball = {
        ballSize: 4,
        borderSize: 0.6,
    }
    return (
        <div className='deco'
            style={{
                borderBottom: "3rem solid black",
                width: "100%",
                height:`fit-content`,
                backgroundColor:"#DD1A1A",
                position:`fixed`,
                bottom:`0rem`,
            }}
        >
            <div
                style={{
                    backgroundColor:"white",
                    border:`${ball.borderSize}rem solid #101010`,
                    width:`${ball.ballSize}rem`,
                    height:`${ball.ballSize}rem`,
                    borderRadius:"100%",
                    position:"relative",
                    left:`calc(50vw - ${ball.ballSize/2}rem)`,
                    top:`${ball.ballSize/2}rem`
                }}
            />
        </div>
    );
};

export default Decoration;