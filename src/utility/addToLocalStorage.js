
const getItemsFromLocalStorage = () => {
    const getLocalStorage = localStorage.getItem("readList");

    if(getLocalStorage){
        const parsData = JSON.parse(getLocalStorage);
        return parsData;
    }
    else {
        return [];
    }
}

const setItemsToLocalStorage = (id) => {
    const localStorageData = getItemsFromLocalStorage()
    if(localStorageData.includes(id)){
        alert("Book is already added to Red list");
        return;
    }
    else {
        localStorageData.push(id);
        const stringifiedData = JSON.stringify(localStorageData)
        localStorage.setItem("readList", stringifiedData)
    }
}
// getItemsFromLocalStorage()


export {
    setItemsToLocalStorage,
    getItemsFromLocalStorage
};