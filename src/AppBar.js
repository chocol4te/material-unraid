import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MuiAppBar from 'material-ui/AppBar';
import muiThemeable from 'material-ui/styles/muiThemeable';
import compose from 'recompose/compose';
import { toggleSidebar as toggleSidebarAction } from 'admin-on-rest';
import FlatButton from 'material-ui/FlatButton';

const rightButtons = (
    <div>
        <FlatButton label="Test1"/>
        <FlatButton label="Test2"/>
    </div>
);

const AppBar = ({ title, toggleSidebar }) => (
    <MuiAppBar
        title={title}
        onLeftIconButtonTouchTap={toggleSidebar}
        iconElementRight={rightButtons}
    />
);

AppBar.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]).isRequired,
    toggleSidebar: PropTypes.func.isRequired,
};

const enhance = compose(
    muiThemeable(), // force redraw on theme change
    connect(null, {
        toggleSidebar: toggleSidebarAction,
    }),
);

export default enhance(AppBar);
