
import React from 'react';
import { aboutMe, name } from '@/lib/portfolio-data';
import { User } from 'lucide-react';

const Neofetch = () => {
  const username = name.split('.')[0].toLowerCase();
  

  return (
    <div className="flex flex-col gap-4 font-mono text-sm">
      <div className="flex-grow">
        <p className="font-bold text-primary"><User className="inline-block mr-2" size={16}/>{username}@dev</p>
        <hr className="border-muted my-1" />
        <p><span className="w-16 inline-block text-primary">OS:</span> Arch Linux x86_64</p>
        <p><span className="w-16 inline-block text-primary">Host:</span> VirtualBox 1.2</p>
        <p><span className="w-16 inline-block text-primary">Kernel:</span> 6.11.5-arch1-1</p>
        <p><span className="w-16 inline-block text-primary">Uptime:</span> 42 days, 3 hours</p>
        <p><span className="w-16 inline-block text-primary">Shell:</span> bash 5.1.16</p>
        <p><span className="w-16 inline-block text-primary">CPU:</span> AMD Ryzen 9 5900X (24)</p>
        <p><span className="w-16 inline-block text-primary">Memory:</span> 32018MiB</p>
        <br/>
        <p className="text-muted-foreground whitespace-pre-wrap">{aboutMe}</p>
      </div>
    </div>
  );
};


const About = () => {
  return <Neofetch />;
};

export default About;
