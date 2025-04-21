import React, { useState } from 'react';
import {
  Stack,
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import { PieChart } from '@mui/x-charts/PieChart';

// Dummy data with percentages
const dummyData = [
  { label: 'Chrome', value: 45 },
  { label: 'Safari', value: 25 },
  { label: 'Firefox', value: 15 },
  { label: 'Edge', value: 10 },
  { label: 'Others', value: 5 },
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
              innerRadius: 60, // 👈 This makes it a ring (donut)
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

      <Stack direction="column" sx={{ width: { xs: '100%', md: '40%' } }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 1,
          }}
        >
          <Typography variant="subtitle1">Clicked Slice Info</Typography>
          <IconButton size="small" onClick={() => setItemData(undefined)}>
            <UndoOutlinedIcon fontSize="small" />
          </IconButton>
        </Box>

        <Box
          component="pre"
          sx={{
            p: 2,
            bgcolor: '#f5f5f5',
            borderRadius: 2,
            fontSize: 14,
            overflowX: 'auto',
          }}
        >
          <code>
            {itemData
              ? JSON.stringify(itemData, null, 2)
              : '// Click a slice to view details'}
          </code>
        </Box>
      </Stack>
    </Stack>
  );
}
