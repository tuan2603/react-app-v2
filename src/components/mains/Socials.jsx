import React from 'react';
import {connect} from 'react-redux';
import {Line} from 'react-chartjs-2';
import classnames from 'classnames';


// Social Box Chart
const socialBoxData = [
    {data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook'},
    {data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter'},
    {data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin'},
    {data: [35, 23, 56, 22, 97, 23, 64], label: 'google'},
];

const makeSocialBoxData = (dataSetNo) => {
    const dataset = socialBoxData[dataSetNo];
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: dataset.data,
                label: dataset.label,
            },
        ],
    };
    return () => data;
};

const socialChartOpts = {
    tooltips: {
        enabled: false,
        custom: {
            mode: 'index',
            titleFontSize: 12,
            titleFontColor: '#000',
            bodyFontColor: '#000',
            backgroundColor: '#fff',
            titleFontFamily: 'Montserrat',
            bodyFontFamily: 'Montserrat',
            cornerRadius: 3,
            intersect: false,
        }
    },
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [
            {
                display: false,
            }],
        yAxes: [
            {
                display: false,
            }],
    },
    elements: {
        point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3,
        },
    },
};


class Socials extends React.Component {
    render() {
        return (
            <div className="col-lg-3 col-md-6">
                <div className={classnames('social-box',  this.props.social )}>
                    <i className={classnames('fa',  this.props.icon )}></i>
                    <div className="chart-wrapper">
                        <Line data={makeSocialBoxData(this.props.map)} options={socialChartOpts} height={90}/>
                    </div>
                    <ul>
                        <li>
                            <strong><span className="count">40</span> k</strong>
                            <span>friends</span>
                        </li>
                        <li>
                            <strong><span className="count">450</span></strong>
                            <span>feeds</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const connectedApp = connect()(Socials);
export { connectedApp as Socials };
