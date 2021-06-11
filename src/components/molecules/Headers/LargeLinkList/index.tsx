import React from 'react';
import { LargeHeaderLink } from '../../../types';

type Props = {
  largeLinks: LargeHeaderLink[];
};

export const LargeLinkList: React.FC<Props> = (props) => {
  return (
    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
      {props.largeLinks.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
        >
          <item.icon
            className="flex-shrink-0 h-6 w-6 text-indigo-600"
            aria-hidden="true"
          />
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900">{item.name}</p>
            <p className="mt-1 text-sm text-gray-500">{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};
