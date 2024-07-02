const setPlural = (datum) => {

    if (!datum.data.person || !datum.data.person.totalReports) {
        return ''
    }

    const {
        person: { totalReports },
    } = datum.data
    const pluralEnding = totalReports > 1 ? 's' : ''

    return `${totalReports} supervisee${pluralEnding}`
}

export default setPlural;