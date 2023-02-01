/**
 * @name: index
 * @author: cxy
 * @date: 2023/1/28 17:52
 * @description：index
 * @update: 2023/1/28 17:52
 */
import dropdownItem from './src/select-item.vue';

import { withInstall } from '@echo-ui/utils/withInstall';

export const EchoDropdownItem = withInstall(dropdownItem);

export default EchoDropdownItem;
