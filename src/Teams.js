import './App.css'
import users from './icon/users.png'
import group from './icon/Group.png'

const copyToClipBoard = (members) => {
    const copiedMembers = members.join('\n')
    navigator.clipboard.writeText(copiedMembers)
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