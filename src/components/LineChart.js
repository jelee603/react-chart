import React, {Component} from "react"
import {Button} from "element-react"
import Chart from "chart.js"

class LineChart extends Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }
    componentDidMount() {
        new Chart(this.chartRef.current, {
            type: 'line',
            data: {
                datasets: [{
                    label: 'My First dataset',
                    borderColor: '#3093d6',
                    data: [0, 10, 5, 2, 20, 30, 45],
                    fill: false,
                }, {
                    label: 'Line Dataset',
                    borderDash: [10, 10],
                    borderColor: 'rgb(255, 99, 132)',
                    data: [20, 30, 20, 10],

                    type: 'line'
                }],
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            },
            options: {
                scales: {
                    yAxes: [{
                        stacked: true
                    }]
                }
            },
        });
    }

    render() {
        return (
            <div>
                <Button>5M</Button>
                <canvas ref={this.chartRef}></canvas>
            </div>
        )
    }
}

export default LineChart;