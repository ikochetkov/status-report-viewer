import React from 'react';
import { Circle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip.tsx';

export function StatusIndicator({ status, comments }) {
  const getStatusColor = () => {
    switch (status) {
      case 'green':
        return 'text-[#0F9D58] fill-[#0F9D58]';  // On Track - Green
      case 'yellow':
        return 'text-[#F0AB00] fill-[#F0AB00]';  // At Risk - Yellow
      case 'red':
        return 'text-[#DA1E28] fill-[#DA1E28]';  // Critical - Red
      default:
        return 'text-muted-foreground fill-muted-foreground';
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case 'green':
        return 'On Track';
      case 'yellow':
        return 'At Risk';
      case 'red':
        return 'Critical';
      default:
        return 'Unknown';
    }
  };

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="inline-flex items-center gap-2 cursor-help">
            <Circle className={`size-4 ${getStatusColor()}`} />
            <span className="text-foreground">{getStatusLabel()}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="max-w-xs">
          <p>{comments || 'No additional comments available.'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}