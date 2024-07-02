const animationDuration = 350

// Nodes
const nodeWidth = 140
const nodeHeight = 180
const avatarWidth = 48
const nodeBorderRadius = 12

// Colors
const backgroundColor = '#2f243a'
const borderColor = '#db8a74'
const nameColor = '#fac9b8'
const titleColor = '#F1F2F6'
const reportsColor = '#b3bbbb'
const idColor = '#FF8600'
const linkColor = 'darkblue'

//Stroke Width
const strokeWidth = 2;

// path type - must be one of ['angle', 'curve']
const pathType = 'angle'

const spaceBetweenNodesHorizontally = 20;
const spaceBetweenNodesVertically = pathType === 'angle' ? 20 : 120;

const defaultConfig = {
    animationDuration,
    nodeWidth,
    nodeHeight,
    nodeBorderRadius,
    avatarWidth,
    backgroundColor,
    borderColor,
    nameColor,
    titleColor,
    reportsColor,
    idColor,
    linkColor,
    strokeWidth,
    pathType,
    spaceBetweenNodesHorizontally,
    spaceBetweenNodesVertically
}

export default defaultConfig;
