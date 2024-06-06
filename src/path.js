export const Path = {};

export const urldomain = Path.urldomain = url => {
  url || (url = '');
  try {
    if (url instanceof URL) url = url.hostname;
  } catch {}

  url = url.replace(/^(https|http|ftp)\:\/\/(www\.|)/i, '');
  url = url.slice(0, Math.max(url.indexOf('/') || 0, 0));
  return url.trim();
}

export const urlbasename = Path.urlbasename = url => (
  urldomain(url).slice(0, Math.max(url.lastIndexOf('.') || 0, 0))
)

export const urlname = Path.urlname = url => urlbasename(url).split('.').reverse().join(' ');

export const urlpage = Path.urlpage = url => {
  url || (url = '');
  try {
    if (url instanceof URL) url = url.hostname;
  } catch {}
  url = url.replace(/^(https|http|ftp)\:\/\/(www\.|)/i, '');
  return url.slice(Math.max(url.indexOf('/') || 0, 0), Math.min(Math.max(url.indexOf('?') || 0, 0), Math.max(url.indexOf('#') || 0, 0)) || url.length).trim();
};

// Deafult export.
export default Object.freeze(Path);