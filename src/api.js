export const getData = async () => {
    //let gotData = [];
    try {
        let response = await fetch('https://www.scorebat.com/video-api/v3/feed/?token=NTIzNTNfMTY3NDMwMjE5M19iYzYxNDZlMmQ0ZjczMDFmOTM2ZDUwNmFhYWNlMDZiZTY2ZDgyM2Vm')
        if (response.ok) {
            let theData = await response.json();
            if (theData) {
                return theData.response;
            } else {
                console.error("response.json() did not return a value");
                return null;
            }
        }
    } catch (ex) {
        console.error("There was an error fetching", ex);
    }
}
