export default {
    formatNumber: (n) => {
        const str = n.toString();
        return str[1] ? str : '0' + str;
    },
    parseFullDay: (day) => {
        const date = new Date();
        date.setHours(0, 0, 0, 0);
        const dayArray = day.split('-');
        date.setFullYear(parseInt(dayArray[0]), parseInt(dayArray[1]) - 1, parseInt(dayArray[2]));
        return date;
    }
}