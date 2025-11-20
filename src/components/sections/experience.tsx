import React from 'react';
import { experience } from '@/lib/portfolio-data';

const Experience = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-primary">[work]</span>
        <h2 className="font-headline text-lg text-primary">Experience</h2>
      </div>
      <div className="font-mono text-sm">
        {experience.map((exp, index) => (
          <div key={index} className="mb-4 pl-2">
            <p><span className="text-primary">{exp.role}</span> @ {exp.company}</p>
            <p className="pl-4"><span className="text-muted-foreground">{exp.duration}</span></p>
            <ul className="pl-4">
            {exp.responsibilities.map((detail, i) => (
              <li key={i} className="flex">
                <span className="mr-2 text-primary">-</span>
                <span>{detail}</span>
              </li>
            ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
