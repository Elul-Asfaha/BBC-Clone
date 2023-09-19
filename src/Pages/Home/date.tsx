const DateComponent = () => {
    const date = new Date();
    const dayName = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wedensday",
        "Thursdau",
        "Friday",
        "Saturday",
    ];
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    return (
        <div className='flex gap-1 text-gray-600'>
            {dayName.map(
                (item, index) =>
                    index === date.getDay() && (
                        <div>{item + "," + " " + date.getDate()}</div>
                    )
            )}
            {monthNames.map(
                (item, index) => index === date.getMonth() && <div>{item}</div>
            )}
        </div>
    );
};

export default DateComponent;
