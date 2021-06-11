import { HeaderLink, LargeHeaderLink } from '../../types';
import { Props } from './Headers';

export function useHeaderMenu(props: Props) {
  const pageLinks: HeaderLink[] = props.pages.map((page) => ({
    id: page.dataId,
    name: page.name,
    href: `Chart?page=${page.name}`,
  }));
  const largePageLinks: LargeHeaderLink[] = [];

  return { largePageLinks, pageLinks };
}
