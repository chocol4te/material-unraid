import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { Chart } from 'react-google-charts';

const styles = {
    flex: { display: 'flex' },
    leftCol: { flex: 1, marginRight: '1em' },
    rightCol: { flex: 1, marginLeft: '1em' },
    singleCol: { marginTop: '1em' },
};

export const Statistics = (props) => (
    <div style={styles.singleCol}>
    <Card>
    <CardHeader title="CPU Usage" />
     <div className={'cpu-usage'}>
        <Chart
          chartType="LineChart"
          rows={[
            [new Date(1495597201),0.14],[new Date(1495597801),0.11],[new Date(1495598401),0.06],[new Date(1495599001),0.03],[new Date(1495599601),0.09],[new Date(1495600201),0.11],[new Date(1495600801),0.04],[new Date(1495601401),0.11],[new Date(1495602001),0.08],[new Date(1495602601),0.78],[new Date(1495603201),0.76],[new Date(1495603801),0.90],[new Date(1495604401),0.99],[new Date(1495605001),0.78],[new Date(1495605601),0.16],[new Date(1495606201),0.15],[new Date(1495606801),0.08],[new Date(1495607401),0.06],[new Date(1495608001),0.04],[new Date(1495608601),0.11],[new Date(1495609201),0.20],[new Date(1495609801),0.13],[new Date(1495610401),0.14],[new Date(1495611001),0.07],[new Date(1495611601),0.11],[new Date(1495612201),0.12],[new Date(1495612801),0.10],[new Date(1495613401),0.09],[new Date(1495614001),0.05],[new Date(1495614601),0.10],[new Date(1495615201),0.07],[new Date(1495615801),0.42],[new Date(1495616401),0.18],[new Date(1495617001),0.13],[new Date(1495617601),0.10],[new Date(1495618201),0.12],[new Date(1495618801),0.08],[new Date(1495619401),0.06],[new Date(1495620001),0.06],[new Date(1495620601),0.05],[new Date(1495621201),0.09],[new Date(1495621801),0.11],[new Date(1495622401),0.08],[new Date(1495623001),0.08],[new Date(1495623601),0.06],[new Date(1495624201),0.08],[new Date(1495624801),0.06],[new Date(1495625401),0.76],[new Date(1495626001),1.00],[new Date(1495626601),0.94],[new Date(1495627201),0.98],[new Date(1495627801),1.06],[new Date(1495628401),0.76],[new Date(1495629001),0.16],[new Date(1495629601),0.20],[new Date(1495630201),0.14],[new Date(1495630801),0.12],[new Date(1495631401),0.43],[new Date(1495632001),0.54],[new Date(1495632601),0.24],[new Date(1495633201),0.22],[new Date(1495633801),0.11],[new Date(1495634401),0.16],[new Date(1495635001),0.16],[new Date(1495635601),0.07],[new Date(1495636201),0.10],[new Date(1495636801),0.14],[new Date(1495637401),0.11],[new Date(1495638001),0.15],[new Date(1495638601),0.07],[new Date(1495639201),0.08],[new Date(1495639801),0.08],[new Date(1495640401),0.25],[new Date(1495641001),0.45],[new Date(1495641601),0.70],[new Date(1495642201),0.34],[new Date(1495642801),0.35],[new Date(1495643401),0.41],[new Date(1495644001),0.25],[new Date(1495644601),0.24],[new Date(1495645201),0.33],[new Date(1495645801),0.49],[new Date(1495646401),0.37],[new Date(1495647001),0.19],[new Date(1495647601),0.05],[new Date(1495648201),0.10],[new Date(1495648801),0.12],[new Date(1495649401),0.11],[new Date(1495650001),0.21],[new Date(1495650601),0.15]]}
          
          columns={[
            {
                type: 'datetime',
                //label: 'Time',
            },
            {
                type: 'number',
                //label: 'CPU Utilization',
            },
           ]}
          options={{focusTarget: 'category', crosshair: { trigger: 'focus', orientation: 'vertical', focused: { opacity: 0.5}}}}
          graph_id="LineChart"
          width="100%"
          height="400px"
          legend_toggle
        />
      </div>
    </Card>
    </div>
);
