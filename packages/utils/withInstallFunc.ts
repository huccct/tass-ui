import type { App } from 'vue';
import type { SFCInstallWithContext, SFCWithInstall } from './typescript';

export const withInstallFunc = <T>(fn: T, name: string) => {
  (fn as SFCWithInstall<T>).install = (app: App) => {
    (fn as SFCInstallWithContext<T>)._context = app._context;
    app.config.globalProperties[name] = fn;
  };

  return fn as SFCInstallWithContext<T>;
};
