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

import type {DataTypes, QueryInterface} from 'sequelize';

module.exports = {
  up: (queryInterface: QueryInterface, types: DataTypes) => {
    return queryInterface.createTable('Organizations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: types.INTEGER,
      },
      customDomains: {
        allowNull: false,
        defaultValue: '[]',
        type: types.JSON,
      },
      name: {
        allowNull: false,
        type: types.STRING,
      },
      networkIDs: {
        allowNull: true,
        defaultValue: '[]',
        type: types.JSON,
      },
      tabs: {
        allowNull: false,
        defaultValue: '[]',
        type: types.JSON,
      },
      createdAt: {
        allowNull: false,
        type: types.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: types.DATE,
      },
    });
  },

  down: (queryInterface: QueryInterface, _types: DataTypes) => {
    return queryInterface.dropTable('Organizations');
  },
};
