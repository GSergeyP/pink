import type { TSubBlock } from '@/components/modifiers/FormMo/FormMo.type';

const inputData: TSubBlock[] = [
  {
    display: 'flex',
    fDirection: 'column',
    position: 'absolute',
    top: {
      d: '85px',
      t: '72px',
      m: '6px'
    },
    left: {
      d: '130px',
      t: '50%',
      m: '50%'
    },
    width: {
      t: '95%'
    },
    height: {
      d: '300px',
      t: '250px'
    },
    styles: {
      d: 'order: 1;',
      t: 'order: 1; transform: translateX(-50%);',
      m: 'transform: translateX(-50%);'
    },
    subblock: [
      {
        /////////////////////////////////////////// ФИО
        type: 'text',
        variant: 'primary',
        name: 'usurname',
        id: 'usurname',
        mTop: {
          m: '5px'
        },
        mLeft: {
          d: '20px',
          t: '20px',
          m: '-20px'
        },
        width: {
          d: '338px',
          t: '523px',
          m: '276px'
        },
        height: '61px',
        label: {
          title: 'ФАМИЛИЯ:',
          display: 'flex',
          fDirection: {
            m: 'column'
          },
          aItems: {
            d: 'center',
            t: 'center'
          },
          margin: {
            t: '0 auto',
            m: '0 auto 0 20px'
          },
          classes: {
            d: 'label-d',
            t: 'label-t',
            m: 'h6-m'
          },
          styles: 'color: var(--purple-red);'
        },
        placeholder: 'Укажите фамилию *',
        styles: 'order: 1;'
      },
      {
        type: 'text',
        variant: 'primary',
        name: 'name',
        id: 'name',
        mTop: {
          m: '5px'
        },
        mLeft: {
          d: '20px',
          t: '20px',
          m: '-20px'
        },
        width: {
          d: '378px',
          t: '563px',
          m: '276px'
        },
        height: '61px',
        label: {
          title: 'ИМЯ:',
          display: 'flex',
          fDirection: {
            m: 'column'
          },
          aItems: {
            d: 'center',
            t: 'center'
          },
          margin: {
            d: '56px 0 0 0',
            t: '56px auto 0 auto',
            m: '19px auto 0 20px'
          },
          classes: {
            d: 'label-d',
            t: 'label-t',
            m: 'h6-m'
          },
          styles: 'color: var(--purple-red);'
        },
        placeholder: 'Введите ваше имя *',
        styles: 'order: 1;'
      },
      {
        type: 'text',
        name: 'patronymic',
        variant: 'primary',
        id: 'patronymic',
        mTop: {
          m: '5px'
        },
        mLeft: {
          d: '20px',
          t: '20px',
          m: '-20px'
        },
        width: {
          d: '338px',
          t: '523px',
          m: '276px'
        },
        height: '61px',
        label: {
          title: 'ОТЧЕСТВО:',
          display: 'flex',
          fDirection: {
            m: 'column'
          },
          aItems: {
            d: 'center',
            t: 'center'
          },
          margin: {
            d: '56px 0 0 0',
            t: '56px auto 0 auto',
            m: '19px auto 0 20px'
          },
          classes: {
            d: 'label-d',
            t: 'label-t',
            m: 'h6-m'
          },
          styles: 'color: var(--purple-red);'
        },
        placeholder: 'Ну и отчество тоже',
        styles: 'order: 1;'
      }
    ]
  },
  {
    /////////////////////////////////////////// checkbox
    legend: {
      title: 'ВАШИ БЕЗБАШЕННЫЕ ДОСТИЖЕНИЯ В ПУТЕШЕСТВИИ',
      display: 'flex',
      position: {
        m: 'absolute'
      },
      top: {
        m: '35px'
      },
      left: {
        m: '50%'
      },
      margin: {
        d: '0 auto',
        t: '0 auto'
      },
      width: {
        m: '218px'
      },
      classes: {
        d: 'label-d',
        t: 'label-t',
        m: 'h6-m'
      },
      styles: {
        d: 'color: var(--purple-red);',
        t: 'color: var(--purple-red);',
        m: 'transform: translateX(-50%); color: var(--purple-red); text-align: center;'
      }
    },
    position: 'absolute',
    top: {
      d: '656px',
      t: '1158px',
      m: '375px'
    },
    left: '50%',
    display: 'flex',
    fDirection: {
      d: 'row',
      t: 'column',
      m: 'column'
    },
    jContent: {
      d: 'space-around'
    },
    width: {
      d: '938px',
      t: '618px',
      m: '320px'
    },
    height: {
      d: '246px',
      t: '566px',
      m: '604px'
    },
    styles: {
      d: 'order: 5; transform: translateX(-50%); border: 2px solid var(--platinum); border-radius: 1px; flex-wrap: wrap;',
      t: 'order: 5; transform: translateX(-50%); border: 2px solid var(--platinum); border-radius: 1px;',
      m: 'transform: translateX(-50%); border: none; background-color: var(--smoky-white)'
    },
    fieldset: [
      {
        type: 'checkbox',
        variant: 'primary',
        name: 'checkbox',
        id: 'checkbox1',
        label: {
          title: 'Сделал селфи с акулой',
          position: {
            m: 'relative'
          },
          top: {
            m: '85px'
          },
          margin: {
            t: '38px auto 0 auto'
          },
          width: {
            d: '100%',
            t: '81%',
            m: '100%'
          },
          classes: {
            d: 'h6-d container-checkbox-primary',
            t: 'h6-t container-checkbox-primary',
            m: 'label-m container-checkbox-primary'
          },
          styles: {
            d: 'flex-basis: 26%;'
          }
        },
        value: 'checkbox1'
      },
      {
        type: 'checkbox',
        variant: 'primary',
        name: 'checkbox',
        id: 'checkbox2',
        label: {
          title: 'Обгорел на пляже',
          position: {
            m: 'relative'
          },
          top: {
            m: '105px'
          },
          margin: {
            t: '50px auto 0 auto'
          },
          width: {
            d: '100%',
            t: '81%'
          },
          classes: {
            d: 'h6-d container-checkbox-primary',
            t: 'h6-t container-checkbox-primary',
            m: 'label-m container-checkbox-primary'
          },
          styles: {
            d: 'flex-basis: 26%;'
          }
        },
        value: 'checkbox2'
      },
      {
        type: 'checkbox',
        variant: 'primary',
        name: 'checkbox',
        id: 'checkbox3',
        label: {
          title: 'Видел Чака Норриса',
          position: {
            m: 'relative'
          },
          top: {
            m: '125px'
          },
          margin: {
            t: '50px auto 0 auto'
          },
          width: {
            d: '100%',
            t: '81%'
          },
          classes: {
            d: 'h6-d container-checkbox-primary',
            t: 'h6-t container-checkbox-primary',
            m: 'label-m container-checkbox-primary'
          },
          styles: {
            d: 'flex-basis: 26%;'
          }
        },
        value: 'checkbox3'
      },
      {
        type: 'checkbox',
        variant: 'primary',
        name: 'checkbox',
        id: 'checkbox4',
        label: {
          title: 'Накупил сувениров',
          position: {
            m: 'relative'
          },
          top: {
            m: '145px'
          },
          margin: {
            t: '50px auto 0 auto'
          },
          width: {
            d: '100%',
            t: '81%'
          },
          classes: {
            d: 'h6-d container-checkbox-primary',
            t: 'h6-t container-checkbox-primary',
            m: 'label-m container-checkbox-primary'
          },
          styles: {
            d: 'flex-basis: 26%;'
          }
        },
        value: 'checkbox4'
      },
      {
        type: 'checkbox',
        variant: 'primary',
        name: 'checkbox',
        id: 'checkbox5',
        label: {
          title: 'Удержал башню',
          position: {
            m: 'relative'
          },
          top: {
            m: '165px'
          },
          margin: {
            t: '50px auto 0 auto'
          },
          width: {
            d: '100%',
            t: '81%'
          },
          classes: {
            d: 'h6-d container-checkbox-primary',
            t: 'h6-t container-checkbox-primary',
            m: 'label-m container-checkbox-primary'
          },
          styles: {
            d: 'flex-basis: 26%;'
          }
        },
        value: 'checkbox5'
      },
      {
        type: 'checkbox',
        variant: 'primary',
        name: 'checkbox',
        id: 'checkbox6',
        label: {
          title: 'Разгромил отель',
          position: {
            m: 'relative'
          },
          top: {
            m: '185px'
          },
          margin: {
            t: '50px auto 0 auto'
          },
          width: {
            d: '100%',
            t: '81%'
          },
          classes: {
            d: 'h6-d container-checkbox-primary',
            t: 'h6-t container-checkbox-primary',
            m: 'label-m container-checkbox-primary'
          },
          styles: {
            d: 'flex-basis: 26%;'
          }
        },
        value: 'checkbox6'
      }
    ]
  },
  {
    /////////////////////////////////////////// контакты
    legend: {
      title: 'КОНТАКТНАЯ ИНФОРМАЦИЯ',
      display: {
        m: 'none'
      },
      margin: '0 auto',
      padding: '0 25px',
      classes: {
        d: 'label-d',
        t: 'label-t'
      },
      styles: 'color: var(--purple-red)'
    },
    position: 'absolute',
    top: {
      d: '430px',
      t: '782px',
      m: '1011px'
    },
    left: '50%',
    display: 'flex',
    fDirection: {
      d: 'row',
      t: 'column',
      m: 'column'
    },
    jContent: {
      d: 'space-around',
      t: 'space-around'
    },
    aItems: {
      t: 'center'
    },
    width: {
      d: '938px',
      t: '618px'
    },
    height: {
      d: '174px',
      t: '324px'
    },
    styles: {
      d: 'order: 4; transform: translateX(-50%); border: 2px solid var(--platinum); border-radius: 1px;',
      t: 'order: 4; transform: translateX(-50%); border: 2px solid var(--platinum); border-radius: 1px;',
      m: 'transform: translateX(-50%); border: none;'
    },
    fieldset: [
      {
        type: 'tel',
        variant: 'primary',
        name: 'tel',
        id: 'tel',
        mTop: {
          m: '7px'
        },
        mLeft: {
          m: '-20px'
        },
        width: {
          d: '371px',
          t: '496px',
          m: '276px'
        },
        height: {
          d: '59px',
          t: '62px',
          m: '61px'
        },
        styles: {
          t: 'order: 2'
        },
        label: {
          title: 'НОМЕР ТЕЛЕФОНА',
          display: 'flex',
          fDirection: 'column-reverse',
          margin: {
            d: '0 0 40px 0',
            t: '6px 0 0 0',
            m: '0 auto 0 20px'
          },
          classes: {
            d: 'label-d',
            t: 'label-t',
            m: 'h6-m'
          },
          styles: 'color: var(--purple-red);'
        },
        placeholder: 'Номер, пожалуйста'
      },
      {
        type: 'email',
        variant: 'primary',
        name: 'email',
        id: 'email',
        mTop: {
          m: '7px'
        },
        mLeft: {
          m: '-20px'
        },
        width: {
          d: '371px',
          t: '496px',
          m: '276px'
        },
        height: {
          d: '59px',
          t: '62px',
          m: '61px'
        },
        styles: {
          t: 'order: 2'
        },
        label: {
          title: 'АДРЕС ПОЧТЫ',
          display: 'flex',
          fDirection: 'column-reverse',
          margin: {
            d: '0 0 40px 0',
            t: '0 0 14px 0',
            m: '18px auto 0 20px'
          },
          classes: {
            d: 'label-d',
            t: 'label-t',
            m: 'h6-m'
          },
          styles: 'color: var(--purple-red);'
        },
        placeholder: 'Введите почту *'
      }
    ]
  },
  {
    /////////////////////////////////////////// radio
    legend: {
      title: 'С КАКИМ ПРИЛОЖЕНИЕМ ПУТЕШЕСТВОВАЛИ?',
      position: {
        m: 'absolute'
      },
      top: {
        m: '35px'
      },
      left: {
        m: '50%'
      },
      margin: {
        d: '0 auto',
        t: '0 auto'
      },
      padding: {
        d: '0 25px',
        t: '0 25px'
      },
      width: {
        m: '178px'
      },
      classes: {
        d: 'label-d',
        t: 'label-t',
        m: 'h6-m'
      },
      styles: {
        d: 'color: var(--purple-red)',
        t: 'color: var(--purple-red)',
        m: 'transform: translateX(-50%); color: var(--purple-red); text-align: center;'
      }
    },
    display: 'flex',
    fDirection: 'column',
    position: 'absolute',
    top: {
      d: '64px',
      t: '416px',
      m: '1267px'
    },
    left: {
      t: '50%',
      m: '50%'
    },
    right: {
      d: '130px'
    },
    width: {
      d: '435px',
      t: '618px',
      m: '320px'
    },
    height: {
      d: '317px',
      t: '314px',
      m: '340px'
    },
    styles: {
      d: 'order: 2; border: 2px solid var(--platinum); border-radius: 1px;',
      t: 'order: 2; transform: translateX(-50%); border: 2px solid var(--platinum); border-radius: 1px;',
      m: 'transform: translateX(-50%); border: none; background-color: var(--smoky-white)'
    },
    fieldset: [
      {
        type: 'radio',
        variant: 'primary',
        name: 'radio',
        id: 'IOS',
        label: {
          title: 'Pink для iOS',
          position: {
            m: 'relative'
          },
          top: {
            m: '113px'
          },
          mTop: {
            d: '40px',
            t: '40px'
          },
          classes: {
            d: 'h6-d container-radio-primary',
            t: 'h6-t container-radio-primary',
            m: 'label-m container-radio-primary'
          }
        },
        value: 'IOS'
      },
      {
        type: 'radio',
        variant: 'primary',
        name: 'radio',
        id: 'Android',
        label: {
          title: 'Pink на Android',
          position: {
            m: 'relative'
          },
          top: {
            m: '113px'
          },
          width: '100%',
          classes: {
            d: 'h6-d container-radio-primary',
            t: 'h6-t container-radio-primary',
            m: 'label-m container-radio-primary'
          }
        },
        value: 'Android'
      },
      {
        type: 'radio',
        variant: 'primary',
        name: 'radio',
        id: 'Windows',
        label: {
          title: 'Pink на Windows',
          position: {
            m: 'relative'
          },
          top: {
            m: '113px'
          },
          width: '100%',
          classes: {
            d: 'h6-d container-radio-primary',
            t: 'h6-t container-radio-primary',
            m: 'label-m container-radio-primary'
          }
        },
        value: 'Windows'
      }
    ],
    classes: {
      d: 'label-d'
    }
  },
  {
    /////////////////////////////////////////// textarea
    legend: {
      title: 'ОПИШИТЕ СВОИ ЭМОЦИИ',
      margin: '0 auto',
      padding: {
        d: '0 25px',
        t: '0 25px'
      },
      width: {
        m: '184px'
      },
      classes: {
        d: 'label-d',
        t: 'label-t',
        m: 'h6-m'
      },
      styles: 'color: var(--purple-red);'
    },
    display: 'flex',
    jContent: 'center',
    aItems: 'center',
    position: 'absolute',
    top: {
      d: '954px',
      t: '1776px',
      m: '1638px'
    },
    left: '50%',
    width: {
      d: '938px',
      t: '618px'
    },
    height: {
      d: '230px',
      t: '308px'
    },
    styles: {
      d: 'order: 6; transform: translateX(-50%); border: 2px solid var(--platinum); border-radius: 1px;',
      t: 'order: 6; transform: translateX(-50%); border: 2px solid var(--platinum); border-radius: 1px;',
      m: 'transform: translateX(-50%); border: none;'
    },
    fieldset: {
      type: 'textarea',
      variant: 'primary',
      name: 'textarea',
      id: 'textarea',
      placeholder: 'Можно прям в красках, не стесняясь в выражениях',
      mTop: {
        m: '10px'
      },
      mBottom: {
        t: '16px'
      },
      width: {
        d: '816px',
        t: '81%',
        m: '278px'
      },
      height: {
        d: '124px',
        t: '195px',
        m: '201px'
      },
      styles: 'resize: none;'
    }
  },
  {
    /////////////////////////////////////////// кнопка
    title: '* — ОБЯЗАТЕЛЬНЫЕ ПОЛЯ',
    display: 'flex',
    fDirection: {
      d: 'row',
      t: 'row',
      m: 'column'
    },
    jContent: {
      d: 'space-between',
      t: 'space-between',
      m: 'center'
    },
    aItems: 'center',
    position: 'absolute',
    top: {
      d: '1250px',
      t: '2149px',
      m: '1930px'
    },
    left: '50%',
    width: {
      d: '938px',
      t: '618px',
      m: '320px'
    },
    styles: {
      d: 'order: 7; transform: translateX(-50%);',
      t: 'order: 7; transform: translateX(-50%);',
      m: 'transform: translateX(-50%);'
    },
    classes: {
      d: 'label-d',
      t: 'label-d',
      m: 'h6-m'
    },
    subblock: {
      type: 'submit',
      variant: 'primary',
      value: 'ОТПРАВИТЬ ФОРМУ',
      mBottom: {
        m: '32px'
      },
      width: {
        d: '300px',
        t: '298px',
        m: '278px'
      },
      height: '63px',
      classes: {
        d: 'submit-d',
        t: 'submit-t',
        m: 'submit-m'
      }
    }
  }
];

export { inputData };
