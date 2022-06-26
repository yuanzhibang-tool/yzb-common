export enum ExtensionEventMessageTopicType {
  ON_START = '__on_start',
  ON_WILL_INIT = '__on_will_init',
  ON_INIT = '__on_init',
  ON_WILL_EXIT = '__on_will_exit',
  ON_EXIT = '__on_exit',
  ON_ERROR = '__on_exit',
  ON_CLOSE = '__on_close',
  ON_STDERR = '__on_stderr',
  ON_STDOUT = '__on_stdout',
}