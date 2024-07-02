import onShowParentIconClick from "./onShowParentIconClick"

const showParentIcon = (svg, config) => {

    const container = svg
        .append('g')
        .attr('id', 'showParentIcon')
        .on('click', () => onShowParentIconClick(config))
        .attr('stroke', 'none')
        .attr('fill', 'none')
        .attr('transform', `translate(50, -60)`)
        .attr('display', config.treeData.hasParent ? '' : 'none')
        .style('cursor', 'pointer')
        .append('g')

    container
        .append('circle')
        .attr('id', 'icon')
        .attr('stroke', config.borderColor)
        .attr('fill', config.backgroundColor)
        .attr('cx', 20)
        .attr('cy', 20)
        .attr('r', 20)

    container
        .append('path')
        .attr('stroke', config.linkColor)
        .attr('stroke-linecap', 'square')
        .attr('stroke-width', config.strokeWidth)
        .attr('d', 'M20 40V60')
}

export default showParentIcon;