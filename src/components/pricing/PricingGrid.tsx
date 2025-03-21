
import { BarChart4, Sparkles, Shield } from 'lucide-react';
import PricingCard from './PricingCard';

interface PricingPlan {
  name: string;
  description: string;
  priceDescription: string;
  valuePoints: string[];
  features: {
    name: string;
    included: boolean;
    tooltip?: string;
  }[];
  cta: string;
  popular: boolean;
  icon: React.ElementType;
}

interface PricingGridProps {
  plans: PricingPlan[];
}

const PricingGrid = ({ plans }: PricingGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      {plans.map((plan, index) => {
        const Icon = plan.icon || BarChart4;
        
        return (
          <PricingCard
            key={index}
            name={plan.name}
            description={plan.description}
            valueProposition={plan.priceDescription}
            valuePoints={plan.valuePoints}
            features={plan.features}
            cta={plan.cta}
            popular={plan.popular}
            index={index}
            icon={Icon}
          />
        );
      })}
    </div>
  );
};

export default PricingGrid;
