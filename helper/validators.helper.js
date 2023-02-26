
const validateNotEmpty = (received) =>{
    expect(received).not.toBeNull();
    expect(received).not.toBeUndefined();
    expect(received).toBeTruthy();
}


module.exports = {
    validateNotEmpty
}