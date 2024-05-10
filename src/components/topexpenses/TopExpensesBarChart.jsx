import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer, Legend, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
];

export const TopExpensesBarChart = () => {
    return <>
            <BarChart width={200} height={300} data={data} layout="vertical">
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" />
                <Tooltip />
                <Bar dataKey="uv" fill="#8884d8" isAnimationActive={false}/>
            </BarChart>
    </>
}


{/* <BarChart width={300} height={300} data={data}>
            <Bar dataKey="uv" fill="#8884d8" />
        </BarChart> */}