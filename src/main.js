import Aurelia, { RouterConfiguration } from 'aurelia';
import { MyApp } from './my-app';
// import * as UxComponents from 'ux';
// import {
//   FASTDesignSystemProvider,
//   FASTCard,
//   FASTButton,
//   FASTTextField,
//   FASTTextArea,
//   FASTCheckbox,
//   FASTDialog
// } from '@microsoft/fast-components';
// import { AureliaFastAdapter } from './aurelia-fast-adapter';

// FASTDesignSystemProvider;
// FASTCard;
// FASTButton;
// FASTTextField;
// FASTTextArea;
// FASTCheckbox;
// FASTDialog;


Aurelia

  .register(RouterConfiguration)

  .app(MyApp)
  .start();
