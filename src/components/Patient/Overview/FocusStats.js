import './FocusStats.css';
import {PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer} from 'recharts';

const data = [
    {name: 'Group A', value: 400},
    {name: 'Group B', value: 300},
    {name: 'Group C', value: 300},
    {name: 'Group D', value: 200},
    {name: 'Group E', value: 200}
];
const COLORS = ['#F72585', '#4CC9F0', '#4361EE', '#7209B7', '#3A0CA3'];


function FocusStats(props) {
    return (
        <div className="focus-stats-base rounderCorn dropShadow">
            <p className="focus-stats-title">Exercises Focus</p>
            <ResponsiveContainer className="focus-stats-container">
                <PieChart className="pie-chart">
                    <Pie className="pie"
                         data={data}
                         cx="50%"
                         cy="50%"
                         innerRadius={40}
                         outerRadius={100}
                         fill="#8884d8"
                         paddingAngle={0}
                         dataKey="value"
                         label={true}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                        ))}
                    </Pie>
                    <Tooltip/>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default FocusStats;