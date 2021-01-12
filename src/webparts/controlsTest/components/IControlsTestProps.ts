import { WebPartContext } from '@microsoft/sp-webpart-base';
import { DisplayMode } from '@microsoft/sp-core-library';

export interface IControlsTestProps {
  context: WebPartContext;
  displayMode: DisplayMode;
}

export interface IControlsTestState { }
