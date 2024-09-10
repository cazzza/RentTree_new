import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Lightbulb, Wind } from 'lucide-react';

const MoreInfoPage = ({ appliance = 'HVAC' }) => {
  const applianceInfo = {
    HVAC: {
      icon: <Wind className="w-12 h-12 text-blue-500" />,
      tips: [
        "Regularly clean or replace air filters",
        "Use a programmable thermostat to optimize temperature",
        "Seal air leaks around windows and doors",
        "Consider upgrading to a more energy-efficient system",
      ],
    },
    Lighting: {
      icon: <Lightbulb className="w-12 h-12 text-yellow-500" />,
      tips: [
        "Switch to LED bulbs",
        "Install motion sensors or timers",
        "Make use of natural light when possible",
        "Use task lighting instead of lighting entire rooms",
      ],
    },
  };

  const { icon, tips } = applianceInfo[appliance] || {
    icon: <AlertCircle className="w-12 h-12 text-gray-500" />,
    tips: ["Information not available for this appliance type"],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        More Information: {appliance}
      </h1>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-4">
            {icon}
            <span>Emission Reduction Tips</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {tips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default MoreInfoPage;