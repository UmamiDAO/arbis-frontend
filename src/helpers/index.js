import { BigNumber } from "ethers";

export { default as Transactor } from "./Transactor";
export { default as ipfs } from "./ipfs";


export function standardizeLink(link) {
    if (link) {
        link = link.replace("ipfs://ipfs/", "https://ipfs.io/ipfs/")
        return link.replace("ipfs://", "https://ipfs.io/ipfs/");
    } else {
        return "";
    }
};

export function ipfsLinkFromHash(hash) {
    return "https://ipfs.io/ipfs/" + hash;
}

export function truncateString(str, maxLen) {
    if (!str) {
        return "";
    }
    if (str.length > maxLen) {
        str = str.substring(0, maxLen);
        return str + "...";
    }
    return str;
}

export function relationToNow(start, end) {
    let startBN = BigNumber.from(start);
    const startDate = new Date(startBN.toNumber() * 1000);
    let endBN = BigNumber.from(end);
    const endDate = new Date(endBN.toNumber() * 1000);
    console.log(startDate, endDate);

    const now = Date.now();
    if (now > endDate.getTime()) {
        //already over
        return "Complete";
    } else if (now < startDate.getTime()) {
        //hasn't started yet

        let diff = (startDate.getTime() - now) / 1000;
        diff /= 60;
        return `Opens in ${ Math.abs(Math.round(diff))} minutes`;
    } 
    //ongoing
    let diff = (endDate.getTime() - now) / 1000;
    diff /= 60;
    return `Closing in ${Math.abs(Math.round(diff))} minutes!`;

}

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}