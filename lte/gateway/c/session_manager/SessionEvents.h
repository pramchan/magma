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
 */

#include <memory>
#include <string>
#include <utility>

#include <folly/Format.h>
#include <folly/dynamic.h>
#include <folly/json.h>
#include <orc8r/protos/eventd.pb.h>

#include "EventdClient.h"
#include "SessionState.h"
#include "magma_logging.h"

namespace magma {
namespace lte {

class EventsReporter {
 public:
  virtual void session_created(
      const std::unique_ptr<SessionState>& session) {};

  virtual void session_create_failure(
      const std::string& imsi,
      const std::string& apn,
      const std::string& mac_addr,
      const std::string& failure_reason) {};

  virtual void session_updated(std::unique_ptr<SessionState>& session) {};

  virtual void session_update_failure(
      const std::string& failure_reason,
      std::unique_ptr<SessionState>& session) {};

  virtual void session_terminated(
      const std::unique_ptr<SessionState>& session) {};
};

/**
 * Session Events are sent to the eventd service for logging.
 */
class EventsReporterImpl : public EventsReporter {
 public:
  EventsReporterImpl(AsyncEventdClient& eventd_client);

  void session_created(const std::unique_ptr<SessionState>& session);

  void session_create_failure(
      const std::string& imsi,
      const std::string& apn,
      const std::string& mac_addr,
      const std::string& failure_reason);

  void session_updated(std::unique_ptr<SessionState>& session);

  void session_update_failure(
      const std::string& failure_reason,
      std::unique_ptr<SessionState>& session);

  void session_terminated(const std::unique_ptr<SessionState>& session);

 private:
  AsyncEventdClient& eventd_client_;
};

}  // namespace lte
}  // namespace magma
