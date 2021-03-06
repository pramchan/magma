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
 * @flow
 * @format
 */

import type {SvgIconStyleProps} from '../SvgIcon';

import React from 'react';
import SvgIcon from '../SvgIcon';

const SortDownIcon = (props: SvgIconStyleProps) => (
  <SvgIcon {...props}>
    <g>
      <path d="M8.94 14L12 17.09 15.06 14l.94.951L12 19l-4-4.049z" />
      <path
        fill="#9DA9BE"
        d="M15.06 10L12 6.91 8.94 10 8 9.049 12 5l4 4.049z"
      />
    </g>
  </SvgIcon>
);

export default SortDownIcon;
