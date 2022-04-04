import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../Hooks/useChart';

const BarCharts = () => {

    const [chart] = useChart()
    return (
        <div>
            <BarChart width={600} height={400} data={chart} margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
            }}>
                <XAxis dataKey='month' stroke='#8884d8'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <CartesianGrid stroke='#ccc' />
                <Bar dataKey='sell' fill='#8884d8' barSize={30}></Bar>
            </BarChart>
        </div>
    );
};

export default BarCharts;