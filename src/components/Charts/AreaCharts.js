import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../Hooks/useChart';

const AreaCharts = () => {
    const [chart] = useChart()
    return (
        <AreaChart
            width={600}
            height={400}
            data={chart}

        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area dataKey="investment" stroke="#8884d8" />
            <Area dataKey="revenue" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
        </AreaChart>
    );
};

export default AreaCharts;