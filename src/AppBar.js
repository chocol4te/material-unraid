import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MuiAppBar from 'material-ui/AppBar';
import muiThemeable from 'material-ui/styles/muiThemeable';
import compose from 'recompose/compose';
import { toggleSidebar as toggleSidebarAction } from 'admin-on-rest';
import IconButton from 'material-ui/IconButton';

import ActionPowerSettingsNew from 'react-material-icons/icons/action/power-settings-new';
import ActionReceipt from 'react-material-icons/icons/action/receipt';
import ActionHelp from 'react-material-icons/icons/action/help';
import ActionInfo from 'react-material-icons/icons/action/info';
import ActionFeedback from 'react-material-icons/icons/action/feedback';

const iconStyle = {
    backgroundColor: 'transparent',
    color: 'white'
};

const hoveredStyle = {
    //backgroundColor: 'grey300'
};

const rightButtons = (
    <div>
        <IconButton iconStyle={iconStyle} hoveredStyle={hoveredStyle}><ActionFeedback/></IconButton>
        <IconButton iconStyle={iconStyle} hoveredStyle={hoveredStyle}><ActionHelp/></IconButton>
        <IconButton iconStyle={iconStyle} hoveredStyle={hoveredStyle}><ActionInfo/></IconButton>
        <IconButton iconStyle={iconStyle} hoveredStyle={hoveredStyle}><ActionReceipt/></IconButton>
        <IconButton iconStyle={iconStyle} hoveredStyle={hoveredStyle}><ActionPowerSettingsNew/></IconButton>
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
