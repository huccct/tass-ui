export * from './src/message';
import { withInstallFunc } from '@tass-ui/utils/withInstallFunc';
import Message from './src/method';

export const TassMessage = withInstallFunc(Message, '$message');

export default TassMessage;
