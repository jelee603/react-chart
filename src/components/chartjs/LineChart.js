import React, {Component} from "react"
import {Button} from "element-react"
import Chart from "chart.js"

class LineChart extends Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }
    componentDidMount() {
        const ctx = this.chartRef.current.getContext('2d');
        const gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, "#8ec6ad");
        gradientStroke.addColorStop(1, "#ffe");

        new Chart(this.chartRef.current, {
            type: 'line',
            data: {
                datasets: [{
                    label: 'My First dataset',
                    borderColor: '#3093d6',
                    data: [5, 20, 36, 10, 10, 20],
                    fill: false,
                }, {
                    label: 'Line Dataset',
                    borderDash: [10, 10],
                    borderColor: gradientStroke,
                    data: [5, 20, 36, 10, 10, 20],
                    backgroundColor: gradientStroke,
                }],
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
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