import './App.css'
import users from './icon/users.svg'
import group from './icon/Group.svg'

const copyToClipBoard = (members) => {
    const copiedMembers = 'Team ' + members[0] + '\n' +  members.map((person, index) => index + 1 + '. ' + person).join('\n')
    navigator.clipboard.writeText(copiedMembers)
    console.log(members)
  };

function Teams(props) {
    return (
        <div className="team">
            <span className="team-header"><img className="users-image" src={users}></img> Team { props.members[0] }</span>
            {props.members.map((person, index) => <button key={index} className="persons"><img src={group}></img> {index + 1}. {person}</button>)}
            <button className="transparent-button" onClick={() => copyToClipBoard(props.members)}>Copy names</button>
        </div>
    );
}

export default Teams;