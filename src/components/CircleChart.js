import React, { useState } from 'react';
import {
  Stack,
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import { PieChart } from '@mui/x-charts/PieChart';

const dummyData = [
  { label: 'Chrome', value: 52, color: '#259CE5' },
  { label: 'Safari', value: 33, color: '#34C759' },
  { label: 'Firefox', value: 15, color: '#FF9500' },
];


// Format as percentage
const valueFormatter = ({ value }) => `${value}%`;

export default function DonutPieChart() {
  const [itemData, setItemData] = useState();

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={4}
      sx={{ width: '100%', p: 2 }}
    >
      <Box sx={{ flexGrow: 1 }}>
      <PieChart
          series={[
            {
              data: dummyData,
              innerRadius: 60,
              outerRadius: 100,
              valueFormatter,
              label: ({ label, value }) => `${label}: ${value}%`,
            },
          ]}
          width={400}
          height={300}
          onItemClick={(_, d) => setItemData(d)}
        />
      </Box>
    </Stack>
  );
}
