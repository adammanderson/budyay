export function removeUrlParam(key: string, sourceURL: string): string {
  let rtn = sourceURL.split('?')[0];
  const queryString = (sourceURL.indexOf('?') !== -1) ? sourceURL.split('?')[1] : '';
  if (queryString !== '') {
    const params_arr = queryString.split('&');
    for (let i = params_arr.length - 1; i >= 0; i -= 1) {
      const param = params_arr[i].split('=')[0];
      if (param === key) {
        params_arr.splice(i, 1);
      }
    }
    rtn = `${rtn}${params_arr.length ? '?' : ''}${params_arr.join('&')}`;
  }
  return rtn;
}
