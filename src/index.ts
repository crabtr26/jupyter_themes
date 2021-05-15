import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab_midnight extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_midnight',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyterlab_midnight is activated!');
    const style = 'jupyterlab_midnight/index.css';

    manager.register({
      name: 'jupyterlab_midnight',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
