function writeCards(names, event) {
    const messages = []
    for (let name of names) {
        messages.push(`Thank you, ${name}, for the wonderful ${event} gift!`);
    }
    return messages;
}
function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}