const setFooterYear = () => {
    const currentDate = new Date();
    const year = document.getElementById('year');
    year.textContent = currentDate.getFullYear();
};

const getFullDate = currentDate => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dayOfMonth = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const day = days[currentDate.getDay()]
    const year = currentDate.getFullYear();
    const fullDate = `${day}, ${dayOfMonth} ${month} ${year}`;
    return fullDate;
};

const getFullTime = currentDate => {
    const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : currentDate.getHours();
    const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : currentDate.getMinutes();
    const seconds = currentDate.getSeconds() < 10 ? `0${currentDate.getSeconds()}` : currentDate.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
};
setFooterYear();

const displayDateTime = () => {
    const currentDate = new Date();
    let date = getFullDate(currentDate);
    let time = getFullTime(currentDate);
    document.getElementById('date').textContent = `${date} - ${time}`;
};
setInterval(displayDateTime, 1000);