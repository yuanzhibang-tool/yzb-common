/* eslint-disable no-unused-vars */
export enum ExtensionLifecycleEventMessageTopic {
  // 在process在执行时候调用,代表猿之棒客户端已经启动该process,该回调由猿之棒客户端触发
  ON_START = '__extentsion_lifecycle_event_message_topic_on_start',
  // 在process将要初始化的时候调用,代表已经进入process处理阶段,该回调由extension调用触发
  ON_WILL_INIT = '__extentsion_lifecycle_event_message_topic_on_will_init',
  // 在process完成初始化的时候调用,代表已经完成process初始化,该回调由extension调用触发
  ON_INIT = '__extentsion_lifecycle_event_message_topic_on_init',
  // 在process主动退出前调用,该回调由extension调用触发
  ON_WILL_EXIT = '__extentsion_lifecycle_event_message_topic_on_will_exit',
  // 在process退出时调用,该回调由猿之棒客户端触发,由node child_process exit事件触发,具体参考:https://nodejs.org/api/child_process.html#event-exit
  ON_EXIT = '__extentsion_lifecycle_event_message_topic_on_exit',
  // 在process出现错误时调用,该回调由猿之棒客户端触发,由node child_process error事件触发,具体参考:https://nodejs.org/api/child_process.html#event-error
  ON_ERROR = '__extentsion_lifecycle_event_message_topic_on_error',
  // 在process关闭时调用,该回调由猿之棒客户端触发,由node child_process close事件触发,具体参考:https://nodejs.org/api/child_process.html#event-close
  ON_CLOSE = '__extentsion_lifecycle_event_message_topic_on_close',
  // 在process触发stderr时调用,该回调由猿之棒客户端触发,由node child_process.stderr data事件触发,具体参考:https://nodejs.org/api/child_process.html#subprocessstderr
  ON_STDERR = '__extentsion_lifecycle_event_message_topic_on_stderr',
  // 在process触发stdout时调用,该回调由猿之棒客户端触发,由node child_process.stdout data事件触发,具体参考:https://nodejs.org/api/child_process.html#subprocessstdout
  ON_STDOUT = '__extentsion_lifecycle_event_message_topic_on_stdout',
}

export enum ExtensionRendererMessageTopic {
  // 用户向process发送主动退出的topic消息
  USER_EXIT = '__extension_renderer_message_toppic_user_exit',
  // 用户向process发送获取process相关属性的信息,用以renderer获取extension状态
  GET_PROPERTY = '__extension_renderer_message_toppic_get_property',
}
