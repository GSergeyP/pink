import type { TAttr, TVariant } from './DoTags.type';

const CLASS = (classes: string | null, variant: TVariant, data: Record<string, string>): string => {
  let classesCurrent;
  if (classes && data && data.to && variant != 'none')
    classesCurrent = classes + ' ' + 'link-' + variant;
  else if (data && data.to && variant != 'none') classesCurrent = 'link-' + variant;
  else if (classes && data && data.tags == 'button' && variant != 'none')
    classesCurrent = classes + ' ' + 'btn-' + variant;
  else if (data && data.tags == 'button' && variant != 'none') classesCurrent = 'btn-' + variant;
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
