import './ActivityStats.css';
import {BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

function CustomBar(props) {
    const {x, y, width, height} = props;
    return <Rectangle x={x} y={y} width={width} height={height} radius={[50, 50, 50, 50]} fill="#4361EE"/>;
}


function ActivityStats(props) {
    let formatedData = {};
    if (props.data.length) {
        formatedData = props.data.map((entry) => {
            return {
                activityMonth: entry.activityMonth + "-" + entry.activityYear,
                "Hours Spent": entry.activityValue
            };
        });
    }
    return (
        <div className="activity-stats-base rounderCorn dropShadow">
            <p className="activity-stats-title">Activity Focus</p>
            <div className="activity-chart-container">
                {
                    formatedData.length ? (
                        <ResponsiveContainer className="activity-stats-container" height={250} width={450}>
                            <BarChart
                                width={500}
                                height={300}
                                data={formatedData}
                            >
                                <XAxis dataKey="activityMonth"/>
                                <Tooltip/>
                                <Bar dataKey="Hours Spent" fill="#F72585" shape={<CustomBar/>}
                                     activeBar={<CustomBar fill="#F72585"/>}/>
                            </BarChart>
                        </ResponsiveContainer>
                    ) : (
                        <p>No Data Found</p>
                    )
                }

            </div>

        </div>
    );
}

export default ActivityStats;