import React from 'react';
import { experience } from '@/lib/portfolio-data';
import { Briefcase } from 'lucide-react';
import { Timeline } from '@/components/ui/timeline';

const Experience = () => {
  if (!experience || experience.length === 0) {
    return null;
  }

  const timelineItems = experience.map(exp => ({
    title: exp.role,
    subtitle: exp.company,
    date: exp.duration,
    details: exp.responsibilities,
  }));

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Briefcase className="w-5 h-5 text-primary" />
        <h2 className="font-headline text-lg text-primary">Experience</h2>
      </div>
      <Timeline items={timelineItems} />
    </div>
  );
};

export default Experience;
