import type { IBlock } from '@/components/modifiers/TagsMo/TagsMo.type';

const formData: IBlock = {
  tags: 'article',
  display: 'flex',
  fDirection: 'column',
  aItems: 'center',
  margin: {
    d: '0 auto'
  },
  width: {
    d: '1200px',
    t: '100%',
    m: '100%'
  },
  height: {
    d: '1466px',
    t: '2446px',
    m: '2232px'
  }
};

const formFormData: IBlock = {
  tags: 'form',
  display: 'flex',
  position: 'relative',
  width: '100%',
  height: '100%'
};

export { formData, formFormData };
