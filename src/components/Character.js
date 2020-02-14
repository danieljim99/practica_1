import React from 'react';

const character = (props) => {
    if(props.character.fullScreen){
        return (
            <div className="CharacterFullScreen">
                <img className="ImageFullScreen" src={props.character.image} alt=""/>
                <div>Name: {props.character.name}</div>
                <div>Status: {props.character.status}</div>
                <div>Species: {props.character.species}</div>
                <div>Type: {props.character.type}</div>
                <div>Gender: {props.character.gender}</div>
                <div>Origin: {props.character.origin}</div>
                <div>Location: {props.character.location}</div>
                <div className="Button">
                    <button onClick={props.clickBack.bind(this, props.character.id)}>back</button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="Character" onClick={props.clickCharacter.bind(this, props.character.id)}>
                <img className="Image" src={props.character.image} alt=""/>
                <div>Name: {props.character.name}</div>
            </div>
        );
    }
};

export default character;