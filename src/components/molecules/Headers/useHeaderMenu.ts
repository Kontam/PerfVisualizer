import { selectPage } from '../../../redux/modules/currentChart';
import { HeaderLink, LargeHeaderLink } from '../../types';
import { Props } from './Headers';

export function useHeaderMenu(props: Props) {
  const pageLinks: HeaderLink[] = props.pages.map((page) => ({
    id: page.dataId,
    name: page.name,
    handleClick: (e) => {
      e.preventDefault();
      props.dispatch(selectPage(page.name));
    },
  }));
  const largePageLinks: LargeHeaderLink[] = [];

  return { largePageLinks, pageLinks };
}
