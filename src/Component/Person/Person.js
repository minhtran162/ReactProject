import React from 'react';

// const inTuoi = () => {
//     return Math.floor(Math.random()*100);
// }

const person = (props) => {
    return(
        <div>
        <p>Tôi tên là { props.hoten }. Tôi { props.tuoi } tuổi!</p>
        <p>{ props.children }</p>
        </div>
    );
};

export default person;