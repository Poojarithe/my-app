import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Revenue ($)',
                data: [10000, 15000, 13000, 17000, 18000, 16000],
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly Revenue',
            },
        },
    };

    return (
        <div style={styles.card}>
            <h3 style={styles.cardTitle}>Revenue Overview</h3>
            <Line data={data} options={options} />
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        maxWidth: '700px',
        margin: '20px auto',
    },
    cardTitle: {
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '1.5em',
        color: '#333',
    },
};

export default LineChart;
