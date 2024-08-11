import type { ISubBlockHgroup } from '@/components/modifiers/TagsMo/TagsMo.type';

const informData: ISubBlockHgroup[] = [
  {
    tags: 'hgroup',
    width: {
      d: '252px',
      t: '310px'
    },
    subblock: [
      {
        tags: 'h3',
        title: 'Поднимает настроение',
        classes: {
          d: 'h3-d',
          t: 'h3-t',
          m: 'h3-m'
        }
      },
      {
        tags: 'p',
        title:
          'Приложение позволит вам победить осеннюю хандру и депрессию буквально в несколько кликов!',
        mTop: {
          d: '23px',
          t: '12px',
          m: '14px'
        },
        classes: {
          d: 'p-d',
          t: 'p-t',
          m: 'p-m'
        }
      }
    ],
    styles: {
      d: 'text-align: center;'
    }
  },
  {
    tags: 'hgroup',
    margin: {
      d: '0 70px'
    },
    width: {
      d: '252px',
      t: '310px'
    },
    subblock: [
      {
        tags: 'h3',
        title: 'Меняет мир вокруг',
        mTop: {
          t: '34px',
          m: '30px'
        },
        classes: {
          d: 'h3-d',
          t: 'h3-t',
          m: 'h3-m'
        }
      },
      {
        tags: 'p',
        title:
          'Сделайте снимок и украсьте его смайликом или текстовой подписью, чтобы усилить эффект',
        mTop: {
          d: '23px',
          t: '12px',
          m: '12px'
        },
        width: {
          d: '240px'
        },
        classes: {
          d: 'p-d',
          t: 'p-t',
          m: 'p-m'
        }
      }
    ],
    styles: {
      d: 'text-align: center;'
    }
  },
  {
    tags: 'hgroup',
    width: {
      d: '252px',
      t: '310px'
    },
    subblock: [
      {
        tags: 'h3',
        title: 'Заводит новых друзей',
        mTop: {
          t: '34px',
          m: '31px'
        },
        width: {
          d: '240px'
        },
        classes: {
          d: 'h3-d',
          t: 'h3-t',
          m: 'h3-m'
        }
      },
      {
        tags: 'p',
        title: 'Ставьте лайки, комментируйте, делитесь фотографиями с друзьями и заводите новых',
        width: {
          d: '248px'
        },
        mTop: {
          d: '23px',
          t: '12px',
          m: '12px'
        },
        classes: {
          d: 'p-d',
          t: 'p-t',
          m: 'p-m'
        }
      }
    ],
    styles: {
      d: 'text-align: center;'
    }
  }
];

export { informData };
