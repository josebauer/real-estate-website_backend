import React from 'react';
import { Box } from '@adminjs/design-system';

const statusColors: Record<string, string> = {
  confirmado: 'green',
  pendente: 'orange',
  cancelado: 'red',
};

export default function StatusBadgeShow({ record }: { record: any }) {
  const status = record?.params?.status || 'pendente';
  const color = statusColors[status.toLowerCase()] || 'gray';

  return (
    <Box>
      <Box
        style={{
          fontSize: '12px',
          color: '#4D4D4D',
          marginBottom: '4px'
        }}
      >
        Status
      </Box>
      <Box
        variant="badge"
        style={{
          backgroundColor: color,
          color: 'white',
          padding: '4px 8px',
          borderRadius: '10px',
          alignItems: 'start',
          fontWeight: 'bold',
          textAlign: 'center',
          textTransform: 'capitalize',
          width: '110px',
        }}
      >
        {status}
      </Box>
    </Box>
  );
};