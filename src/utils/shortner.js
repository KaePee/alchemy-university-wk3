function shorten (address) {
    const newAddr = address.slice(0, 5) + "..." + address.slice(-4);
    return newAddr;
}

export default shorten;