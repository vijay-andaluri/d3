import avatar from '../assets/avatar.svg'

const getParent = (d) => {
    if (d.id === 100) {
        return {
            id: 500,
            person: {
                id: 500,
                avatar,
                department: '',
                name: 'Pascal ruth',
                title: 'Member',
                totalReports: 1,
            },
            hasChild: false,
            hasParent: true,
            children: [d],
        }
    } else if (d.id === 500) {
        return {
            id: 1,
            person: {
                id: 1,
                avatar,
                department: '',
                name: 'Bryce joe',
                title: 'Director',
                totalReports: 1,
            },
            hasChild: false,
            hasParent: false,
            children: [d],
        }
    } else {
        return
    }
}

export default getParent;