import React, {Component} from "react"
import echarts from "echarts"

class MixChart extends Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }
    componentDidMount() {
        // based on prepared DOM, initialize echarts instance
        const myChart = echarts.init(this.chartRef.current);

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
                data: ['January', 'February', 'March', 'April', 'May', 'June'],
            },
            yAxis: {},
            series: [{
                name: 'Sales',
                type: 'line',
                smooth: true,
                data: [5, 20, 36, 10, 10, 20],
                itemStyle: {
                    color: '#8ec6ad'
                },
                stack: 1,

            },{
                name: 'Sales',
                type: 'line',
                smooth: true,
                data: [5, 20, 36, 10, 10, 20],
                itemStyle: {
                    color: '#8ec6ad'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#8ec6ad'
                    }, {
                        offset: 1,
                        color: '#ffe'
                    }])
                },
                lineStyle: {
                    type: 'dotted',
                },
                stack: 1,

            }]
        };

        // use configuration item and data specified to show chart
        myChart.setOption(option);
    }
    render() {
        return (
            <div>
                <div ref={this.chartRef} style={{width: '600px', height:'400px'}} />
            </div>
        )
    }
}

export default MixChart;