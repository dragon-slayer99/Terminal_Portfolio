
import React from 'react';
import { education } from '@/lib/portfolio-data';
import { GraduationCap } from 'lucide-react';
import { Timeline } from '@/components/ui/timeline';

const Education = () => {
  if (!education || education.length === 0) {
    return null;
  }

  const timelineItems = education.map(edu => ({
    title: edu.institution,
    subtitle: edu.degree,
    date: edu.year,
    dateClassName: 'text-base font-bold'
  }));

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <GraduationCap className="w-5 h-5 text-primary" />
        <h2 className="font-headline text-lg text-primary">Education</h2>
      </div>
      <Timeline items={timelineItems} />
    </div>
  );
};

export default Education;
