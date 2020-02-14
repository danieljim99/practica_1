import React from 'react';
import Character from './Character';

const characterMatrix = (props) => {
    const characters = props.characters.filter(character => character.appear[0] && character.appear[1]);
    const character = characters.find(character => character.fullScreen === true);

    if(character){
        return (
            <div>
                <Character character={character} clickCharacter={props.clickCharacter} clickBack={props.clickBack}/>
            </div>
        );
    } else {
        return (
            <div>
                {characters.map(character => {
                    return (
                        <Character character={character} clickCharacter={props.clickCharacter} clickBack={props.clickBack}/>
                    );
                })}
            </div>
        );
    }
}

export default characterMatrix;