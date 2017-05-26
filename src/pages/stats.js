import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { Chart } from 'react-google-charts';

/*
class CPUChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {

//        hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
//        vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
        legend: 'none',
      },
      rows: [
        [8, 12],
        [4, 5.5],
        [11, 14],
        [4, 5],
        [3, 3.5],
        [6.5, 7],
      ],
      columns: [
        {
          type: 'number',
          label: 'Time',
        },
        {
          type: 'number',
          label: 'CPU Utilization',
        },
      ],
    };
}
}
*/

export const Statistics = (props) => (
    <Card>
    <CardHeader title="CPU Usage" />
    
     <div className={'cpu-usage'}>
        <Chart
          chartType="LineChart"
          rows={[
            [new Date(1306192258), 57],
            [new Date(1306192412), 43],
            [new Date(1306192687), 23],
            [new Date(1306192923), 94],
            [new Date(1306193258), 53],
            [new Date(1306193525), 81],
          ]}
          
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
          options={{}}
          graph_id="LineChart"
          width="100%"
          height="400px"
          legend_toggle
        />
      </div>
    </Card>
);
