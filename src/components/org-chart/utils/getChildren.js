import { tree1, tree2, tree3, tree4 } from "../data/treeData";

const getChildren = id => {
    switch (id) {
        case 100:
            return tree1
        case 36:
            return tree2
        case 56:
            return tree3
        case 25:
            return tree4
        default:
            return console.log('no children')
    }
}

export default getChildren;