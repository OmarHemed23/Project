import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function StatsCard({
  title,
  total,
  stat,
  rate,
  levelUp,
  levelDown,
  children,
}){
  return (
    <div className="rounded-lg border border-stroke bg-white py-6 px-7.5 shadow-md">
        <div className="flex items-start justify-start ml-4">
            <div className="h-13 w-11.5 p-2 rounded-full bg-blue-100 mr-4">
                {children}
            </div>
        </div>
        <div className="mt-4 flex items-end justify-between ml-4">
            <div>
                <h4 className="text-lg font-bold text-black dark:text-white">
                    {total}
                </h4>
                <span className="text-sm font-medium">{title}</span>
            </div>
            <span
            className={`flex items-center gap-1 text-sm font-medium mr-4 ${
                levelUp && 'text-green-700'
            } ${levelDown && 'text-red-700'} `}
            >
                {rate}
                {levelUp && <FontAwesomeIcon icon="arrow-up" className="text-green-700" />}
                {levelDown && <FontAwesomeIcon icon="arrow-down" className='text-red-700' />}
            </span>
        </div>
    </div>
  );
}
