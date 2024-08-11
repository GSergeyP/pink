import type { TAttr, TVariant } from './DoInput.type';

const CLASS = (classes: string | null, variant: TVariant, data: Record<string, string>): string => {
  let classesCurrent;
  if (classes && data && data.type == 'textarea' && variant != 'none')
    classesCurrent = classes + ' ' + 'textarea-' + variant;
  else if (data && data.type == 'textarea' && variant != 'none')
    classesCurrent = 'textarea-' + variant;
  else if (classes && data && data.type == 'checkbox' && variant != 'none')
    classesCurrent = classes + ' ' + 'checkbox-' + variant;
  else if (data && data.type == 'checkbox' && variant != 'none')
    classesCurrent = 'checkbox-' + variant;
  else if (classes && data && data.type == 'radio' && variant != 'none')
    classesCurrent = classes + ' ' + 'radio-' + variant;
  else if (data && data.type == 'radio' && variant != 'none') classesCurrent = 'radio-' + variant;
  else if (classes && data && data.type != 'submit' && variant != 'none')
    classesCurrent = classes + ' ' + 'input-' + variant;
  else if (data && data.type != 'submit' && variant != 'none') classesCurrent = 'input-' + variant;
  else if (classes && data && data.type == 'submit' && variant != 'none')
    classesCurrent = classes + ' ' + 'submit-' + variant;
  else if (data && data.type == 'submit' && variant != 'none') classesCurrent = 'submit-' + variant;
  else if (classes) classesCurrent = classes;
  else classesCurrent = '';
  return classesCurrent;
};

const ATTR = (device: string, data: TAttr): string => {
  let currentData;
  if (data instanceof Object && data[device as keyof typeof data])
    currentData = data[device as keyof typeof data];
  else if (typeof data === 'string') currentData = data;
  else currentData = '';
  return currentData;
};

export { CLASS, ATTR };
