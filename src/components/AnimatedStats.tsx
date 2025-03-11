
import React, { useState, useEffect } from 'react';
import useInView from '../hooks/useInView';

interface Stat {
  value: number;
  label: string;
  unit?: string;
}

interface AnimatedStatsProps {
  stats: Stat[];
  duration?: number;
}

const AnimatedStats: React.FC<AnimatedStatsProps> = ({ 
  stats, 
  duration = 2000 
}) => {
  const [ref, isInView] = useInView();
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    if (!isInView) return;

    const intervals = stats.map((stat, index) => {
      // Steps to take for animation
      const steps = 30;
      const step = stat.value / steps;
      const stepTime = duration / steps;
      let currentCount = 0;

      return setInterval(() => {
        if (currentCount >= stat.value) {
          currentCount = stat.value;
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = currentCount;
            return newCounts;
          });
          clearInterval(intervals[index]);
          return;
        }

        currentCount += step;
        if (currentCount > stat.value) currentCount = stat.value;
        
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = Math.round(currentCount);
          return newCounts;
        });
      }, stepTime);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isInView, stats, duration]);

  return (
    <div 
      ref={ref} 
      className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto py-6"
    >
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <p className="text-3xl md:text-4xl font-bold mb-2 text-white flex items-center justify-center">
            <span className="mr-1">{counts[index]}</span>
            {stat.unit && <span className="text-secondary">{stat.unit}</span>}
          </p>
          <p className="text-white/80 text-sm uppercase tracking-wider">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default AnimatedStats;
