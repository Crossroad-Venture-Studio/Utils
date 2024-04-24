export const Path = {};

export const urlbasename = Path.urlbasename = url => {
  url || (url = '');
  try {
    if (url instanceof URL) url = url.hostname;
  } catch {}

  url = url.replace(/^(https|http|ftp)\:\/\//i, '');
  url = url.slice(0, url.indexOf('/'));
  return url.slice(0, url.lastIndexOf('.')).trim();
}

export const urlname = Path.urlname = url => urlbasename(url).split('.').reverse().join(' ');

// Deafult export.
export default Object.freeze(Path);