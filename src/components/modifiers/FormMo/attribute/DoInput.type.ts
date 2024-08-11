import { styleProperty } from './DoInput.constants';
import type { TDevice } from '@/services/useDevice/';

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
type OverrideProps<TypeTitle, T> = {
  [key in keyof TypeTitle]: key extends keyof T ? T[key] : TypeTitle[key];
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

type TKeyValueDevice = { [key in TDevice]?: string };

type TKeyStyleProperty = `${keyof typeof styleProperty}`;
type TKeyValueStyleProperty = { [key in TKeyStyleProperty]?: string | TKeyValueDevice };

type TPosition = 'relative' | 'absolute' | 'static' | 'sticky' | 'fixed';
type TKeyValuePosition = { [key in TDevice]?: TPosition };
type TKeyValueStylePropertyPositionOverride = OverrideProps<
  TKeyValueStyleProperty,
  { position?: TPosition | TKeyValuePosition }
>;

interface IStyleProperty extends TKeyValueStylePropertyPositionOverride {
  styles?: string | TKeyValueDevice;
  classes?: string | TKeyValueDevice;
}

type TVariant = 'none' | 'primary' | 'secondary';

type TAttr =
  | null
  | string
  | number
  | boolean
  | IStyleProperty
  | TKeyValueDevice
  | TPosition
  | TKeyValuePosition;

export type { IStyleProperty, TKeyValueDevice, TPosition, TKeyValuePosition, TAttr, TVariant };
