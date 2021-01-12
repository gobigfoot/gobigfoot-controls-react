import * as React from 'react';
import styles from './Example.module.scss';
import { css } from "@uifabric/utilities/lib/css";
import { IExampleProps } from './IExample.types';
import { TextField } from 'office-ui-fabric-react';

export const Example: React.FunctionComponent<IExampleProps> = (props) => {
  const [controlValue, setControlValue] = React.useState("");

  const handleChange = React.useCallback(
    (e, newValue: string) => setControlValue(newValue),
    [],
  );

  return (
    <div className={css(styles.example, props.className)}>
      <TextField label={"Example Control"} value={controlValue} onChange={handleChange} />
      <div className={styles.value}>Example Control Value: {controlValue}</div>
    </div>
  );
};
