import React from 'react';
import { name } from '@/lib/portfolio-data';

const TerminalHeader = () => {
  return (
    <div className="bg-transparent rounded-t-lg p-1 text-center border-b border-border/50 sticky top-0 z-10">
      <div className="text-center text-xs text-muted-foreground tracking-widest">
        {name.toLowerCase()} - bash - 98x34
      </div>
    </div>
  );
};

export default TerminalHeader;
