import Message from './src/message';
import { withInstallFunc } from '@tass-ui/utils/withInstallFunc';

export const TassMessage = withInstallFunc(Message, '$message');

export default TassMessage;
