import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [role, setRole] = useState('renter');

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-green-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">EcoTrack: Sustainable Living Made Easy</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl text-center">
        Monitor your property's carbon footprint, track appliance efficiency, and discover ways to reduce your environmental impact.
      </p>
      
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">
            {activeTab === 'login' ? 'Welcome Back' : 'Join EcoTrack'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form className="space-y-4">
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Button className="w-full">Log In</Button>
              </form>
            </TabsContent>
            <TabsContent value="signup">
              <form className="space-y-4">
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm Password" />
                <div className="flex justify-between">
                  <Button
                    type="button"
                    variant={role === 'renter' ? 'default' : 'outline'}
                    onClick={() => setRole('renter')}
                  >
                    Renter
                  </Button>
                  <Button
                    type="button"
                    variant={role === 'landlord' ? 'default' : 'outline'}
                    onClick={() => setRole('landlord')}
                  >
                    Landlord
                  </Button>
                </div>
                <Button className="w-full">Sign Up</Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default LandingPage;