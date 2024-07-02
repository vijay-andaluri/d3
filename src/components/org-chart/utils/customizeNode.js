import defaultConfig from "../data/defaultConfig";
import setPlural from "./setPlural";

const { nodeWidth,
    nodeHeight,
    backgroundColor,
    borderColor,
    nodeBorderRadius,
    avatarWidth,
    nameColor,
    titleColor,
    reportsColor,
    idColor
} = defaultConfig;

const avatarPos = {
    x: nodeWidth / 2 - avatarWidth / 2,
    y: 10
}

// Rectangle Node
const customizeNode = (node) => {
    node
        .append('rect')
        .attr('width', nodeWidth)
        .attr('height', nodeHeight)
        .attr('id', d => d.data.id)
        .attr('fill', backgroundColor)
        .attr('stroke', borderColor)
        .attr('rx', nodeBorderRadius)
        .attr('ry', nodeBorderRadius)
        .style('cursor', (d) => {
            return d.data.person.totalReports > 0 ? 'pointer' : 'default'
        })

    // Image
    node
        .append('image')
        .attr('id', d => `image-${d.data.id}`)
        .attr('width', avatarWidth)
        .attr('height', avatarWidth)
        .attr('x', avatarPos.x)
        .attr('y', avatarPos.y)
        .attr('stroke', borderColor)
        .attr('s', d => d.data.person.avatar)
        .attr('src', d => d.data.person.avatar)
        .attr('href', d => d.data.person.avatar)
        .attr('clip-path', 'url(#avatarClip)')

    // Id
    node
        .append('text')
        .attr('x', nodeWidth / 2)
        .attr('y', avatarPos.y + 80)
        .style('fill', idColor)
        .style("text-anchor", "middle")
        .text(d => d.data.id)

    // Name
    node
        .append('text')
        .attr('x', nodeWidth / 2)
        .attr('y', avatarPos.y + 100)
        .attr('dy', '0.1em')
        .style('font-size', 18)
        .style('fill', nameColor)
        .style("text-anchor", "middle")
        .style("text-transform", 'capitalize')
        .text(d => d.data.person.name)

    // Title
    node
        .append('text')
        .attr('x', nodeWidth / 2)
        .attr('y', avatarPos.y + 130)
        .attr('dy', '0.1em')
        .style('font-size', 14)
        .style('fill', titleColor)
        .style("text-anchor", "middle")
        .text(d => d.data.person.title)

    // Supervisees
    node
        .append('text')
        .attr('x', nodeWidth / 2)
        .attr('y', avatarPos.y + 140)
        .style("text-anchor", "middle")
        .attr('dy', '.9em')
        .style('font-size', 14)
        .style('font-weight', 400)
        .style('fill', reportsColor)
        .text(setPlural)
}

export default customizeNode;