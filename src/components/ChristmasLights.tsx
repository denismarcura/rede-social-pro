import { useEffect, useState } from 'react';

const ChristmasLights = () => {
  const [activeLights, setActiveLights] = useState<number[]>([]);
  
  const colors = [
    'bg-red-500',
    'bg-green-500', 
    'bg-yellow-400',
    'bg-blue-500',
    'bg-pink-500',
    'bg-purple-500',
    'bg-orange-500',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomLights = Array.from({ length: 30 }, (_, i) => i)
        .sort(() => Math.random() - 0.5)
        .slice(0, 15 + Math.floor(Math.random() * 10));
      setActiveLights(randomLights);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 h-8 overflow-hidden pointer-events-none z-20">
      {/* Wire */}
      <div className="absolute top-3 left-0 right-0 h-1 bg-green-900" 
        style={{ 
          backgroundImage: 'linear-gradient(90deg, transparent 0%, #166534 10%, #166534 90%, transparent 100%)' 
        }} 
      />
      
      {/* Lights */}
      <div className="flex justify-between px-2">
        {Array.from({ length: 30 }).map((_, index) => {
          const color = colors[index % colors.length];
          const isActive = activeLights.includes(index);
          
          return (
            <div key={index} className="relative flex flex-col items-center">
              {/* Wire connector */}
              <div className="w-0.5 h-3 bg-green-800" />
              
              {/* Light bulb */}
              <div 
                className={`w-3 h-4 rounded-b-full ${color} transition-all duration-200 ${
                  isActive ? 'opacity-100 scale-110' : 'opacity-40 scale-100'
                }`}
                style={{
                  boxShadow: isActive ? `0 0 10px 3px currentColor, 0 0 20px 6px currentColor` : 'none',
                  filter: isActive ? 'brightness(1.3)' : 'brightness(0.6)'
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChristmasLights;
