function defineAvatarClip(svg, id) {

  const defs = svg.append('svg:defs')

  defs
    .append('clipPath')
    .attr('id', id)
    .append('circle')
    .attr('cx', 70)
    .attr('cy', 34)
    .attr('r', 24)
}

export default defineAvatarClip;
