import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { Fragment, useState } from 'react'
import BarChart from './BarChart'
import DonutChart from './DonutChart'
import { packedBubbleSplitData } from '../PackedBubbleSplitData'
import { femaleDataset, maleDataset } from '../ScatterData'
const options = {
    chart: {
        type: 'column',
    },
    credits: {
        enabled: false,
    },
    title: {
        text: 'Fruit Consumption',
    },
    xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges'],
    },
    yAxis: {
        title: {
            text: 'Fruit eaten',
        },
    },
    series: [
        {
            name: 'Jane',
            data: [1, 8, 4, 24, 14],
        },
        {
            name: 'John',
            data: [
                {
                    name: 'Bangalore',
                    x: 3,
                    y: 5,
                    color: 'red',
                },
                {
                    name: 'Chennai',
                    y: 3,
                },
                {
                    name: 'Kolkata',
                    y: 8,
                },
            ],
        },
    ],
}

function ChartDemo(props) {
    const [selectedPie, setSelectedPie] = useState('Chrome')
    const barChartOptions = {
        chart: {
            type: 'pie',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
        },
        title: {
            text: 'Browser market shares in January, 2018',
        },
        tooltip: {
            pointFormat: '{series.name}: <b> {point.percentage .1f}%</b>',
        },
        credits: {
            enabled: false,
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                innerSize: '60%',
                point: {
                    events: {
                        click: function(evt) {
                            console.log('Event', evt.point.name)
                            setSelectedPie(evt.point.name)
                        },
                    },
                },
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                },
            },
        },
        series: [
            {
                name: 'Brands',
                colorByPoint: true,
                data: [
                    {
                        name: 'Chrome',
                        y: 61.41,
                        sliced: true,
                        selected: true,
                    },
                    {
                        name: 'Internet Explorer',
                        y: 11.84,
                    },
                    {
                        name: 'Firefox',
                        y: 10.85,
                    },
                    {
                        name: 'Edge',
                        y: 4.67,
                    },
                    {
                        name: 'Safari',
                        y: 4.18,
                    },
                    {
                        name: 'Sogou Explorer',
                        y: 1.64,
                    },
                    {
                        name: 'Opera',
                        y: 1.6,
                    },
                    {
                        name: 'QQ',
                        y: 1.2,
                    },
                    {
                        name: 'Other',
                        y: 2.61,
                    },
                ],
            },
        ],
    }

    const scatterChartOptions = {
        chart: {
            type: 'scatter',
            zoomType: 'xy',
        },
        title: {
            text: 'Height vs Weight of 500+ individuals by Gender',
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Height (cm)',
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true,
        },
        yAxis: {
            title: {
                text: 'Weight (kg)',
            },
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 100,
            y: 70,
            floating: true,
            borderWidth: 1,
        },
        plotOptions: {
            scatter: {
                marker: {
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100, 100, 100)',
                        },
                    },
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false,
                        },
                    },
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.x} cm, {point.y} kg',
                },
            },
        },
        series: [
            {
                name: 'Female',
                color: 'rgba(223, 83, 83, .5)',
                data: femaleDataset,
            },
            {
                name: 'Male',
                color: 'rgba(119, 152, 191, .5)',
                data: maleDataset,
            },
        ],
    }

    const liveSplineOptions = {
        chart: {
            type: 'spline',
            marginRight: 10,
            events: {
                load: function() {
                    //update the chart each second
                    let series = this.series[0]
                    setInterval(function() {
                        let x = new Date().getTime(),
                            y = Math.random()
                        series.addPoint([x, y], true, true)
                    }, 1000)
                },
            },
        },
        title: {
            text: 'Live random data',
        },
        xAxis: {
            title: {
                text: 'time',
            },
            type: 'datetime',
            tickPixelInterval: 150,
        },
        yAxis: {
            title: {
                text: 'Value',
            },
            plotLines: [
                {
                    value: 0,
                    width: 1,
                    color: '#808080',
                },
            ],
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b>',
            pointFormat: '{point.x%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}',
        },
        legend: {
            enabled: false,
        },
        exporting: {
            enabled: false,
        },
        series: [
            {
                name: 'Random data',
                data: (function() {
                    let data = [],
                        time = new Date().getTime()
                    for (let i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random(),
                        })
                    }
                    return data
                })(),
            },
        ],
    }

    const barBasicChartOptions = {
        chart: {
            type: 'bar',
        },
        title: {
            text: 'Historical World Population by Region',
        },
        subtitle: {
            text: 'Source: Wikipedia',
        },
        xAxis: {
            categories: ['Africa', 'America', 'Asia', 'Europe', 'Ocenia'],
            title: {
                text: '',
            },
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population (millions)',
                align: 'high',
            },
            labels: {
                overflow: 'justify',
            },
        },
        tooltip: {
            valueSuffix: ' millions',
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                },
            },
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true,
        },
        credits: {
            enabled: false,
        },
        series: [
            {
                name: 'Year 1800',
                data: [107, 31, 635, 203, 2],
            },
            {
                name: 'Year 1900',
                data: [133, 156, 947, 408, 6],
            },
            {
                name: 'Year 2000',
                data: [814, 841, 3714, 727, 31],
            },
            {
                name: 'Year 2016',
                data: [1216, 1001, 4436, 738, 40],
            },
        ],
    }

    const packedBubbleOptions = {
        chart: {
            type: 'packedbubble',
            height: '100%',
        },
        title: {
            text: 'Carbon emissions around the world (2014)',
        },
        tooltip: {
            useHTML: true,
            pointFormat: '<b>{point.name}:</b> {point.value}m CO<sub>2</sub>',
        },
        plotOptions: {
            packedbubble: {
                minSize: '20%',
                maxSize: '100%',
                zMin: 0,
                zMax: 1000,
                layoutAlgorithm: {
                    gravitationalConstant: 0.05,
                    splitSeries: true,
                    seriesInteraction: false,
                    dragBetweenSeries: true,
                    parentNodeLimit: true,
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                    filter: {
                        property: 'y',
                        operator: '>',
                        value: 250,
                    },
                    style: {
                        color: 'black',
                        textOutline: 'none',
                        fontWeight: 'normal',
                    },
                },
            },
        },
        series: packedBubbleSplitData,
    }

    return (
        <Fragment>
            <div className="row">
                <div className="col-md-3">
                    <BarChart highcharts={Highcharts} options={options} />
                </div>

                <div className="col-md-6">
                    <DonutChart highcharts={Highcharts} options={barChartOptions} />
                </div>
                <div className="col-md-3">
                    <h4>{selectedPie}</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <HighchartsReact highcharts={Highcharts} options={scatterChartOptions} />
                </div>
                <div className="col-md-6">
                    <HighchartsReact highcharts={Highcharts} options={liveSplineOptions} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <HighchartsReact highcharts={Highcharts} options={barBasicChartOptions} />
                </div>
                {/* <div className="col-md-6">
                    <HighchartsReact highcharts={Highcharts} options={packedBubbleOptions} />
                </div> */}
            </div>
        </Fragment>
    )
}

export default ChartDemo
