export async function fetchData(url, setGithubData) {
    const data = await fetch(url);
    const result = await data.json();

    if (result) {
        setGithubData(result);
        return true;
    }
    return false;
}

export const changeProperty = (dispatcher, obj, k) => {
    /** changeProperty - performs the UPDATE_PROPERTY action through the dispatch function
     *  dispatcher: this is the dispatch function that is created from userInfoReducer
     *  obj: this will serve as the object whose value will be accessed with the key
     *  k: if defined, is a list of some of the valid keys in userInfo
     */
    const keys = k ? k : Object.keys(obj);

    for (const key of Object.keys(keys)) {
        dispatcher({type: 'UPDATE_PROPERTY', key: key, value: obj[key]});
    }
}
