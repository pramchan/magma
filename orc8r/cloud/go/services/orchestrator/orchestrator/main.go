/*
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
 */

package main

import (
	"magma/orc8r/cloud/go/obsidian"
	"magma/orc8r/cloud/go/orc8r"
	"magma/orc8r/cloud/go/service"
	"magma/orc8r/cloud/go/services/orchestrator"
	"magma/orc8r/cloud/go/services/orchestrator/obsidian/handlers"

	"github.com/golang/glog"
)

func main() {
	srv, err := service.NewOrchestratorService(orc8r.ModuleName, orchestrator.ServiceName)
	if err != nil {
		glog.Fatalf("Error creating orchestrator service %s", err)
	}
	obsidian.AttachHandlers(srv.EchoServer, handlers.GetObsidianHandlers())

	err = srv.Run()
	if err != nil {
		glog.Fatalf("Error while running service and echo server: %s", err)
	}
}
