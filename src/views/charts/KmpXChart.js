import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Chart from 'react-apexcharts'
import { makeSelectProjectCSVFileData } from '../../stores/project-file/FileSelector';

const KmpXChart = () => {
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);
  const data = useSelector(makeSelectProjectCSVFileData);
  useEffect(() => {
    if (data.length) {
      const max_KP = data.sort((a, b) => b.KP - a.KP)[0].KP;
      const min_KP = data.sort((a, b) => a.KP - b.KP)[0].KP;
      const max_X = data.sort((a, b) => b.X - a.X)[0].X;
      const min_X = data.sort((a, b) => a.X - b.X)[0].X;
      setSeries([{
        name: "X",
        data: [min_X, max_X]
      }])
      setOptions({
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'KP as x-asis & X as y-axis',
          align: 'center'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5
          },
        },
        xaxis: {
          categories: [min_KP, max_KP],
          title: {
            text: 'KP'
          }
        },
        yaxis: {
          categories: [min_X, max_X],
          title: {
            text: 'X'
          }
        }
      })
    }
  }, [])
  return (
    series.length ?
      <div style={{ marginTop: '20px' }}>
        <Chart options={options} series={series} type="line" height={350} />
      </div>
      : (
        <div>loading....</div>
      )
  )
}

export default KmpXChart;