import React from 'react';
import r1 from 'react/jsx-runtime.js';
import r2 from 'react/jsx-dev-runtime.js';
import { aspect } from './aspect';
import cn from './cn.json';

function translate(key: string) {
  const matched = cn.find((i) => i.source === key);
  if (matched) return matched.replacement;
  return key;
}

function i18n(args: any[], argc: number = args.length) {
  /* eslint-disable no-param-reassign */
  if (typeof args[0] !== 'string') return;
  if (args[1]) {
    const { children, placeholder } = args[1];
    if (children && typeof children === 'string') {
      args[1] = { ...args[1], children: translate(children) };
    }

    if (placeholder) {
      if (args[0] === 'input' || args[0] === 'textarea') {
        args[1] = {
          ...args[1],
          placeholder: translate(placeholder)
        };
      }
    }
  }
}

aspect(r1 as any, 'jsxs', i18n);
aspect(r1 as any, 'jsx', i18n);
aspect(r2 as any, 'jsxDEV', (args) => i18n(args, 2));
aspect(React, 'createElement', i18n);
