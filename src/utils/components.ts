import { Optional } from '~/types/utils';

export const getClassName = (...classnames: Optional<string>[]): string =>
  classnames.filter(Boolean).join(' ');
