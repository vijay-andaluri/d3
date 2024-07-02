import * as d3 from "d3";
import defaultConfig from "../../data/defaultConfig";

const drawCurvedPath = (svg, links) => {

    const {
        linkColor,
        strokeWidth,
        animationDuration
    } = defaultConfig;

    const link = svg.selectAll('path.link').data(links, d => d.target.data.id);

    const linkEnter = link
        .enter()
        .append('path')
        .attr('class', 'link')
        .attr('stroke', linkColor)
        .attr('stroke-width', strokeWidth)
        .attr('fill', 'none')
        .attr('d', (link) =>
            d3.linkVertical()
                .x(d => d.x === link.source.x ? d.x + 70 : Math.abs(d.x - link.target.x))
                .y(d => d.y === link.source.y ? d.y + 180 : d.y - 120)(link)
        )

    const linkUpdate = link.merge(linkEnter)

    linkUpdate
        .transition()
        .duration(animationDuration + 400)
        .attr('d', (link) =>
            d3.linkVertical()
                .x(d => d.x + 70)
                .y(d => d.y == link.source.y ? d.y + 180 : d.y)(link)
        )

    link.exit().remove();

}

export default drawCurvedPath;