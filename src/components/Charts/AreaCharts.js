import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../Hooks/useChart';

const AreaCharts = () => {
    const [chart] = useChart()
    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0 / 3.0}>
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
            </ResponsiveContainer>
        </div>
    );
};

export default AreaCharts;