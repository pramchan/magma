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
declare module '@material-ui/icons/AccessAlarms' {
  declare module.exports: React$ComponentType<SvgIconExports>;
}

import ListAltIcon from '@material-ui/icons/ListAlt';
import MapButtonGroup from '@fbcnms/ui/components/map/MapButtonGroup';
import MapIcon from '@material-ui/icons/Map';
import React from 'react';
import Text from '../../components/design-system/Text';
import {STORY_CATEGORIES} from '../storybookUtils';
import {makeStyles} from '@material-ui/styles';
import {storiesOf} from '@storybook/react';

const useStyles = makeStyles(() => ({
  text: {
    fontSize: '12px',
    LineHeight: '14px',
  },
}));

const AddMapButtonGroup = () => {
  return (
    <MapButtonGroup
      onIconClicked={() => {}}
      buttons={[
        {item: <ListAltIcon />, id: 'list'},
        {item: <MapIcon />, id: 'map'},
      ]}
    />
  );
};
const AddThreeMapButton = () => {
  return (
    <MapButtonGroup
      onIconClicked={() => {}}
      buttons={[
        {item: <ListAltIcon />, id: 'list'},
        {item: <MapIcon />, id: 'map'},
        {item: <MapIcon />, id: 'map2'},
      ]}
    />
  );
};
const AddTextButton = () => {
  const classes = useStyles();
  return (
    <MapButtonGroup
      onIconClicked={() => {}}
      buttons={[
        {
          item: <Text className={classes.text}>Status</Text>,
          id: 'status',
        },
        {
          item: <Text className={classes.text}>Technician</Text>,
          id: 'Technician',
        },
      ]}
    />
  );
};

storiesOf(`${STORY_CATEGORIES.MUI_COMPONENTS}/MapButtonGroup`, module)
  .add('two', () => {
    return <AddMapButtonGroup />;
  })
  .add('three', () => {
    return <AddThreeMapButton />;
  })
  .add('text', () => {
    return <AddTextButton />;
  });
