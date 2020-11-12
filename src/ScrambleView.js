import './App.css';
import Teams from './Teams.js';
import React, { useState, useEffect } from 'react';

const scrambleTeams = (members, teamSize) => {
    const parsedMembers = parseMembersText(members);
    const shuffledMembers = shuffle(parsedMembers)
    const teams = putIntoTeams(shuffledMembers, teamSize);
    return teams;
}

const parseMembersText = (membersText) => membersText.split('\n').filter(member => member !== '');

const shuffle = (members) => {
    const remainingMembers = [...members];
    const shuffledMembers = [];

    for (let i = 0; i < members.length; i++) {
        const randomIndex = Math.floor(Math.random() * remainingMembers.length); // [0..length]
        const randomMember = remainingMembers.splice(randomIndex, 1); // [a, b, c, d] => [a, c, d] return [b]
        shuffledMembers.push(randomMember);
    }
    return shuffledMembers;
}

function putIntoTeams(members, teamSize) {
    const newTeams = [];

    for (let i = 0; i < members.length; i++) {
        let nextTeamIndex = i % teamSize; // [0,1,2,3,4,5,6,7,8] => [[0,3,6],[1,4,7],[2,5,8]]
        if (!newTeams[nextTeamIndex])
            newTeams.push([]);

        newTeams[nextTeamIndex].push(members[i]);
    }
    return newTeams;
}


function ScrambleView(props) {
    const [teamSize, setTeamSize] = useState(2);
    const [members, setMembers] = useState('');
    const [teams, setTeams] = useState([]);

    return (
        <div className="scramble-view">
            <div className="input-part">
                <span className="get-started">Get Started</span>
                <span className="add-names">Add names, one name per row.</span>
                <div className="text-box-row">
                    <div>
                        <label>
                            <textarea className="text-input" type="Text" name="Name" onChange={(e) => setMembers(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <form>
                            <label>
                                <select className="drop-down-menu" value={teamSize} onChange={(e) => setTeamSize(e.target.value)}>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </label>
                        </form>
                    </div>
                </div>
                <div className="text-buttons">
                    <button className="green-button" onClick={() => setTeams(scrambleTeams(members, teamSize))}>Scramble</button>
                    <button className="transparent-button" onClick={() => setTeams([])}>Reset</button>
                </div>
            </div>
            <div className="results">
                <span className="get-started">Results</span>
                <span>Here are the teams. If the number of participants is unequal to the number of </span>
                <span>teams, some teams will have fewer or more players </span>
            </div>
            <div className="teams">
                <div className="team-container">
                    {
                        teams.map((members, index) => <Teams key={index} members={members} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default ScrambleView;