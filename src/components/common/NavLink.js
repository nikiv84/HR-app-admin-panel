import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavLink extends React.Component {
    render() {
        const isActive = this.context.router.route.location.pathname === this.props.to;
        const allClasses = 'waves-effect waves-light btn indigo lighten-5 indigo-text';
        const className = isActive ? `active ${allClasses}` : allClasses;

        return (
            <Link className={className} {...this.props}>
                {this.props.children}
            </Link>
        );
    }
}

NavLink.contextTypes = {
    router: PropTypes.object
};

export default NavLink;