import { styleProperty } from './DoTags.constants';
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

type TDisplay = 'block' | 'flex' | 'grid' | 'inline-block' | 'table-cell' | 'none';
type TKeyValueDisplay = { [key in TDevice]?: TDisplay };
type TKeyValueStylePropertyDisplayOverride = OverrideProps<
  TKeyValueStylePropertyPositionOverride,
  { display?: TDisplay | TKeyValueDisplay }
>;

type TFDirection = 'column' | 'row' | 'column-reverse' | 'row-reverse';
type TKeyValueFDirection = { [key in TDevice]?: TFDirection };
type TKeyValueStylePropertyFDirectionOverride = OverrideProps<
  TKeyValueStylePropertyDisplayOverride,
  { fDirection?: TFDirection | TKeyValueFDirection }
>;

type TJContent = 'start' | 'end' | 'center' | 'space-between' | 'space-around';
type TKeyValueJContent = { [key in TDevice]?: TJContent };
type TKeyValueStylePropertyJContentOverride = OverrideProps<
  TKeyValueStylePropertyFDirectionOverride,
  { jContent?: TJContent | TKeyValueJContent }
>;

type TAItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
type TKeyValueAItems = { [key in TDevice]?: TAItems };
type TKeyValueStylePropertyAItemsOverride = OverrideProps<
  TKeyValueStylePropertyJContentOverride,
  { aItems?: TAItems | TKeyValueAItems }
>;

interface IStyleProperty extends TKeyValueStylePropertyAItemsOverride {
  styles?: string | TKeyValueDevice;
  classes?: string | TKeyValueDevice;
}

type TVariant = 'none' | 'primary' | 'secondary';

type TAttr =
  | null
  | string
  | IStyleProperty
  | TKeyValueDevice
  | TPosition
  | TKeyValuePosition
  | TDisplay
  | TKeyValueDisplay
  | TFDirection
  | TKeyValueFDirection
  | TJContent
  | TKeyValueJContent
  | TAItems
  | TKeyValueAItems;

export type {
  IStyleProperty,
  TKeyValueDevice,
  TPosition,
  TKeyValuePosition,
  TDisplay,
  TKeyValueDisplay,
  TFDirection,
  TKeyValueFDirection,
  TJContent,
  TKeyValueJContent,
  TAItems,
  TKeyValueAItems,
  TAttr,
  TVariant
};
