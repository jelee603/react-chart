import React, {Component} from "react"
import echarts from "echarts"

class MixChart extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // based on prepared DOM, initialize echarts instance
        const myChart = echarts.init(document.getElementById("main"));

        // specify chart configuration item and data
        const option = {
            title: {
                text: 'ECharts entry example'
            },
            tooltip: {},
            legend: {
                data:['Sales']
            },
            xAxis: {
                data: ["shirt","cardign","chiffon shirt","pants","heels","socks"]
            },
            yAxis: {},
            series: [{
                name: 'Sales',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // use configuration item and data specified to show chart
        myChart.setOption(option);
    }
    render() {
        return (
            <div>
                <div id="main" style={{width: '600px', height:'400px'}} />
            </div>
        )
    }
}

export default MixChart;