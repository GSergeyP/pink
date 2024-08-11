import type { IBlock } from '@/components/modifiers/TagsMo/TagsMo.type';

const introData: IBlock = {
  tags: 'article',
  position: 'relative',
  display: 'flex',
  jContent: 'space-around',
  aItems: 'end',
  margin: {
    d: '0 auto'
  },
  width: {
    d: '1200px',
    t: '100%',
    m: '100%'
  }
};
const introMobileData: IBlock = {
  tags: 'article',
  width: {
    m: '100%'
  },
  height: {
    m: '271px'
  },
  styles: {
    m: 'background-color: var(--sapphire-blue); text-align: center;'
  }
};

export { introData, introMobileData };
