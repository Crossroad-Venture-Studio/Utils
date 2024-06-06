export const Path = {};

export const urlbasename = Path.urlbasename = url => {
  url || (url = '');
  try {
    if (url instanceof URL) url = url.hostname;
  } catch {}

  url = url.replace(/^(https|http|ftp)\:\/\//i, '');
  url = url.slice(0, Math.max(url.indexOf('/') || 0, 0));
  return url.slice(0, Math.max(url.lastIndexOf('.') || 0, 0)).trim();
}

export const urlname = Path.urlname = url => urlbasename(url).split('.').reverse().join(' ');

export const urlpage = Path.urlpage = url => {
  url || (url = '');
  try {
    if (url instanceof URL) url = url.hostname;
  } catch {}
  url.slice(Math.max(url.indexOf('/'), 0), Math.min(Math.max(url.indexOf('?') || 0, 0), Math.max(url.indexOf('#') || 0, 0), url.length));
};

// Deafult export.
export default Object.freeze(Path);