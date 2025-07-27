import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ShoppingCart,
  Package,
  Users,
  Bell,
  TrendingUp,
  Clock,
  MapPin,
} from "lucide-react";

export const VendorDashboard = () => {
  const [vendor, setVendor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVendor = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/vendor/me", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Unauthorized");
        }

        const data = await response.json();
        setVendor(data);
      } catch (error) {
        console.error("Error fetching vendor data:", error);
      } finally {
        setLoading(false); // ✅ Set loading to false whether success or error
      }
    };

    fetchVendor();
  }, []);

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/vendor/logout", {
        method: "POST",
        credentials: "include",
      });

      if (res.ok) {
        window.location.href = "/vendor/login"; // Redirect to login
      } else {
        console.error("Logout failed.");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (loading) return <div className="p-6">Loading dashboard...</div>;
  if (!vendor) return <div className="p-6">Failed to load vendor data.</div>;

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Vendor Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, {vendor.shopName} ({vendor.name})
            </p>
          </div>

          <div className="flex items-center space-x-3">
            {/* Home Button */}
            <Button
              variant="outline"
              onClick={() => (window.location.href = "/")}
            >
              Home
            </Button>

            {/* Place Order Button */}
            <Button className="bg-gradient-to-r from-primary to-secondary">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Place New Order
            </Button>

            {/* Logout Button */}
            <Button
              variant="destructive"
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600"
            >
              Logout
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Menu Items</p>
                  <p className="text-2xl font-bold">
                    {vendor?.menu?.length || 0}
                  </p>
                </div>
                <Package className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Food Types</p>
                  <p className="text-2xl font-bold">
                    {vendor?.foodTypes?.length || 0}
                  </p>
                </div>
                <Users className="w-8 h-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Approved</p>
                  <p className="text-2xl font-bold">
                    {vendor.approved ? "Yes" : "No"}
                  </p>
                </div>
                <TrendingUp
                  className={`w-8 h-8 ${
                    vendor.approved ? "text-green-500" : "text-yellow-500"
                  }`}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-destructive">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                {vendor?.location?.coordinates?.length === 2 && (
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-sm font-semibold">
                      Lat: {vendor.location.coordinates[1].toFixed(3)}, Long:{" "}
                      {vendor.location.coordinates[0].toFixed(3)}
                    </p>
                  </div>
                )}

                <MapPin className="w-8 h-8 text-destructive" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Vendor Info Card */}
        <Card>
          <CardHeader>
            <CardTitle>Vendor Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>
              <strong>Name:</strong> {vendor.name}
            </p>
            <p>
              <strong>Shop:</strong> {vendor.shopName}
            </p>
            <p>
              <strong>Email:</strong> {vendor.email}
            </p>
            <p>
              <strong>Phone:</strong> {vendor.contactNumber}
            </p>
            <p>
              <strong>Food Types:</strong>{" "}
              {vendor?.foodTypes?.join(", ") || null}
            </p>
            <p>
              <strong>Registered On:</strong>{" "}
              {vendor.createdAt
                ? new Date(vendor.createdAt).toLocaleDateString()
                : "N/A"}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
