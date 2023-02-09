import Message from './src/method';
import { withInstallFunc } from '@tass-ui/utils/withInstallFunc';

export const TassMessage = withInstallFunc(Message, '$message');

export default TassMessage;

export * from './src/message.type';
