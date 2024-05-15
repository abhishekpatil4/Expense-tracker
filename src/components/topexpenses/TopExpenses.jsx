import { TopExpensesBarChart } from "./TopExpensesBarChart"
export const TopExpenses = () => {
    return <>
        <div>
            <h1 style={{ color: 'white' }}><i>Top Expenses</i></h1>
            <div style={{ backgroundColor: 'white', borderRadius: '10px', padding:'20px', boxShadow:'0px 4px #2D2D2D'}}>
                <TopExpensesBarChart />
            </div>
        </div>
    </>
}