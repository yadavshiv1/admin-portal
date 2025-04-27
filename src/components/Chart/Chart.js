import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const dummyData = [
  { month: 'Jan', value: 40 },
  { month: 'Feb', value: 55 },
  { month: 'Mar', value: 30 },
  { month: 'Apr', value: 70 },
  { month: 'May', value: 60 },
  { month: 'Jun', value: 90 },
];  

export default function TickPlacementBars() {

  return (
    <div style={{ width: '100%', padding: '16px' }}>

      <BarChart
        height={300}
        dataset={dummyData}
        xAxis={[
          {
            scaleType: 'band',
            dataKey: 'month',
          },
        ]}
        series={[{ dataKey: 'value',
          color: '#259CE5',
        }]}
      />
    </div>
  );
}
