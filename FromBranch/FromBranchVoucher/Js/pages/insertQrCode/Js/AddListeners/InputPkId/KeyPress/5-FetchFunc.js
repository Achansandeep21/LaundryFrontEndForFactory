import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();

    let jVarLocalbranchName = localStorage.getItem("FactoryName")
    let jVarLocalFetchUrl = `/Custom/Cleaning/Factory/V1/Inward/Scan/QrCode/${jVarLocalbranchName}`;

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    // let data = await response.json();

    return await response;
};

export { StartFunc };