import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Helper to format Y-axis labels as $Xk
const formatYAxis = (value) => {
  if (value >= 1000) {
    return `$${Math.round(value / 1000)}k`;
  }
  return `$${value}`;
};

// Custom Tooltip for better display
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <p style={{ margin: '0', fontWeight: 'bold' }}>{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ margin: '0', color: entry.stroke }}>
            {entry.name}: ${entry.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// Sample data (use your real data; added decimals for realism)
const data = [
  { month: 'Jan', income: 25000.00, expense: 10000.00 },
  { month: 'Feb', income: 22000.00, expense: 12000.00 },
  { month: 'Mar', income: 18000.00, expense: 15000.00 },
  { month: 'Apr', income: 20000.00, expense: 8234.12 },
  { month: 'May', income: 30234.12, expense: 12234.12 },
  { month: 'Jun', income: 28000.00, expense: 11000.00 },
  { month: 'Jul', income: 32000.00, expense: 9000.00 },
];

const CashFlowChart = () => {
  return (
    <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <ResponsiveContainer width="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey="month" stroke="#888" tickMargin={10} />
          <YAxis stroke="#888" tickFormatter={formatYAxis} tickMargin={5} />
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="top" height={36} />
          <Line 
            type="natural"  // Smoother curve
            dataKey="income" 
            stroke="#63d378ff"  // Blue
            strokeWidth={2}
            dot={{ r: 4, fill: '#63d378ff' }}  // Visible dots like in screenshot
            activeDot={{ r: 6 }} 
          />
          <Line 
            type="natural" 
            dataKey="expense" 
            stroke="#feaf1b"  // Yellow
            strokeWidth={2}
            dot={{ r: 4, fill: '#feaf1b' }} 
            activeDot={{ r: 6 }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CashFlowChart;