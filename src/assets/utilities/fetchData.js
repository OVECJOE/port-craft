async function fetchData(url, setGithubData) {
    const data = await fetch(url);
    const result = await data.json();

    if (result) {
        setGithubData(result);
        return true;
    }
    return false;
}

export default fetchData;
