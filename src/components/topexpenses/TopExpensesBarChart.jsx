import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer, Legend, XAxis, YAxis, Tooltip } from 'recharts';

export const TopExpensesBarChart = () => {
    return <>
        <ResponsiveContainer width={'99%'} height={272}>
            <BarChart width={200} height={300} data={data} layout="vertical" barCategoryGap={10}>
                <XAxis type="number" hide/>
                <YAxis type="category" dataKey="name" axisLine={false}/>
                <Tooltip />
                <Bar dataKey="uv" fill="#8884d8" isAnimationActive={false} radius={[5, 20, 20, 5]}/>
            </BarChart>
        </ResponsiveContainer>
    </>
}