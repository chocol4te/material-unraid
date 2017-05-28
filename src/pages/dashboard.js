import React from 'react';
//import { List, Datagrid, TextField } from 'admin-on-rest';
import { Card, CardHeader, CardText } from 'material-ui/Card';

const styles = {
    flex: { display: 'flex' },
    leftCol: { flex: 1, marginRight: '1em' },
    rightCol: { flex: 1, marginLeft: '1em' },
    singleCol: { marginTop: '2em' },
};

export const Dashboard = (props) => (
    <Card>
        <CardHeader title="Dashboard" />
        <CardText>Lorem ipsum sic dolor amet...</CardText>
    </Card>
    
);
