import React from 'react';
import { contactDetails } from '@/lib/portfolio-data';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Code } from 'lucide-react';

const Socials = () => {
  const { social_links } = contactDetails;
  return (
    <div>
        <p className="mb-2">You can find me on the following platforms:</p>
        <div className="flex flex-wrap gap-2">
        <Button asChild variant="outline" size="sm">
            <a href={social_links.github} target="_blank" rel="noopener noreferrer">
            <Github /> GitHub
            </a>
        </Button>
        <Button asChild variant="outline" size="sm">
            <a href={social_links.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin /> LinkedIn
            </a>
        </Button>
        <Button asChild variant="outline" size="sm">
            <a href={social_links.leetcode} target="_blank" rel="noopener noreferrer">
            <Code /> LeetCode
            </a>
        </Button>
        </div>
    </div>
  );
};

export default Socials;
