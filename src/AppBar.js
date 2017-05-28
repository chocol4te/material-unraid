import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MuiAppBar from 'material-ui/AppBar';
import muiThemeable from 'material-ui/styles/muiThemeable';
import compose from 'recompose/compose';
import { toggleSidebar as toggleSidebarAction } from 'admin-on-rest';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import ActionPowerSettingsNew from 'react-material-icons/icons/action/power-settings-new';
import ActionReceipt from 'react-material-icons/icons/action/receipt';
import ActionHelp from 'react-material-icons/icons/action/help';
import ActionInfo from 'react-material-icons/icons/action/info';
import ActionFeedback from 'react-material-icons/icons/action/feedback';

class InfoDialog extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Close"
        onTouchTap={this.handleClose}
      />
    ];

    return (
        <span>
        <IconButton iconStyle={iconStyle} hoveredStyle={hoveredStyle} onTouchTap={this.handleOpen}>
            <ActionInfo/>
        </IconButton>
        <Dialog
          title="System Information"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          System info should appear here.
        </Dialog>
        </span>
    );
  }
}

class FeedbackDialog extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Close"
        onTouchTap={this.handleClose}
      />
    ];

    return (
        <span>
        <IconButton iconStyle={iconStyle} hoveredStyle={hoveredStyle} onTouchTap={this.handleOpen}>
            <ActionFeedback/>
        </IconButton>
        <Dialog
          title="Feedback"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Form for submitting feedback here.
        </Dialog>
        </span>
    );
  }
}


const iconStyle = {
    backgroundColor: 'transparent',
    color: 'white',
};

const hoveredStyle = {
    //backgroundColor: 'grey300'
};

const rightButtons = (
    <div>
        <FeedbackDialog/>
        
        <IconButton iconStyle={iconStyle} hoveredStyle={hoveredStyle}><ActionHelp/></IconButton>
        
        <InfoDialog/>
        
        <IconButton iconStyle={iconStyle} hoveredStyle={hoveredStyle}><ActionReceipt/></IconButton>
        
        <IconMenu
            iconButtonElement={
                <IconButton iconStyle={iconStyle} hoveredStyle={hoveredStyle}> <ActionPowerSettingsNew/> </IconButton>
            }
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
        >
            <MenuItem primaryText="Start Array" />
            <MenuItem primaryText="Stop Array" />
            <MenuItem primaryText="Restart" />
            <MenuItem primaryText="Shutdown" />
            <MenuItem primaryText="Logout" />
        </IconMenu>
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
