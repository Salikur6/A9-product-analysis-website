import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../Hooks/useChart';

const BarCharts = () => {

    const [chart] = useChart()
    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0 / 3.0}>
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
            </ResponsiveContainer>
        </div>
    );
};

export default BarCharts;