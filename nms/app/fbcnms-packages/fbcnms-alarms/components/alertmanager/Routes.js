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

import CircularProgress from '@material-ui/core/CircularProgress';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import SimpleTable, {toLabels} from '../table/SimpleTable';
import TableActionDialog from '../table/TableActionDialog';
import useRouter from '../../hooks/useRouter';
import {makeStyles} from '@material-ui/styles';
import {useAlarmContext} from '../AlarmContext';
import {useEnqueueSnackbar} from '../../hooks/useSnackbar';
import {useState} from 'react';

const useStyles = makeStyles(() => ({
  loading: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function Routes() {
  const {apiUtil} = useAlarmContext();
  const [menuAnchorEl, setMenuAnchorEl] = useState<?HTMLElement>(null);
  const [currentRow, setCurrentRow] = useState<{}>({});
  const [showDialog, setShowDialog] = useState<?'view'>(null);
  const [lastRefreshTime, _setLastRefreshTime] = useState<string>(
    new Date().toLocaleString(),
  );
  const classes = useStyles();
  const {match} = useRouter();
  const enqueueSnackbar = useEnqueueSnackbar();

  const onDialogAction = args => {
    setShowDialog(args);
    setMenuAnchorEl(null);
  };

  const {isLoading, error, response} = apiUtil.useAlarmsApi(
    apiUtil.getRouteTree,
    {networkId: match.params.networkId},
    lastRefreshTime,
  );

  if (error) {
    enqueueSnackbar(
      `Unable to load receivers: ${
        error.response ? error.response.data.message : error.message
      }`,
      {variant: 'error'},
    );
  }

  const routesList = response?.routes || [];

  return (
    <>
      <SimpleTable
        tableData={routesList}
        onActionsClick={(alert, target) => {
          setMenuAnchorEl(target);
          setCurrentRow(alert);
        }}
        columnStruct={[
          {title: 'name', getValue: row => row.receiver},
          {
            title: 'group by',
            getValue: row => row.group_by || [],
            render: 'list',
          },
          {
            title: 'match',
            getValue: row => (row.match ? toLabels(row.match) : {}),
            render: 'labels',
          },
        ]}
      />
      {isLoading && routesList.length === 0 && (
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      )}
      <Menu
        anchorEl={menuAnchorEl}
        keepMounted
        open={Boolean(menuAnchorEl)}
        onClose={() => setMenuAnchorEl(null)}>
        <MenuItem onClick={() => onDialogAction('view')}>View</MenuItem>
      </Menu>
      <TableActionDialog
        open={showDialog != null}
        onClose={() => onDialogAction(null)}
        title={'View Alert'}
        row={currentRow || {}}
        showCopyButton={true}
        showDeleteButton={false}
      />
    </>
  );
}
