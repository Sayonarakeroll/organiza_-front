import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { plugins } from "../../postcss.config";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const HChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ['Despesas', 'Metas', 'Saldo Atual', 'Receitas'],
            datasets: [
                {
                    data: [5, 10, 30, 55],
                    borderColor: [
                        '#FF6384',
                        '#eba10f',
                        'rgba(159, 67, 204, 1)',
                        '#4BC0C0',
                    ],
                    backgroundColor: [
                        '#ff6565',
                        '#eba10f',
                        'rgba(159, 67, 204, 1)',
                        '#4BC0C0',
                    ],
                    color: [
                        'rgba(255, 255, 255, 1)'
                    ]
                },
            ],
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top',
                labels: {
                    color: "black",
                },
                
                title: {
                    display: true,
                    text: 'Seu Patrimônio (Em %)',
                    color: 'black'
                },
                maintainAspectRatio: false,
                responsive: true
            }
        }
         }
         )
    },
    
    [])
    return (
        <>
            <div className=" flex flex-row w-full md:col-span-2 lg:h-[50vh] h-[60vh] a-auto p-4" >
                <Pie data={chartData} options={chartOptions} plugins={[plugins]}
                 />
            </div>
        </>
    )
}

export default HChart