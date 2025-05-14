import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import './modalclone.css';

const ModalClone = () => {
    const [chartData, setChartData] = useState({
        options: {
            chart: {
                type: "line",
                height: 300,
                foreColor: "#999",
                stacked: false,
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 2,
                    left: 2,
                    blur: 5,
                    opacity: 0.1
                }
            },
            colors: ['#F44336', '#3b82f6'],
            stroke: {
                curve: "smooth",
                width: 2
            },
            dataLabels: {
                enabled: false
            },
            markers: {
                size: 4,
                strokeColor: "#fff",
                strokeWidth: 2,
                strokeOpacity: 0.9,
                fillOpacity: 1,
                hover: {
                    size: 6
                }
            },
            xaxis: {
                type: "numeric",
                min: 0,
                max: 120,
                tickAmount: 6,
                title: {
                    text: "Days After Initial Identification",
                    style: {
                        color: '#999',
                        fontWeight: 'normal',
                        fontSize: '13px'
                    }
                },
                axisBorder: {
                    show: true,
                    color: '#F0F0ED'
                },
                axisTicks: {
                    show: true,
                    length: 5,
                    color: '#F0F0ED'
                },
                labels: {
                    style: {
                        colors: '#999',
                        fontSize: '11px'
                    }
                }
            },
            yaxis: {
                title: {
                    text: "Accuracy",
                    style: {
                        color: '#999',
                        fontWeight: 'normal',
                        fontSize: '13px'
                    }
                },
                labels: {
                    formatter: (val) => val + "%",
                    style: {
                        colors: '#999',
                        fontSize: '11px'
                    }
                },
                min: 0,
                max: 100,
                tickAmount: 6,
            },
            grid: {
                show: true,
                borderColor: '#F0F0ED',
                strokeDashArray: 0,
                xaxis: {
                    lines: {
                        show: false
                    }
                },
                yaxis: {
                    lines: {
                        show: true
                    }
                },
                padding: {
                    left: -5,
                    right: 5,
                    top: 0,
                    bottom: 0
                }
            },
            tooltip: {
                x: {
                    formatter: (val) => val + " Days",
                },
                y: {
                    formatter: (val) => val.toFixed(1) + "%"
                },
                intersect: true,
                shared: false, // Keep shared as false
                style: {
                    fontSize: '12px',
                    fontFamily: 'Inter, sans-serif'
                }

            },
            legend: {
                position: 'top',
                horizontalAlign: 'left',
                labels: {
                    colors: '#999',
                    useSeriesColors: false,
                    fontSize: '12px'
                },
                markers: {
                    width: 10,
                    height: 10,
                    strokeWidth: 0,
                    fillColors: undefined,
                    radius: 12,
                    customFill: [],
                    customStroke: [],
                    customStrokeWidth: undefined,
                    customStrokeColor: [],
                    offsetX: 0,
                    offsetY: 0
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 8
                },
                onItemClick: {
                    toggleDataSeries: true
                },
                onItemHover: {
                    highlightDataSeries: true
                },
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 0.1,
                    opacityFrom: 0.5,
                    opacityTo: 0.1,
                    stops: [0, 100]
                }
            }
        },
        series: [
            {
                name: 'Fingerprint',
                data: [
                    [0, 90],
                    [20, 85],
                    [40, 75],
                    [60, 60],
                    [80, 40],
                    [100, 20],
                    [120, 10]
                ]
            },
            {
                name: 'Competitors',
                data: [
                    [0, 92],
                    [20, 80],
                    [40, 65],
                    [60, 50],
                    [80, 30],
                    [100, 15],
                    [120, 5]
                ]
            }
        ]
    });

    const [chartKey, setChartKey] = useState(0);

    useEffect(() => {
        setChartKey(prevKey => prevKey + 1);
    }, []);

    return (
        <div className="modal-clone">
            <div className="modal-content">
                <h2 className="modal-heading">Accuracy Over Time</h2>
                <div className="chart-container">
                    <ReactApexChart
                        key={chartKey}
                        options={chartData.options}
                        series={chartData.series}
                        type="line"
                        height={300}
                        width="100%"
                    />
                </div>
                <style jsx global>{`
                    .modal-clone {
                        background-color: #f8fafc;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                        font-family: 'Inter', sans-serif;
                    }
                    .modal-content {
                        max-width: 800px;
                        margin: auto;
                    }
                    .modal-heading {
                        font-size: 1.875rem;
                        font-weight: 600;
                        color: #1e293b;
                        margin-bottom: 1rem;
                        text-align: left;
                    }
                    .chart-container {
                        width: 100%;
                        margin: 0 auto;
                    }
                `}</style>
            </div>
        </div>
    );
};

export default ModalClone;