import React from 'react';
import { useState, useEffect } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';
import "./styles.css"
const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export const ExpPiechart = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [width, setWidth] = useState(400);
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            if(window.innerWidth < 600){
                setWidth(300);
            }else{
                setWidth(400);
            }
        };
        window.addEventListener('resize', handleResize);
        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <PieChart width={width} height={350} margin={{ bottom: 30 }}>
            <Pie
                data={data}
                cx="50%"
                cy="55%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                isAnimationActive={false}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Legend layout="horizontal" align="center" verticalAlign="bottom" />
        </PieChart>
    );
}
