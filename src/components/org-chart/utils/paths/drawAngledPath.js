import * as d3 from "d3";
import defaultConfig from "../../data/defaultConfig";

const drawAngledPath = (svg, links, parentNode) => {

    const {
        linkColor,
        strokeWidth,
        animationDuration,
        nodeWidth,
        nodeHeight
    } = defaultConfig;

    const link = svg.selectAll('path.link').data(links.filter(link => link.source.data.id), d => d.target.data.id);

    const angle = d3.line().x(d => d.x).y(d => d.y).curve(d3.curveLinear);

    const linkEnter = link
        .enter()
        .insert('path', 'g')
        .attr('class', 'link')
        .attr('fill', 'none')
        .attr('stroke', linkColor)
        .attr('stroke-opacity', 1)
        .attr('stroke-width', strokeWidth)
        .attr('d', d => {
            const linePoints = [
                {
                    x: d.source.x + nodeWidth / 2,
                    y: d.source.y + nodeHeight
                },
                {
                    x: d.source.x + nodeWidth / 2,
                    y: d.source.y + nodeHeight
                },
                {
                    x: d.source.x + nodeWidth / 2,
                    y: d.source.y + nodeHeight
                },
                {
                    x: d.source.x + nodeWidth / 2,
                    y: d.source.y + nodeHeight
                }
            ]

            return angle(linePoints)
        })

    const linkUpdate = link.merge(linkEnter)

    linkUpdate
        .transition()
        .duration(animationDuration + 400)
        .attr('d', d => {
            const linePoints = [
                {
                    x: d.source.x + nodeWidth / 2,
                    y: d.source.y + nodeHeight
                },
                {
                    x: d.source.x + nodeWidth / 2,
                    y: d.target.y - 10
                },
                {
                    x: d.target.x + nodeWidth / 2,
                    y: d.target.y - 10
                },
                {
                    x: d.target.x + nodeWidth / 2,
                    y: d.target.y,
                },
            ]

            return angle(linePoints)
        })

    link
        .exit()
        .transition()
        .duration(animationDuration)
        .attr('d', () => {
            const lineNode = parentNode
            const linePoints = [
                {
                    x: lineNode.x + nodeWidth / 2,
                    y: lineNode.y + nodeHeight + 2,
                },
                {
                    x: lineNode.x + nodeWidth / 2,
                    y: lineNode.y + nodeHeight + 2,
                },
                {
                    x: lineNode.x + nodeWidth / 2,
                    y: lineNode.y + nodeHeight + 2,
                },
                {
                    x: lineNode.x + nodeWidth / 2,
                    y: lineNode.y + nodeHeight + 2,
                },
            ]

            return angle(linePoints)
        })
}

export default drawAngledPath;