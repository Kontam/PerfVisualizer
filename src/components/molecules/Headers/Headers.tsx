// From tailwind UI https://tailwindui.com/components/marketing/elements/headers
/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import { Popover } from '@headlessui/react';
import { useHeaderMenu } from './useHeaderMenu';
import PopoverItem from './PopoverItem';
import { Pages } from '../../../redux/types';

export type Props = {
  pages: Pages;
};

const HeadersBase: React.FC<Props> = (props) => {
  const { largePageLinks, pageLinks } = useHeaderMenu(props);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div>
          <Popover.Group as="nav" className="flex space-x-10">
            <PopoverItem
              openerLabel="Pages"
              links={pageLinks}
              largeLinks={largePageLinks}
            />
          </Popover.Group>
        </div>
      </div>
    </>
  );
};

export default HeadersBase;
