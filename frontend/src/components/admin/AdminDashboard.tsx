import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Users, Package2, TrendingUp, Clock, CheckCircle, AlertCircle } from "lucide-react";

export const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Supplier Management Portal</p>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary">
            <Package2 className="w-4 h-4 mr-2" />
            Add Material
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Vendors</p>
                  <p className="text-2xl font-bold">247</p>
                  <p className="text-xs text-secondary">+12% from last month</p>
                </div>
                <Users className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Group Orders</p>
                  <p className="text-2xl font-bold">38</p>
                  <p className="text-xs text-secondary">15 pending grouping</p>
                </div>
                <BarChart3 className="w-8 h-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Revenue</p>
                  <p className="text-2xl font-bold">₹45.2L</p>
                  <p className="text-xs text-secondary">This month</p>
                </div>
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-destructive">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg Discount</p>
                  <p className="text-2xl font-bold">14.5%</p>
                  <p className="text-xs text-secondary">Group orders</p>
                </div>
                <Package2 className="w-8 h-8 text-destructive" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="grouping" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="grouping">Smart Grouping</TabsTrigger>
            <TabsTrigger value="orders">Order Management</TabsTrigger>
            <TabsTrigger value="vendors">Vendor Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="grouping" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Pending Group Formations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { material: "Steel TMT Bars 12mm", vendors: 5, target: 8, area: "South Mumbai", timeLeft: "1h 30m", discount: "15%" },
                  { material: "Portland Cement OPC 53", vendors: 6, target: 10, area: "Andheri West", timeLeft: "45m", discount: "12%" },
                  { material: "Red Clay Bricks", vendors: 3, target: 6, area: "Thane", timeLeft: "2h 15m", discount: "8%" }
                ].map((group, i) => (
                  <div key={i} className="border rounded-lg p-4 bg-gradient-to-r from-primary/5 to-secondary/5">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold">{group.material}</h3>
                        <p className="text-sm text-muted-foreground">Area: {group.area}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary">Grouping</Badge>
                        <p className="text-sm text-muted-foreground mt-1">
                          <Clock className="w-3 h-3 inline mr-1" />
                          {group.timeLeft}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress ({group.vendors}/{group.target} vendors)</span>
                        <span>Potential Discount: {group.discount}</span>
                      </div>
                      <Progress value={(group.vendors / group.target) * 100} className="h-2" />
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Extend Timer</Button>
                        <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">Lock Group</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Group Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { id: "GRP001", vendors: 8, material: "Cement Mix", value: "₹4,50,000", status: "Dispatched", discount: "18%" },
                    { id: "GRP002", vendors: 6, material: "Steel Bars", value: "₹6,20,000", status: "Processing", discount: "15%" },
                    { id: "GRP003", vendors: 10, material: "Bricks", value: "₹2,80,000", status: "Delivered", discount: "22%" }
                  ].map((order, i) => (
                    <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{order.id} - {order.material}</h4>
                        <p className="text-sm text-muted-foreground">{order.vendors} vendors • Discount: {order.discount}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={order.status === "Delivered" ? "default" : order.status === "Dispatched" ? "secondary" : "outline"}>
                          {order.status}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-1">{order.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vendors" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Vendor Activity Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Top Performing Vendors</h3>
                    {[
                      { name: "Metro Construction Ltd", orders: 45, savings: "₹8,50,000" },
                      { name: "City Builders Pvt", orders: 38, savings: "₹6,20,000" },
                      { name: "Prime Infrastructure", orders: 32, savings: "₹5,80,000" }
                    ].map((vendor, i) => (
                      <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{vendor.name}</h4>
                          <p className="text-sm text-muted-foreground">{vendor.orders} group orders</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-secondary">{vendor.savings}</p>
                          <p className="text-sm text-muted-foreground">Total savings</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold">Recent Registrations</h3>
                    {[
                      { name: "New Age Constructions", status: "Pending Verification" },
                      { name: "Skyline Developers", status: "Documents Review" },
                      { name: "Urban Projects Ltd", status: "Approved" }
                    ].map((vendor, i) => (
                      <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{vendor.name}</h4>
                          <p className="text-sm text-muted-foreground">Registration Status</p>
                        </div>
                        <Badge variant={vendor.status === "Approved" ? "default" : "secondary"}>
                          {vendor.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};