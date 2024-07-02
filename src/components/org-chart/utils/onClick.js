import render from "../render";
import getChildren from "./getChildren";

const onClick = (d, config) => {

    let isSpecialNode = d.data.id === 1 || d.data.id === 500;
    
    if (isSpecialNode) {
        if (d.data.children) {
            d.data._children = d.data.children
            d.data.children = null;
        } else {
            d.data.children = d.data._children;
            d.data._children = null;
        }

        return render({ ...config, sourceNode: d })
    }

    if (d.data.children) {
        d.data.children = null;
    } else {
        const get_children = getChildren(d.data.id);
        if (!get_children) return;
        d.data.children = get_children;
    }

    render({ ...config, sourceNode: d });
}

export default onClick;