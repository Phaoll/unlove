interface localStorageGetterProp {
  key: string;
  defaultValue?: string;
}

export function localStorageGetter({
  key,
  defaultValue,
}: localStorageGetterProp): string | null {
  let value: string | null;
  try {
    if (defaultValue) {
      value = localStorage.getItem(key) || defaultValue;
    } else {
      value = localStorage.getItem(key);
    }
  } catch {
    // In case localStorage is not available (SSR, etc.)
    value = defaultValue ? defaultValue : null;
  }
  return value as string;
}
