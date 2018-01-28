import React from 'react';
import PropTypes from 'prop-types';

export default class Company extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        }
    }

    handleClick = (e) => {
        e.stopPropagation();
        const companyId = e.target.dataset.id;
        const companyName = e.target.dataset.name;
        const selectedCompany = {
            "companyId": parseFloat(companyId),
            "companyName": companyName
        }
        this.props.handleClick(selectedCompany);

    }

    render() {
        const company = this.props.company;
        let allClasses = "collection-item";
        return (
            <div className="col s12 m12 l6">
                <li className={this.state.selected ? `${allClasses} selected` : allClasses} onClick={this.handleClick} data-id={company.id} data-name={company.name}>
                    <h6 className="title" onClick={this.handleClick} data-id={company.id} data-name={company.name}>{company.name}</h6>
                </li>
            </div>
        )
    }
}

Company.propTypes = {
    company: PropTypes.object,
    handleClick: PropTypes.func
}