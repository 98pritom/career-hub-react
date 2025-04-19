const getStoredList = () => {
    // read-list
    const storedListStr = localStorage.getItem('job-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
}

const addToDb = (id) => {
    const storedList = getStoredList();
    if (storedList.includes(id)) {
        console.log(id, 'already applied');
    } else {
        storedList.push(id);
        const updatedList = JSON.stringify(storedList);
        localStorage.setItem('job-list', updatedList);
    }
}
export { addToDb, getStoredList };