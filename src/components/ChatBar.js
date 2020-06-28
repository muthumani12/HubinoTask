import React from 'react';
import Chart from 'react-apexcharts';


  class ChatBar extends React.Component<{}> {
    constructor(props) {
       super(props);

       this.state = {
         options: {
           chart: {
             id: 'apexchart-example'
           },
           xaxis: {
             categories: [1, 2, 3, 4, 5]
           }
         },
         series: [{
           name: 'series-1',
           data: [30, 40, 35, 50, 49]
         }]
       }
     }
     render() {
       return (
          <div id="chart" className="barchart-high">
         <Chart options={this.state.options} series={this.state.series} type="bar" width={300} height={320} />
</div>
       )
     }
}

export default ChatBar ;
