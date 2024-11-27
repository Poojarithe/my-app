// import React from 'react';
// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const PieChart = () => {
//     const data = {
//         labels: ['Red', 'Blue', 'Yellow'],
//         datasets: [
//             {
//                 label: '# of Votes',
//                 data: [12, 19, 3],
//                 backgroundColor: [
//                     'rgba(255, 99, 132, 0.2)',
//                     'rgba(54, 162, 235, 0.2)',
//                     'rgba(255, 206, 86, 0.2)',
//                 ],
//                 borderColor: [
//                     'rgba(255, 99, 132, 1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)',
//                 ],
//                 borderWidth: 1,
//             },
//         ],
//     };

//     return (
//         <div style={styles.card}>
//             <h3 style={styles.cardTitle}>Pie Chart</h3>
//             <Pie data={data} />
//         </div>
//     );
// };

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

// export default PieChart;





import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div style={styles.card}>
            <h3 style={styles.cardTitle}>Pie Chart</h3>
            <div style={{ width: '300px', height: '300px', margin: '0 auto' }}>
                <Pie data={data} />
            </div>
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

export default PieChart;
