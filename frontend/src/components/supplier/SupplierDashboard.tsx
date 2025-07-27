import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Navigation } from '@/components/ui/navigation';
import { Package } from 'lucide-react';

const SupplierDashboard = () => {
  const [supplier, setSupplier] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/supplier/check-session', { withCredentials: true })
      .then((res) => {
        if (!res.data.authenticated) {
          navigate('/supplier/login');
        } else {
          axios
            .get('http://localhost:5000/api/supplier/dashboard', { withCredentials: true })
            .then((res) => setSupplier(res.data.supplier))
            .catch(() => navigate('/supplier/login'));
        }
      })
      .catch(() => navigate('/supplier/login'));
  }, []);

  const handleLogout = async () => {
    await axios.post('http://localhost:5000/api/supplier/logout', { withCredentials: true });
    window.location.href = '/';
  };

  if (!supplier) return <p className="p-6 text-lg">Loading Dashboard...</p>;

  return (
    <div className="min-h-screen bg-background">


      <section className="max-w-4xl mx-auto px-6 py-12 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Welcome, {supplier.businessName}
          </h1>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => (window.location.href = '/')}>
              Home
            </Button>
            <Button className="bg-red-500 hover:bg-red-600 text-white" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>

        <Card className="shadow-lg border-0">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl font-semibold">Business Info</h2>
            <p>
              <span className="font-medium text-muted-foreground">Email:</span> {supplier.email}
            </p>
            <p>
              <span className="font-medium text-muted-foreground">Contact:</span> {supplier.contactNumber}
            </p>
            <p>
              <span className="font-medium text-muted-foreground">Location:</span>{' '}
              {JSON.stringify(supplier.location?.coordinates)}
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-0">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center">
                <Package className="text-white w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold">Available Materials</h3>
            </div>

            <ul className="list-disc list-inside space-y-1 pl-3">
              {supplier?.availableMaterials?.length > 0 ? (
                supplier.availableMaterials.map((mat, index) => (
                  <li key={index} className="text-muted-foreground">
                    <Badge variant="secondary" className="mr-2">{mat.materialName}</Badge>
                    {mat.quantityAvailable} {mat.unit}
                  </li>
                ))
              ) : (
                <li className="text-muted-foreground">No materials available</li>
              )}
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default SupplierDashboard;
