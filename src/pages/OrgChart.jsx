import { useEffect } from "react";
import * as d3 from 'd3';
import initConfig from "../components/org-chart/initConfig";
import render from "../components/org-chart/render";
import defineAvatarClip from "../components/org-chart/defs/defineAvatarClip";

const OrgChart = () => {
    const config = initConfig();

    useEffect(() => {
        const svg = document.getElementById("svg");

        const { id, nodeWidth } = config;

        if (!svg) {
            const elem = document.getElementById(id);

            elem.innerHTML = '';

            const width = elem.clientWidth;
            const height = elem.clientHeight;

            const svgroot = d3
                .select(`#${id}`)
                .append('svg')
                .attr('id', 'svg')
                .attr('x', '0px')
                .attr('y', '0px')
                .attr('width', width)
                .attr('height', height);

            const svg = svgroot
                .append('g')
                .attr('transform', `translate(${width / 2 - nodeWidth / 2}, ${80})`);

            defineAvatarClip(svgroot, 'avatarClip')

            const handleZoom = (e) => {
                config.svg.attr('transform', e.transform);
            }

            const zoom = d3.zoom().on('zoom', handleZoom);

            config.svgroot = svgroot;
            config.svg = svg;

            config.svgroot.call(zoom);

            render(config);
        }
    }, [config])

    return (
        <div id="d3" className="min-height center-div w-full h-full bg-lite"></div>
    )
}

export default OrgChart;