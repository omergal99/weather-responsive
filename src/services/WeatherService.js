const days = [
    {
        _id: '101',
        name: 'sunday',
        img: 'assets/img/icons/cloudy.png',
        temp: [23, 16],
        title: 'cloudy'
    },
    {
        _id: '102',
        name: 'monday',
        img: 'assets/img/icons/sunny.png',
        temp: [26, 19],
        title: 'sunny'
    },
    {
        _id: '103',
        name: 'tuesday',
        img: 'assets/img/icons/rain.png',
        temp: [20, 12],
        title: 'rain'
    },
    {
        _id: '104',
        name: 'wednesday',
        img: 'assets/img/icons/cloudy.png',
        temp: [14, 6],
        title: 'cloudy'
    },
    {
        _id: '105',
        name: 'thursday',
        img: 'assets/img/icons/sunny.png',
        temp: [22, 34],
        title: 'sunny'
    },
    {
        _id: '106',
        name: 'friday',
        img: 'assets/img/icons/rain.png',
        temp: [12, 20],
        title: 'rain'
    },
    {
        _id: '107',
        name: 'saturday',
        img: 'assets/img/icons/cloudy.png',
        temp: [16, 29],
        title: 'cloudy'
    },
    {
        _id: '101',
        name: 'sunday',
        img: 'assets/img/icons/cloudy.png',
        temp: [23, 16],
        title: 'cloudy'
    },
    {
        _id: '102',
        name: 'monday',
        img: 'assets/img/icons/sunny.png',
        temp: [26, 19],
        title: 'sunny'
    },
    {
        _id: '103',
        name: 'tuesday',
        img: 'assets/img/icons/rain.png',
        temp: [20, 12],
        title: 'rain'
    }
]


function getThreeDays(numberPage) {
    const today = new Date().getDay() + (numberPage ? 3 : 0);
    const threeDays = [days[today + 1], days[today + 2], days[today + 3]];
    return Promise.resolve(threeDays)
}

export default {
    getThreeDays
}