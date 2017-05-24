import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import compose from 'recompose/compose';
import MenuItem from 'material-ui/MenuItem';
import LabelIcon from 'material-ui/svg-icons/action/label';
import DeviceStorage from 'react-material-icons/icons/device/storage';
import ActionAssessment from 'react-material-icons/icons/action/assessment';
import ActionExtension from 'react-material-icons/icons/action/extension';
import ActionAccountCircle from 'react-material-icons/icons/action/account-circle';
import ActionSettings from 'react-material-icons/icons/action/settings';
import ActionBuild from 'react-material-icons/icons/action/build';
import FileFolderShared from 'react-material-icons/icons/file/folder-shared';
import HardwareDeviceHub from 'react-material-icons/icons/hardware/device-hub';
import NavigationApps from 'react-material-icons/icons/navigation/apps';
import { translate, DashboardMenuItem } from 'admin-on-rest';

const items = [
    { name: 'array', icon: <DeviceStorage/> },
    { name: 'shares', icon: <FileFolderShared/> },
    { name: 'users', icon: <ActionAccountCircle/> },
    { name: 'plugins', icon: <ActionExtension/> },
    { name: 'docker', icon: <NavigationApps/> },
    { name: 'vms', icon: <HardwareDeviceHub/> },
    { name: 'stats', icon: <ActionAssessment /> },
    { name: 'tools', icon: <ActionBuild/> },
    { name: 'settings', icon: <ActionSettings/> },
];

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%',
    },
};

const Menu = ({ onMenuTap, translate, logout }) => (
    <div style={styles.main}>
        <DashboardMenuItem onTouchTap={onMenuTap} />
        {items.map(item => (
            <MenuItem
                key={item.name}
                containerElement={<Link to={`/pages/${item.name}`} />}
                primaryText={translate(`resources.${item.name}.name`, { smart_count: 2 })}
                leftIcon={item.icon}
                onTouchTap={onMenuTap}
            />
        ))}
        {logout}
    </div>
);

const enhance = compose(
    connect(state => ({
        theme: state.theme,
        locale: state.locale,
    })),
    translate,
);

export default enhance(Menu);
