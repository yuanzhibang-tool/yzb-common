import { IpcMessageTopic } from '../src/index';
// jest unit test docs:https://jestjs.io/zh-Hans/docs/getting-started
test('test IpcMessageTopic isSubTopic', () => {
    let result = IpcMessageTopic.isSubTopic('1', '1');
    expect(result).toBe(true);
    result = IpcMessageTopic.isSubTopic('#', '1/323/4');
    expect(result).toBe(true);
    result = IpcMessageTopic.isSubTopic('#', '1/323');
    expect(result).toBe(true);

    result = IpcMessageTopic.isSubTopic('a/+/c', 'a/323/c');
    expect(result).toBe(true);
    result = IpcMessageTopic.isSubTopic('a/+/+', 'a/323/c');
    expect(result).toBe(true);
    result = IpcMessageTopic.isSubTopic('a/+/+/e/+', 'a/323/c/e/f');
    expect(result).toBe(true);

    result = IpcMessageTopic.isSubTopic('a/+/+/e/#', 'a/323/c/e/f');
    expect(result).toBe(true);

    result = IpcMessageTopic.isSubTopic('a/+/+/e/#', 'a/323/c/e/f/g/h');
    expect(result).toBe(true);

    result = IpcMessageTopic.isSubTopic('a/+/c', 'a/323/d');
    expect(result).toBe(false);
    result = IpcMessageTopic.isSubTopic('a/+/c', 'b/323/c');
    expect(result).toBe(false);
    result = IpcMessageTopic.isSubTopic('a/+/+', 'a/323/c/d');
    expect(result).toBe(false);
    result = IpcMessageTopic.isSubTopic('a/+/+/e/+', 'a/323/c/e/f/g');
    expect(result).toBe(false);

});


test('test IpcMessageTopic parseKeyValueTopic', () => {
    try {
        let result = IpcMessageTopic.parseKeyValueTopic('1/2/3');
    } catch (error) {
        expect(error).toEqual(new Error('topic not key value format string'));
    }

    let result = IpcMessageTopic.parseKeyValueTopic('1/2/3/4');
    expect(result.get('1')).toBe('2');
    expect(result.get('3')).toBe('4');
});