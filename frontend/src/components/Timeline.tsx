// src/components/Timeline.tsx
import React from 'react';

interface TimelineItem {
  time: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative border-l border-gray-200 dark:border-gray-700">
      {items.map((item, index) => (
        <div key={index} className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-white dark:border-gray-900"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {item.time}
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {item.title}
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
