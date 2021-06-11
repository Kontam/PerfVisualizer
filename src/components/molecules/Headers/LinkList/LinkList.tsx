import React from 'react';
import { HeaderLink } from '../../../types';

export type Props = {
  links: HeaderLink[];
};

const LinkList: React.FC<Props> = (props) => {
  return (
    <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
      <div>
        <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
          Pages
        </h3>
        <ul className="mt-4 space-y-4">
          {props.links.map((link) => (
            <li key={link.id} className="text-base truncate">
              <a
                href={link.href}
                className="font-medium text-gray-900 hover:text-gray-700"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LinkList;
