import * as d3 from 'd3';

import { tree } from './data/treeData';
import defaultConfig from './data/defaultConfig';

const initConfig = () => {
    const options = {
        id: "d3",
        data: tree
    }

    const config = {
        ...defaultConfig,
        ...options,
        treeData: options.data
    }

    const { nodeWidth,
        nodeHeight,
        spaceBetweenNodesHorizontally,
        spaceBetweenNodesVertically
    } = config;

    config.treeLayout = d3.tree().nodeSize([nodeWidth + spaceBetweenNodesHorizontally, nodeHeight + spaceBetweenNodesVertically])

    return config;
}

export default initConfig;
