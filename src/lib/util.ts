export function formatDate(inputDate: string) {
    if (!inputDate) {
        return "";
    }
    const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

    // Parse date parts
    const [year, month, day] = inputDate.split("-").map(Number);



    const monthStr = months[month - 1];
    const daySuffix = getDaySuffix(day);

    return `${monthStr} ${day}${daySuffix}, ${year}`;
}

// Determine suffix for the day
function getDaySuffix(d: number) {
    if (d >= 11 && d <= 13) return "th";
    switch (d % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}
