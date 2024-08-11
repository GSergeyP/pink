import type { IStyleProperty as IStylePropertyInput, TVariant } from './attribute/DoInput.type';
import type { IStyleProperty as IStylePropertyTags } from '@/components/modifiers/TagsMo/attribute/DoTags.type';
import type { IBlock } from '@/components/modifiers/TagsMo/TagsMo.type';

interface IInput extends IStylePropertyInput {
  type: 'text' | 'tel' | 'url' | 'email' | 'password' | 'checkbox' | 'radio';
  variant: TVariant;
  name: string;
  label?: Omit<IBlock, 'tags'>;
  id?: string | number;
  value?: string;
  placeholder?: string;
  /*readonly?: boolean,
  disabled?: boolean,
  maxlength?: number,
  min?: number,
  max?: number,
  step?: number,
  pattern?: any */
}

interface IInputSubmit extends IStylePropertyInput {
  type: 'submit' | 'reset';
  variant: TVariant;
  value?: string;
}

interface ITextarea extends IStylePropertyInput {
  type: 'textarea';
  variant: TVariant;
  name: string;
  id?: string | number;
  placeholder?: string;
}

type TInput = IInput | IInputSubmit | ITextarea;

//////////////////////////////////////////////////////
interface ISubBlockInput extends IStylePropertyTags {
  title?: string;
  subblock: TInput | TInput[];
}

//////////////////////////////////////////////////////
interface ILegend extends IStylePropertyTags {
  title: string;
}
interface IFieldset extends IStylePropertyTags {
  legend: ILegend | ILegend[];
  fieldset: TInput | TInput[];
}
//////////////////////////////////////////////////////

type TSubBlock = IFieldset | ISubBlockInput;

export type { TInput, TSubBlock };
