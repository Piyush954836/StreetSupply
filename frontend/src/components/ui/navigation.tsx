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
    <div className="flex items-center space-x-4">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        StreetSupply
      </h1>
      <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base">
        Features
      </a>
    </div>

    <div className="flex items-center space-x-3">
      <Button variant="outline" onClick={() => window.location.href = '/vendor/dashboard'}>
        Vendor Portal
      </Button>
      <Button variant="outline" onClick={() => window.location.href = '/admin'}>
        Admin Portal
      </Button>
    </div>
  </nav>
</Card>

  );
};