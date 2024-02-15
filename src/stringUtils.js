"use strict";

// Function to normalize string to Camel case.
String.toCamelCase || Object.defineProperty(String, 'toCamelCase', {
  value: function(str, sep = '') {
    let output = '', flag = false;
    for (let i = 0, l = str.length; i !== l; ++i) {
      const c = str.charAt(i);
      ((c === ' ' || c === '-' || c === '_') && (flag = true))
      || (!flag && (output += c))
      || ((output += sep + c.toUpperCase()) && (flag = false))
    }
    return output;
  }
});
String.prototype.toCamelCase || Object.defineProperty(String.prototype, 'toCamelCase', {
  value: function(...args) {
    return String.toCamelCase(this, ...args);
  }
});

// Function to normalize string to Kebab case.
String.toKebabCase || Object.defineProperty(String, 'toKebabCase', {
  value: function(str, sep = '-', removeHeadSep, removeTrailSep) {
    let output = '', tl = str.length;
    for (let i = 0, l = tl; i !== l; ++i) {
      const c = str.charCodeAt(i);
      ((c === 32 || c === 45 || c === 95) && (output += sep))
        || (c >= 65 && c <= 90 && (output += sep + String.fromCharCode(c + 32)))
        || (output += String.fromCharCode(c))
    }
    let i = 0, j = output.length, ol = j, l;
    for (l = Math.min(removeHeadSep || 0, tl); i !== l && output.charAt(i) === sep; ++i);
    for (l = tl - Math.min(removeTrailSep || 0, tl); j > l && output.charAt(--j) === sep;);
    return (i || j < ol) && output.slice(i, j + 1) || output;
  }
});
String.prototype.toKebabCase || Object.defineProperty(String.prototype, 'toKebabCase', {
  value: function(...args) {
    return String.toKebabCase(this, ...args);
  }
});

// Function to decamelize, exactly the same as kebab casing.
String.decamelize || Object.defineProperty(String, decamelize, {
  value: function(str, removeHeadSep = Infinity, removeTrailSep = Infinity) {
    return str.toKebabCase('_', removeHeadSep, removeTrailSep);
  }
});
String.prototype.decamelize || Object.defineProperty(String.prototype, 'decamelize', {
  value: function(...args) {
    return String.decamelize(this, ...args);
  }
});

// Function to snakify, similar to kebab casing.
String.toSnakeCase || Object.defineProperty(String, 'toSnakeCase', {
  value: function(str, removeHeadSep = Infinity, removeTrailSep = Infinity) {
    return str.toKebabCase('_', removeHeadSep, removeTrailSep);
  }
});
String.prototype.toSnakeCase || Object.defineProperty(String.prototype, 'toSnakeCase', {
  value: function(...args) {
    return String.toSnakeCase(this, ...args);
  }
});

// Function to pascalify, similar to camel casing but with first letter being uppercase.
String.toPascalCase || Object.defineProperty(String, 'toPascalCase', {
  value: function(str, sep = '') {
    const out = str.toCamelCase(sep);
    return out.charAt(0).toUpperCase() + out.slice(1);
  }
});
String.prototype.toPascalCase || Object.defineProperty(String.prototype, 'toPascalCase', {
  value: function(...args) {
    return String.toPascalCase(this, ...args);
  }
});

// Function to transform into socket header property format.
String.toSocketHeaderKey || Object.defineProperty(String, 'toSocketHeaderKey', {
  value: function(str) {
    let output = '', flag = false, i = 0, l = str.length;
    for (; i !== l; ++i) {
      const c = str.charAt(i);
      ((c === ' ' || c === '-' || c === '_') && (flag = true) && (output += '-'))
      || (!flag && i && (output += c))
      || ((output += c.toUpperCase()) && (flag = false))
    }
    return output;
  }
});
String.prototype.toSocketHeaderKey || Object.defineProperty(String.prototype, 'toSocketHeaderKey', {
  value: function(...args) {
    return String.toSocketHeaderKey(this, ...args);
  }
});

// Helper function to singularize a string. It only works for lowercase words.
const pluraltoSingularExceptions = {
  geese: 'goose',
  mice: 'mouse',
  feet: 'foot',
  teeth: 'tooth',
  oxen: 'ox',
  cacti: 'cactus',
  cactus: 'cactus',
  couscous: 'couscous',
  octopus: 'octopus'
};

const toSingular = s => {
  if (s.length < 4) return s;
  const exception = pluraltoSingularExceptions[s];
  if (exception) return exception;

  const l1 = s.length - 1, c1 = s.charAt(l1);
  const l2 = l1 - 1, c2 = s.charAt(l2);
  const l3 = l2 - 1, c3 = s.charAt(l3);

  if (c1 === 's' && c2 !== 's') {
    if (c2 === 'e') {
      if (c3 === 'i') {
        return s.slice(0, l3) + 'y';
      }
      if (c3 === 'v') {
        return s.slice(0, l3) + 'f';
      }
      if (c3 === 'a' || c3 === 'o' || c3 === 'u') {
        return s.slice(0, l2);
      }
      return s.slice(0, l1);
    }
    return s.slice(0, l1);
  }
  
  return s;
}
String.toSingular || Object.defineProperty(String, 'toSingular', {
  value: function (str) {
    return `${toSingular(str)}`;
  }
});
String.prototype.toSingular || Object.defineProperty(String.prototype, 'toSingular', {
  value: function(...args) {
    return String.toSingular(this, ...args);
  }
});

// Helper function to get raw data of a string.
String.raw || Object.defineProperty(String, 'raw', {
  value: function (str) {
    return `${str}`;
  }
});
String.prototype.raw || Object.defineProperty(String.prototype, 'raw', {
  value: function(...args) {
    return String.raw(this, ...args);
  }
});

// Helper function to convert utf16 into utf8.
String.utf16To8 || Object.defineProperty(String, 'utf16To8', {
  value: function () {
    const f = (_, n) => String.fromCharCode(parseInt(n, 16)),
      unescape = s => s.replace(/%([0-9A-F]{2})/ig, f);
    return function (str) {
      try {
        return unescape(encodeURIComponent(str));
      } catch {
        //include invalid character, cannot convert
        return str;
      }
    };
  }()
});
String.prototype.utf16To8 || Object.defineProperty(String.prototype, 'utf16To8', {
  value: function(...args) {
    return String.utf16To8(this, ...args);
  }
});

// Helper function to convert utf8 into utf16.
String.utf8To16 || Object.defineProperty(String, 'utf8To16', {
  value: function () {
    const f = c => '%' + ((c = c.charCodeAt()) < 16 && '0' || '') + c.toString(16).toUpperCase(),
      escape = s => s.replace(/[\x00-),:-?[-^`{-\xFF]/g, f);
    return function(str) {
      try {
        return decodeURIComponent(escape(str));
      } catch {
        //include invalid character, cannot convert
        return str;
      }
    };
  }()
});
String.prototype.utf8To16 || Object.defineProperty(String.prototype, 'utf8To16', {
  value: function(...args) {
    return String.utf8To16(this, ...args);
  }
});