import React, { Component } from 'react';
import { Line, Chart } from 'react-chartjs-2';
import 'chartjs-adapter-luxon';
import StreamingPlugin from 'chartjs-plugin-streaming';

Chart.register(StreamingPlugin);


// class 
const Main = (props) => { 
 

    return ( <Line
      data={{
        datasets: [{
          data: []
        }, {
          data: []
        }]
      }}
      options={{
        scales: {
          x: {
            type: 'realtime'
          }
        }
      }}
    />
    )

}
export default Main 