import './FocusStats.css';
import {PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer} from 'recharts';

const COLORS = ['#F72585', '#4CC9F0', '#4361EE', '#7209B7', '#3A0CA3'];

function FocusStats(props) {
    let data = {};
    let colorsMap;
    if (props.data.length) {
        data = props.data.map((entry) => {
            return {
                name: entry.exerciseType,
                value: entry.exerciseValue
            }
        })
        colorsMap = data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
        ));
    }
    return (
        <div className="focus-stats-base rounderCorn dropShadow">
            <p className="focus-stats-title">Exercises Focus</p>
            <ResponsiveContainer className="focus-stats-container">
                {
                    data.length ? (

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
                                {colorsMap}
                            </Pie>
                            <Tooltip/>
                        </PieChart>

                    ) : (
                        <p>No Data Found</p>
                    )
                }
            </ResponsiveContainer>
        </div>
    );
}

export default FocusStats;