export { default as validateFacebookProfileUrl } from './validateFacebookProfileUrl';
export { default as validateInstagramProfileUrl } from './validateInstagramProfileUrl';
export { default as validateLinkedInProfileUrl } from './validateLinkedInProfileUrl';
export { default as validateMessengerProfileUrl } from './validateMessengerProfileUrl';
export { default as validatePinterestProfileUrl } from './validatePinterestProfileUrl';
export { default as validateRedditProfileUrl } from './validateRedditProfileUrl';
export { default as validateSnapchatProfileUrl } from './validateSnapchatProfileUrl';
export { default as validateThreadsProfileUrl } from './validateThreadsProfileUrl';
export { default as validateTikTokProfileUrl } from './validateTikTokProfileUrl';
export { default as validateWeChatProfileUrl } from './validateWeChatProfileUrl';
export { default as validateWhatsAppProfileUrl } from './validateWhatsAppProfileUrl';
export { default as validateXProfileUrl } from './validateXProfileUrl';
 
import validateFacebookProfileUrl from './validateFacebookProfileUrl';
import validateInstagramProfileUrl from './validateInstagramProfileUrl';
import validateLinkedInProfileUrl from './validateLinkedInProfileUrl';
import validateMessengerProfileUrl from './validateMessengerProfileUrl';
import validatePinterestProfileUrl from './validatePinterestProfileUrl';
import validateRedditProfileUrl from './validateRedditProfileUrl';
import validateSnapchatProfileUrl from './validateSnapchatProfileUrl';
import validateThreadsProfileUrl from './validateThreadsProfileUrl';
import validateTikTokProfileUrl from './validateTikTokProfileUrl';
import validateWeChatProfileUrl from './validateWeChatProfileUrl';
import validateWhatsAppProfileUrl from './validateWhatsAppProfileUrl';
import validateXProfileUrl from './validateXProfileUrl';

export const validateProfileUrl = url => {
  try {
    return require('./validateFacebookProfileUrl')(url)
      || require('./validateInstagramProfileUrl')(url)
      || require('./validateLinkedInProfileUrl')(url)
      || require('./validateMessengerProfileUrl')(url)
      || require('./validatePinterestProfileUrl')(url)
      || require('./validateRedditProfileUrl')(url)
      || require('./validateSnapchatProfileUrl')(url)
      || require('./validateThreadsProfileUrl')(url)
      || require('./validateTikTokProfileUrl')(url)
      || require('./validateWeChatProfileUrl')(url)
      || require('./validateWhatsAppProfileUrl')(url)
      || require('./validateXProfileUrl')(url);
  } catch {
    return validateFacebookProfileUrl(url)
    || validateInstagramProfileUrl(url)
    || validateLinkedInProfileUrl(url)
    || validateMessengerProfileUrl(url)
    || validatePinterestProfileUrl(url)
    || validateRedditProfileUrl(url)
    || validateSnapchatProfileUrl(url)
    || validateThreadsProfileUrl(url)
    || validateTikTokProfileUrl(url)
    || validateWeChatProfileUrl(url)
    || validateWhatsAppProfileUrl(url)
    || validateXProfileUrl(url);
  }
};

// Node.js exports.
try {
  module.exports = validateProfileUrl;
  module.exports.validateFacebookProfileUrl = validateFacebookProfileUrl;
  module.exports.validateInstagramProfileUrl = validateInstagramProfileUrl;
  module.exports.validateLinkedInProfileUrl = validateLinkedInProfileUrl;
  module.exports.validateMessengerProfileUrl = validateMessengerProfileUrl;
  module.exports.validatePinterestProfileUrl = validatePinterestProfileUrl;
  module.exports.validateRedditProfileUrl = validateRedditProfileUrl;
  module.exports.validateSnapchatProfileUrl = validateSnapchatProfileUrl;
  module.exports.validateThreadsProfileUrl = validateThreadsProfileUrl;
  module.exports.validateTikTokProfileUrl = validateTikTokProfileUrl;
  module.exports.validateWeChatProfileUrl = validateWeChatProfileUrl;
  module.exports.validateWhatsAppProfileUrl = validateWhatsAppProfileUrl;
  module.exports.validateXProfileUrl = validateXProfileUrl;
} catch {}

export default Object.freeze(Object.defineProperty(validateProfileUrl, 'validateProfileUrl', {
  value: validateProfileUrl
}));