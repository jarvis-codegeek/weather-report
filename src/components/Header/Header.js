import React from 'react';

const Heading = (props) => {
    return(
        <React.Fragment>
        <h3>Hi !!!! Welcome to {props.title}</h3>
        </React.Fragment>        
    )
}

const SubTitle = () => {
    return (
        <div>Sub title</div>
    )
}

export  {Heading, SubTitle}