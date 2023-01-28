import collapse from './src/collapse.vue';
import panel from './src/panel.vue';
import { withInstall } from '@echo-ui/utils/withInstall';

collapse.panel = panel



export const EchoCollapse = withInstall(collapse);
export const Panel = withInstall(panel);

export default EchoCollapse;
