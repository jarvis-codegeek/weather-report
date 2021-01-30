import React from 'react';

const Heading = (props) => {
    return(
        <React.Fragment>
        <h3>Hi !!!! Welcome {props.firstName} {props.lastName}</h3>
        {SubTitle}
        </React.Fragment>        
    )
}

const SubTitle = () => {
    return (
        <div>Sub title</div>
    )
}

export  {Heading, SubTitle}