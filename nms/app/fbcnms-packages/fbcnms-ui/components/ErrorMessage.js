/**
 * Copyright 2020 The Magma Authors.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @flow strict-local
 * @format
 */

import * as React from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Text from './design-system/Text';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(_theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
    padding: '20px',
  },
  errorIcon: {
    marginBottom: '8px',
    fontSize: '32px',
  },
}));

type Props = {
  message: string,
};

const ErrorMessage = ({message}: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ErrorOutlineIcon className={classes.errorIcon} />
      <Text variant="h6">{message}</Text>
    </div>
  );
};

export default ErrorMessage;
