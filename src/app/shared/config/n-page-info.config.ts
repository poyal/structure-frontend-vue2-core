export const N_PAGE_INFO_CONFIG = [
  {text: '10개씩', value: 10, disabled: false},
  {text: '20개씩', value: 20, disabled: false},
  {text: '30개씩', value: 30, disabled: false},
  {text: '50개씩', value: 50, disabled: false},
  {text: '100개씩', value: 100, disabled: false},
];

export const DEFAULT_SIZE_TEN = 10;
export const DEFAULT_PAGE_SORT = 'id,desc';

export function PAGE_DEFAULT_SIZE(): number {
  return DEFAULT_SIZE_TEN;
}
