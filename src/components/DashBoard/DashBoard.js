import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../Hooks/useChart';
import AreaCharts from '../Charts/AreaCharts';
import BarCharts from '../Charts/BarCharts';

const DashBoard = () => {
    const [chart] = useChart();

    return (
        <div className='row my-5'>
            <div className='col-lg-6 col-md-12 my-5 col-12'>
                <h3 className='text-primary fw-bold text-center mb-4'>Month wise sell</h3>
                <BarCharts></BarCharts>
            </div>

            <div className='col-lg-6 col-md-12 my-5 col-12'>
                <h3 className='text-primary fw-bold text-center mb-4'>Investment VS Revenue</h3>
                <AreaCharts></AreaCharts>
            </div>


            <div className='col-lg-6 col-md-12 my-5 col-12'>
                <h3 className='text-primary fw-bold text-center mb-4'>Investment VS Revenue</h3>
                <ResponsiveContainer width='100%' aspect={4.0 / 3.0}>
                    <PieChart width={600} height={400}>

                        <Pie
                            dataKey="investment"
                            isAnimationActive={false}
                            data={chart}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        />
                        <Pie dataKey="revenue" data={chart} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                        <Tooltip />


                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className='col-lg-6 col-md-12 my-5 col-12'>
                <h3 className='text-primary fw-bold text-center mb-4'>Investment VS Revenue</h3>
                <ResponsiveContainer width='100%' aspect={4.0 / 3.0}>
                    <ComposedChart
                        width={500}
                        height={400}
                        data={chart}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="month" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="sell" stroke="#ff7300" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>

    );
};

export default DashBoard;