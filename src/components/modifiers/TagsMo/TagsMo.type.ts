import type { TDevice } from '@/services/useDevice';
import type { IStyleProperty, TVariant } from './attribute/DoTags.type';
import { RouteName, RouteTitle } from '@/router/router.constants';
import { Icon } from '@/assets/icons/';

type OverrideProps<TypeTitle, T> = {
  [key in keyof TypeTitle]: key extends keyof T ? T[key] : TypeTitle[key];
};

//////////////////////////////////////////////////////
type TKeyValueDevice = { [key in TDevice]?: string };

//////////////////////////////////////////////////////
interface IBlock extends IStyleProperty {
  tags: 'header' | 'footer' | 'article' | 'section' | 'div' | 'nav' | 'p' | 'form';
  title?: string;
}

//////////////////////////////////////////////////////
interface IImg extends IStyleProperty {
  tags: 'img';
  src: string | TKeyValueDevice;
  alt: string | TKeyValueDevice;
}

//////////////////////////////////////////////////////
interface ILink extends IStyleProperty {
  to: `${RouteName}`;
  title?: `${RouteTitle}`;
  aClass?: string;
  eaClass?: string;
  variant: TVariant;
}

//////////////////////////////////////////////////////
type TStylePropertyIcon = Omit<IStyleProperty, 'fDirection' | 'jContent' | 'aItems'>;
type TDisplay = 'block' | 'none';
type TKeyValueDisplay = { [key in TDevice]?: TDisplay };
type TKeyValueStylePropertyDisplayOverride = OverrideProps<
  TStylePropertyIcon,
  { display?: TDisplay | TKeyValueDisplay }
>;

interface IIcon extends TKeyValueStylePropertyDisplayOverride {
  tags: 'icon';
  title: `${Icon}`;
}

//////////////////////////////////////////////////////
interface IH extends IStyleProperty {
  tags: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  title?: string;
}
type TH = { [key in `${RouteName}`]?: IH };

//////////////////////////////////////////////////////
interface IButton extends IStyleProperty {
  tags: 'button';
  title?: string;
  void: string | { [key: string]: any };
  variant: TVariant;
  icons?: IIcon | IIcon[];
}

//////////////////////////////////////////////////////
interface ISubBlockImg extends IStyleProperty {
  tags: 'subblock';
  subblock: IImg | IImg[];
}

//////////////////////////////////////////////////////
interface ISubBlockHgroup extends IStyleProperty {
  tags: 'hgroup';
  subblock:
    | OverrideProps<IBlock, { tags: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' }>
    | OverrideProps<IBlock, { tags: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' }>[];
}

export type { IBlock, IImg, ILink, IIcon, IH, TH, IButton, ISubBlockImg, ISubBlockHgroup };
