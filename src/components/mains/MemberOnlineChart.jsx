import React from 'react';
import {connect} from 'react-redux';
import {Line} from 'react-chartjs-2';
import classnames from 'classnames';
// Card Chart 1
const cardChartData1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,255,255,.2)',
            borderColor: 'rgba(255,255,255,.77)',
            data: [65, 59, 84, 84, 51, 55, 40],
        },
    ],
};

const cardChartOpts1 = {
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
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [
            {
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent',
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent',
                },

            }],
        yAxes: [
            {
                display: false,
                ticks: {
                    display: false,
                    min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
                    max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
                },
            }],
    },
    elements: {
        line: {
            borderWidth: 1,
        },
        point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4,
        },
    }
}

class MemberOnlineChart extends React.Component {
    render() {
        return (
            <div className="col-sm-6 col-lg-3">
                <div className={classnames('card', 'text-white', this.props.bg)}>
                    <div className="card-body pb-0">
                        <div className="dropdown float-right">
                            <button className="btn bg-transparent dropdown-toggle theme-toggle text-light"
                                    type="button" id="dropdownMenuButton" data-toggle="dropdown">
                                <i className="fa fa-cog"></i>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div className="dropdown-menu-content">
                                    <a className="dropdown-item" href="/">Action</a>
                                    <a className="dropdown-item" href="/">Another action</a>
                                    <a className="dropdown-item" href="/">Something else here</a>
                                </div>
                            </div>
                        </div>
                        <h4 className="mb-0">
                            <span className="count">10468</span>
                        </h4>
                        <p className="text-light">Members online</p>

                        <div className="chart-wrapper px-0" style={{"height": "70px"}} height="70">
                            <Line data={cardChartData1} options={cardChartOpts1} height={70}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const connectedApp = connect()(MemberOnlineChart);
export {connectedApp as MemberOnlineChart};
