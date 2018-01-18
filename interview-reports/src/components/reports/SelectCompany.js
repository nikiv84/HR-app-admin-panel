import React from 'react';
import { ErrorMessage } from '../common/ErrorMessage';
import Company from './Company';

export default class SelectCompany extends React.Component {

    handleClick = (selectedCompany) => {
        const id = selectedCompany.companyId;
        window.$(`.collection-item`).each((i, item) => {
            let $item = window.$(item);
            $item.removeClass("selected");
            if (parseFloat($item.attr("data-id")) === id) {
                $item.addClass("selected");
            }
        });
        this.props.handleSelectCompany(selectedCompany);
    }

    render() {
        const companies = this.props.companies;
        if (!companies.length) {
            return <ErrorMessage />
        }
        return (
            <div className="row">
                <div className="col s12">
                    <ul className="collection report-collection">
                        <div className="row">
                            {companies.map((company, i) => {
                                return <Company company={company} key={i} handleClick={this.handleClick} />;
                            })}
                        </div>
                    </ul>
                </div>
            </div>
        )
    }
}