import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

export const Navigation = ({ className }: NavigationProps) => {
  return (
    <Card className={cn("p-4 border-0 shadow-sm bg-card/80 backdrop-blur-sm", className)}>
      <nav className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            StreetSupply
          </h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How it Works
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={() => window.location.href = '/vendor'}>
            Vendor Portal
          </Button>
          <Button variant="outline" onClick={() => window.location.href = '/admin'}>
            Admin Portal
          </Button>
          <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-lg transition-all">
            Get Started
          </Button>
        </div>
      </nav>
    </Card>
  );
};