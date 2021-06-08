// From tailwind UI https://tailwindui.com/components/marketing/elements/headers
/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react';
import { Popover } from '@headlessui/react';
import { useHeaderMenu } from './useHeaderMenu';
import PopoverItem from './PopoverItem';

export default function Headers() {
  const { resources, recentPosts } = useHeaderMenu();

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
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Docs
            </a>
            <PopoverItem
              openerLabel="Pages"
              links={recentPosts}
              largeLinks={resources}
            />
          </Popover.Group>
        </div>
      </div>
    </>
  );
}
