import type { IBlock } from '@/components/modifiers/TagsMo/TagsMo.type';

const headerData: IBlock = {
  tags: 'header',
  position: 'sticky',
  top: '0',
  margin: {
    d: '0 auto'
  },
  width: {
    d: '1200px',
    t: '100%',
    m: '100%'
  },
  height: {
    d: '110px',
    t: '110px',
    m: '66px'
  },
  display: 'flex',
  fDirection: 'row',
  jContent: 'space-between',
  aItems: 'center',
  styles: 'background-color: var(--granite); z-index: 10;'
};

export { headerData };
