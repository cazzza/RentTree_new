import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const OverviewPage = ({ userType = 'landlord' }) => {
  // Mock data for the chart
  const data = [
    { name: 'Property A', emissions: 4000 },
    { name: 'Property B', emissions: 3000 },
    { name: 'Property C', emissions: 2000 },
    { name: 'Property D', emissions: 2780 },
    { name: 'Property E', emissions: 1890 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        {userType === 'landlord' ? 'Your Properties' : 'Your Property'}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Carbon Emissions Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="emissions" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Total Properties: {data.length}</li>
              <li>Average Emissions: {(data.reduce((acc, curr) => acc + curr.emissions, 0) / data.length).toFixed(2)} units</li>
              <li>Highest Emitting: {data.reduce((max, property) => max.emissions > property.emissions ? max : property).name}</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OverviewPage;