import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'dr',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
