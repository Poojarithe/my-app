import React from 'react';
import { Bubble } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const BubbleChart = () => {
    const data = {
        datasets: [
            {
                label: 'Sales Bubble',
                data: [
                    { x: 10, y: 20, r: 15 },
                    { x: 15, y: 10, r: 10 },
                    { x: 20, y: 30, r: 25 },
                    { x: 25, y: 40, r: 20 },
                ],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
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
                text: 'Bubble Chart',
            },
        },
    };

    return (
        <div style={styles.card}>
            <h3 style={styles.cardTitle}>Sales Bubble</h3>
            <Bubble data={data} options={options} />
        </div>
    );
};

// const styles = {
//     card: {
//         border: '1px solid #ddd',
//         borderRadius: '8px',
//         padding: '20px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         backgroundColor: '#fff',
//         maxWidth: '700px',
//         margin: '20px auto',
//     },
//     cardTitle: {
//         textAlign: 'center',
//         marginBottom: '20px',
//         fontSize: '1.5em',
//         color: '#333',
//     },
// };
const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        maxWidth: '700px', // Make sure maxWidth, width, and height are the same
        margin: '20px auto',
        height: '400px', // Added height to ensure both have the same height
    },
    cardTitle: {
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '1.5em',
        color: '#333',
    },
    chartContainer: {
        width: '100%', // Ensure the chart fits within the card
        height: '300px', // Ensure consistent height for both charts
        margin: '0 auto',
    },
};


export default BubbleChart;
