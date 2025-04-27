'use client';

import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function TickPlacementBars({ data }) {
  return (
    <div style={{ width: '100%' }}>
      <BarChart
        height={300}
        dataset={data}
        xAxis={[
          {
            scaleType: 'band',
            dataKey: 'month',
          },
        ]}
        series={[
          {
            dataKey: 'value',
            color: '#259CE5',
          },
        ]}
      />
    </div>
  );
}
