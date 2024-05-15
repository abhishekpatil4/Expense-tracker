import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer, Legend, XAxis, YAxis, Tooltip } from 'recharts';
import { useState, useEffect } from 'react';

export const TopExpensesBarChart = () => {
    const [groupedData, setGroupedData] = useState([]);
    useEffect(() => {
        if (JSON.parse(localStorage.getItem("transactions")) != null) {
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
                name: category.charAt(0).toUpperCase() + category.slice(1),
                value: groupedData[category]
            }));
            console.log("formattedData: ", formattedData);
            setGroupedData(formattedData);
        }
    }, []);
    return <>
        <ResponsiveContainer width={'99%'} height={272}>
            {groupedData && groupedData.length > 0 ? (
                <BarChart width={200} height={300} data={groupedData} layout="vertical" barCategoryGap={10}>
                    <XAxis type="number" hide />
                    <YAxis
                        type="category"
                        dataKey="name"
                        axisLine={false}
                        width={120} // Adjust width of YAxis to accommodate longer category names
                        interval={0} // Display all category names
                        tick={{ wrapText: true }} // Wrap long text
                        tickLine={false}
                    />
                    {/* <Tooltip /> */}
                    <Bar dataKey="value" fill="#8884d8" isAnimationActive={false} radius={[5, 20, 20, 5]} barSize={40} />
                </BarChart>
            ) : (
                <div style={{ height: '260px', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} margin={{ bottom: 30 }}>
                    <h1>No data to render bar graph</h1>
                </div>
            )}
        </ResponsiveContainer>

    </>
}