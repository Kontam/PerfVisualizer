import { SupportIcon } from '@heroicons/react/outline';
import { HeaderLink, LargeHeaderLink } from '../../types';

export function useHeaderMenu() {
  const resources: LargeHeaderLink[] = [
    {
      id: 'test',
      name: 'Help Center',
      description:
        'Get all of your questions answered in our forums or contact support.',
      href: '#',
      icon: SupportIcon,
    },
  ];
  const recentPosts: HeaderLink[] = [
    { id: '1', name: 'Boost your conversion rate', href: '#' },
    {
      id: '2',
      name: 'How to use search engine optimization to drive traffic to your site',
      href: '#',
    },
    { id: '3', name: 'Improve your customer experience', href: '#' },
  ];

  return { resources, recentPosts };
}
