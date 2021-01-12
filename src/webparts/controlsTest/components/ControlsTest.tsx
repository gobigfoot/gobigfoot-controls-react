import * as React from 'react';
import styles from './ControlsTest.module.scss';
import { IControlsTestProps, IControlsTestState } from './IControlsTestProps';

/**
 * Import Components
 */
import { Example } from '../../../Example';


/**
 * Component that can be used to test out the React controls from this project
 */
export default class ControlsTest extends React.Component<IControlsTestProps, IControlsTestState> {

  constructor(props: IControlsTestProps) {
    super(props);

    this.state = {};
  }

  /**
   * Open the property pane
   */
  private _onConfigure() {
    this.props.context.propertyPane.open();
  }

  /**
   * Renders the component
   */
  public render(): React.ReactElement<IControlsTestProps> {
    return (
      <div className={styles.controlsTest}>
        <div className={styles.container}>
          <Example />
        </div>
      </div>
    );

  }

}
