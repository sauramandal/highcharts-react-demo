import React, { Fragment } from 'react'
import HighchartsReact from 'highcharts-react-official'
const DonutChart = ({ highcharts, options }) => {
    return (
        <Fragment>
            <HighchartsReact highcharts={highcharts} options={options} />
        </Fragment>
    )
}

export default DonutChart
