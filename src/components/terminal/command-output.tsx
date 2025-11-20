import React from 'react';
import { name } from '@/lib/portfolio-data';
import { TypingEffect } from '../ui/typing-effect';

interface CommandOutputProps {
  command: string;
  children: React.ReactNode;
  showCommand?: boolean;
}

const CommandOutput: React.FC<CommandOutputProps> = ({ command, children, showCommand = true }) => {
  const username = name.split('.')[0].toLowerCase();
  const prompt = (
    <span className="mr-2">
      <span style={{ color: '#8be9fd' }}>{username}</span>
      <span style={{ color: '#f8f8f2' }}>@</span>
      <span style={{ color: '#ff79c6' }}>dev</span>
      <span style={{ color: '#f8f8f2' }}>:</span>
      <span style={{ color: '#50fa7b' }}>~$</span>
    </span>
  );

  return (
    <div>
      {showCommand && (
        <div className="flex items-center">
          {prompt}
          <span className="ml-2">{command}</span>
        </div>
      )}
      <div className="mt-1">
        {React.isValidElement(children) && (children.type === TypingEffect || children.type.displayName?.includes('TypingEffect')) ? (
          children
        ) : (
          <TypingEffect text={children as string} speed={10} />
        )}
      </div>
    </div>
  );
};

export default CommandOutput;
