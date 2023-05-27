const currentDate = new Date();

const setFooterYear = () => {
    const year = document.getElementById('year');
    year.textContent = currentDate.getFullYear();
};

const getFullDate = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dayOfMonth = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const day = days[currentDate.getDay()]
    const year = currentDate.getFullYear();
    const fullDate = `${day}, ${dayOfMonth} ${month} ${year}`;
    return fullDate;
};

setFooterYear();
document.getElementById('date').textContent = getFullDate();