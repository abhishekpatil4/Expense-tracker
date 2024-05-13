import React from 'react';
import { useState, useEffect } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';
import "./styles.css"
const data = [
    { name: 'Food', value: 1 },
    { name: 'Entertainment', value: 1 },
    { name: 'Travel', value: 1 },
    { name: 'Education', value: 1 },
    { name: 'Fitness', value: 1 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#ACDA39'];

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
    const [transactionData, setTransactionData] = useState();
    //useEffect to get pieChart data
    // useEffect(() => {
    //     let transactionArr = JSON.parse(localStorage.getItem("transactions"));

    // }, [])
    const [groupedData, setGroupedData] = useState([]);
    useEffect(() => {
        const transactionArr = JSON.parse(localStorage.getItem("transactions"));

        const groupedData = transactionArr.reduce((acc, currentItem) => {
            const category = currentItem.category;
            const price = parseInt(currentItem.price);

            if (!acc[category]) {
                acc[category] = 0;
            }

            acc[category] += price;

            return acc;
        }, {});

        const formattedData = Object.keys(groupedData).map(category => ({
            name: category.charAt(0).toUpperCase() + category.slice(1), // Capitalize category name
            value: groupedData[category]
        }));

        setGroupedData(formattedData);
        // console.log("formattedData: ", formattedData);
    }, []);
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            if (window.innerWidth < 600) {
                setWidth(300);
            } else {
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
                data={groupedData}
                cx="50%"
                cy="55%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                isAnimationActive={false}
            >
                {groupedData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Legend layout="horizontal" align="center" verticalAlign="bottom" />
        </PieChart>
    );
}
