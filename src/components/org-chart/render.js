import * as d3 from "d3";
import onClick from "./utils/onClick";
import customizeNode from "./utils/customizeNode";
import showParentIcon from "./utils/showParentIcon";
import drawAngledPath from "./utils/paths/drawAngledPath";
import drawCurvedPath from "./utils/paths/drawCurvedPath";

const render = (config) => {

    const {
        svg,
        treeLayout,
        animationDuration,
        treeData,
        sourceNode,
        pathType,
    } = config

    const root = d3.hierarchy(treeData)

    treeLayout(root);

    const nodes = root.descendants();
    const links = root.links();

    config.nodes = nodes;
    config.links = links;

    const parentNode = sourceNode || treeData;

    const node = svg.selectAll('g.node-node').data(nodes.filter(d => {
        return d.data.id
    }), d => d.data.id);

    svg.selectAll("#showParentIcon").remove();
    showParentIcon(svg, config)

    const nodeEnter = node
        .enter()
        .insert('g')
        .attr('class', 'node-node')
        .attr('transform', `translate(${parentNode.x || 0}, ${parentNode.y || 0})`)

    customizeNode(nodeEnter);

    const nodeUpdate = node.merge(nodeEnter);

    nodeUpdate.on('click', (e, d) => onClick(d, config));

    setTimeout(() => {
        nodeUpdate
            .transition()
            .duration(animationDuration)
            .attr('transform', (d) => `translate(${d.x}, ${d.y})`)
    }, 200)

    node
        .exit()
        .transition()
        .duration(animationDuration)
        .attr('transform', `translate(${parentNode.x},${parentNode.y})`)
        .remove()

    if (pathType === 'angle') {
        drawAngledPath(svg, links, parentNode);
    } else if (pathType === 'curve') {
        drawCurvedPath(svg, links);
    } else {
        return console.log("Path Type is not one of 'angle' or 'curve'");
    }
}

export default render;