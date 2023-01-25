import Message from './src/message';
import { withInstallFunc } from '@echo-ui/utils/withInstallFunc';

export const EchoMessage = withInstallFunc(Message, '$message');

export default EchoMessage;
