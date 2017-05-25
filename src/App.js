import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

// Icons
import ActionDashboard from 'react-material-icons/icons/action/dashboard';
import DeviceStorage from 'react-material-icons/icons/device/storage';
import ActionAssessment from 'react-material-icons/icons/action/assessment';
import ActionExtension from 'react-material-icons/icons/action/extension';
import ActionAccountCircle from 'react-material-icons/icons/action/account-circle';
import ActionSettings from 'react-material-icons/icons/action/settings';
import ActionBuild from 'react-material-icons/icons/action/build';
import FileFolderShared from 'react-material-icons/icons/file/folder-shared';
import HardwareDeviceHub from 'react-material-icons/icons/hardware/device-hub';
import NavigationApps from 'react-material-icons/icons/navigation/apps';

import authClient from './authClient';
import { Dashboard } from './pages/dashboard.js';
import { Array } from './pages/array.js';
import { Shares } from './pages/shares';
import { Users } from './pages/users';
import { Plugins } from './pages/plugins';
import { Docker } from './pages/docker';
import { VMs } from './pages/vms';
import { Statistics } from './pages/stats';
import { Tools } from './pages/tools';
import { Settings } from './pages/settings';


const App = () => (
    <Admin title="unRAID Server" authClient={authClient} restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
        <Resource name="dashboard" options={{ label: 'Dashboard' }} list={Dashboard} icon={ActionDashboard} />
        <Resource name="array" options={{ label: 'Array' }} list={Array} icon={DeviceStorage}/>
        <Resource name="shares" list={Shares} icon={FileFolderShared}/>
        <Resource name="users" list={Users} icon={ActionAccountCircle}/>
        <Resource name="plugins" list={Plugins} icon={ActionExtension}/>
        <Resource name="docker" list={Docker} icon={NavigationApps}/>
        <Resource name="vms" options={{ label: 'VMs' }} list={VMs} icon={HardwareDeviceHub}/>
        <Resource name="statistics" list={Statistics} icon={ActionAssessment}/>
        <Resource name="tools" list={Tools} icon={ActionBuild}/>
        <Resource name="settings" list={Settings} icon={ActionSettings}/>
    </Admin>
);

export default App;
