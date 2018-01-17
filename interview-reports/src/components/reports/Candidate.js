import React from 'react';
import avatarimg from '../../assets/img/avatar.png';

export default class Candidate extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = (e) => {
        e.stopPropagation();
        const candidateId = e.target.dataset.id;
        const candidateName = e.target.dataset.name;
        const selectedCandidate = {
            "candidateId": candidateId,
            "candidateName": candidateName
        }
        this.props.handleClick(selectedCandidate);
    }

    render() {
        const candidate = this.props.candidate;
        let avatar = !candidate.avatar ? avatarimg : candidate.avatar;
        return (
            <div className="col s12 m12 l6">
                <li className="collection-item avatar" onClick={this.handleClick} data-id={candidate.id} data-name={candidate.name}>
                    <img src={avatar} alt={candidate.name} className="circle" onClick={this.handleClick} data-id={candidate.id} data-name={candidate.name} />
                    <span className="title" onClick={this.handleClick} data-id={candidate.id} data-name={candidate.name}>{candidate.name}</span>
                    <p onClick={this.handleClick} data-id={candidate.id} data-name={candidate.name}>{candidate.email.toLowerCase()}</p>
                </li>
            </div>
        )
    }
}