/* eslint-disable space-before-function-paren */
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

export interface ScriptContent {
  content_type: 'file_content_base64';
  content: string; // moudule file content
  identity: string; // for renderer sync
  file_content_sha1?: string; // sha1 value for identity module file is load or not
}

export enum ChartViewModuleDataActionType {
  ARRAY_APPEND_START = 'array_append_start',
  ARRAY_APPEND_END = 'array_append_end',
  ARRAY_MERGE_START = 'array_merge_start',
  ARRAY_MERGE_END = 'array_merge_end',
  OBJECT_MERGE = 'object_merge',
  DELETE = 'delete',
  REPLACE = 'replace',
  INCREASE = 'increase',
  DECREASE = 'decrease',
}

export interface ChartViewModuleUpdateDataAction {
  targetPath: Array<any>;
  action: ChartViewModuleDataActionType;
  data?: any;
  version: number;
}

export interface ModuleItem {
  info: ScriptContent; // type of module
  moudule: any;
}

export class IpcMessageTopic {
  static isSubTopic(topic: string, subTopic: string) {
    const topicArray = topic.split('/');
    const subTopicArray = subTopic.split('/');
    for (let index = 0; index < subTopicArray.length; index++) {
      const topicIdxValue = topicArray[index];
      const subTopicIdxValue = subTopicArray[index];
      if (topicIdxValue === '#') {
        return true;
      }
      if (topicIdxValue !== subTopicIdxValue && topicIdxValue !== '+') {
        return false;
      }
    }
    return true;
  }

  static parseKeyValueTopic(topic: string): Map<string, string> {
    // parse topic with /
    const topicArray = topic.split('/');
    if (topicArray.length % 2 === 1) {
      throw new Error('topic not key value format string');
    }
    const map = new Map<string, string>();
    const keyLength = topicArray.length / 2;
    for (let index = 0; index < keyLength; index++) {
      const key = topicArray[2 * index];
      const value = topicArray[2 * index + 1];
      map.set(key, value);
    }
    return map;
  }
}
