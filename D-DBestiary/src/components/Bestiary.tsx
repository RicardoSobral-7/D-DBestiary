import React, { useEffect, useState, useContext } from 'react';
import { MonsterContext } from "./MonsterContext";
interface bestiary {
    name?: String,
    type?: String,
    size?: String,
    hit_points?: Number,
    hit_dice?: String,
    strength?: Number,
    dexterity?: Number,
    constitution?: Number,
    intelligence?: Number,
    languages?: String
}
function Bestiary() {
    const monster = useContext(MonsterContext);
    const [bestiary, setBestiary] = useState<bestiary>({})

    useEffect(() => {
        if(monster){
            fetch(`https://www.dnd5eapi.co/api/monsters/${monster}`)
            .then(res => res.json())
            .then(data => {
                setBestiary(data);
            })
        }
        }, [monster]);

    return (
        <div className="card-wrapper">
            <div className="card">
                <div className="imgBox">
                    <div className="bark">
                        <h2>Bestiary</h2>
                    </div>
                </div>
                <div className="details">
                    <h4 className="color2">Beast name: {bestiary.name}</h4>
                    <p>Monster type: </p>
                    <span>{bestiary.type}</span>
                    <p>Size: </p>
                    <span>{bestiary.size}</span>
                    <p>Hit Points: </p>
                    <span>{bestiary.hit_points}</span>
                    <p>Damage: </p>
                    <span>{bestiary.hit_dice}</span>
                    <p>Strength: </p>
                    <span>{bestiary.strength}</span>
                    <p>Dexterity: </p>
                    <span>{bestiary.dexterity}</span>
                    <p>Constitution: </p>
                    <span>{bestiary.constitution}</span>
                    <p>Intelligence: </p>
                    <span>{bestiary.intelligence}</span>
                    <p>Languages: </p>
                    <span>{bestiary.languages}</span>
                </div>
            </div>
        </div>
    )
}
export default Bestiary;
