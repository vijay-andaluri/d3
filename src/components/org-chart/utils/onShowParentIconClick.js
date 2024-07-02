import render from "../render";
import getParent from "./getParent";

const onShowParentIconClick = (config) => {

    const { nodes } = config;
    const topNode = nodes[0]
    const parentObj = getParent(topNode.data)

    render({ ...config, treeData: parentObj, sourceNode: topNode });
}

export default onShowParentIconClick;
