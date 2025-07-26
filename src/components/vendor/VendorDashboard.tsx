import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ShoppingCart, Package, Users, Bell, TrendingUp, Clock } from "lucide-react";

export const VendorDashboard = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Vendor Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Construction Co. Ltd</p>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Place New Order
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Orders</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <Package className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Group Orders</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <Users className="w-8 h-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Savings</p>
                  <p className="text-2xl font-bold">₹2,45,000</p>
                </div>
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-destructive">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending Actions</p>
                  <p className="text-2xl font-bold">2</p>
                </div>
                <Bell className="w-8 h-8 text-destructive" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Group Orders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Active Group Orders
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-lg p-4 bg-gradient-to-r from-primary/5 to-secondary/5">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold">Steel Rods - 12mm TMT</h3>
                  <p className="text-sm text-muted-foreground">Quantity: 500 kg</p>
                </div>
                <Badge variant="secondary">Grouping Active</Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Group Progress (4/8 vendors)</span>
                  <span>Discount: 12%</span>
                </div>
                <Progress value={50} className="h-2" />
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    2h 45m remaining
                  </span>
                  <Button size="sm" variant="outline">Opt Out</Button>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold">Cement - OPC 53 Grade</h3>
                  <p className="text-sm text-muted-foreground">Quantity: 200 bags</p>
                </div>
                <Badge variant="default">Group Locked</Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Final Group (8/8 vendors)</span>
                  <span>Final Discount: 18%</span>
                </div>
                <Progress value={100} className="h-2" />
                <p className="text-sm text-muted-foreground">Expected delivery: Tomorrow</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Order #SS00{i + 120}</h4>
                    <p className="text-sm text-muted-foreground">Bricks, Sand, Cement Mix</p>
                  </div>
                  <div className="text-right">
                    <Badge variant={i === 1 ? "default" : i === 2 ? "secondary" : "outline"}>
                      {i === 1 ? "Delivered" : i === 2 ? "In Transit" : "Processing"}
                    </Badge>
                    <p className="text-sm text-muted-foreground mt-1">₹{(45000 + i * 5000).toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};