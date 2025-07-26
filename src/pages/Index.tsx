import { Navigation } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingDown, Clock, CheckCircle, ArrowRight, Package, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-supply-chain.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                Smart Bulk Purchasing Platform
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Revolutionize Your{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Supply Chain
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join vendors automatically for bulk orders. Save up to 25% on raw materials 
                through intelligent grouping and real-time coordination.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all">
                  Start as Vendor
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  Supplier Portal
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">25%</p>
                  <p className="text-sm text-muted-foreground">Avg Savings</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-secondary">500+</p>
                  <p className="text-sm text-muted-foreground">Active Vendors</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">2hrs</p>
                  <p className="text-sm text-muted-foreground">Avg Group Time</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
              <img 
                src={heroImage} 
                alt="StreetSupply Platform" 
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How StreetSupply Works</h2>
            <p className="text-xl text-muted-foreground">Intelligent grouping that maximizes savings</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                  <Package className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Place Orders</h3>
                <p className="text-muted-foreground">
                  Submit your raw material requirements. Our system automatically detects similar orders in your area.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Smart Grouping</h3>
                <p className="text-muted-foreground">
                  Get grouped with nearby vendors automatically. See real-time progress and discount calculations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingDown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Save Money</h3>
                <p className="text-muted-foreground">
                  Enjoy bulk discounts automatically applied. Track your savings and get materials delivered together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Live Group Formation</h2>
            <p className="text-xl text-muted-foreground">See how vendors are grouped in real-time</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Steel TMT Bars 12mm - Andheri</h3>
                  <Badge variant="secondary">Grouping Active</Badge>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Progress (6/8 vendors joined)</span>
                    <span className="text-secondary font-medium">Current Discount: 15%</span>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full" style={{ width: '75%' }} />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      1h 24m remaining
                    </span>
                    <span>Target: 20% discount at 8 vendors</span>
                  </div>

                  <div className="pt-2">
                    <Button size="sm" className="w-full bg-gradient-to-r from-primary to-secondary">
                      Join This Group
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Portland Cement - Mumbai Central</h3>
                  <Badge className="bg-secondary text-secondary-foreground">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Group Locked
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Final Group (10/10 vendors)</span>
                    <span className="text-secondary font-medium">Final Discount: 22%</span>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-gradient-to-r from-secondary to-accent h-3 rounded-full w-full" />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-secondary font-medium">✓ Order dispatched to supplier</span>
                    <span className="text-muted-foreground">Est. delivery: Tomorrow</span>
                  </div>

                  <div className="pt-2 bg-secondary/10 rounded-lg p-3">
                    <p className="text-sm text-center">
                      <span className="font-medium text-secondary">₹45,000 saved</span> by this group
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Procurement?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join hundreds of vendors already saving thousands through smart bulk purchasing
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Shield className="w-4 h-4 mr-2" />
              Start as Vendor
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Zap className="w-4 h-4 mr-2" />
              Supplier Portal
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            StreetSupply
          </h3>
          <p className="text-muted-foreground">
            Revolutionizing supply chain through intelligent bulk purchasing
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
