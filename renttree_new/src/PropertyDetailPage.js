import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const PropertyDetailPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  // Mock data for the chart
  const data = [
    { name: 'HVAC', value: 400 },
    { name: 'Lighting', value: 300 },
    { name: 'Appliances', value: 300 },
    { name: 'Water Heating', value: 200 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Property Details</h1>
        <Button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Save Changes' : 'Edit Property'}
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Emissions Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Property Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <Input type="text" defaultValue="123 Eco Street" disabled={!isEditing} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Square Footage</label>
                <Input type="number" defaultValue="2000" disabled={!isEditing} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Year Built</label>
                <Input type="number" defaultValue="1990" disabled={!isEditing} />
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PropertyDetailPage;