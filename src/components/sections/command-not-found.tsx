import React from 'react';

interface CommandNotFoundProps {
  command: string;
}

const CommandNotFound: React.FC<CommandNotFoundProps> = ({ command }) => {
  return (
    <p>
      command not found: {command}. Type{' '}
      <code className="bg-primary/20 text-primary p-1 rounded-md">help</code> for a list of commands.
    </p>
  );
};

export default CommandNotFound;
