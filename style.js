// ===============================
// ⏳ TIME TRAVEL MACHINE v1.0
// ===============================

// Example Input
const dobInput = "2002-05-01";
const degreeYears = 3;

// -------------------------------
// Helper Functions
// -------------------------------

function formatNumber(num) {
    return num.toLocaleString("en-IN");
}

function numberToWords(num) {

    if (num === 0) return "zero";

    const ones = [
        "", "one", "two", "three", "four", "five",
        "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen",
        "fifteen", "sixteen", "seventeen",
        "eighteen", "nineteen"
    ];

    const tens = [
        "", "", "twenty", "thirty", "forty",
        "fifty", "sixty", "seventy", "eighty", "ninety"
    ];

    const thousands = [
        "",
        "thousand",
        "million",
        "billion",
        "trillion",
        "quadrillion",
        "quintillion"
    ];

    function convertHundreds(n) {

        let str = "";

        if (n >= 100) {
            str += ones[Math.floor(n / 100)] + " hundred ";
            n %= 100;
        }

        if (n >= 20) {
            str += tens[Math.floor(n / 10)] + " ";
            n %= 10;
        }

        if (n > 0) {
            str += ones[n] + " ";
        }

        return str.trim();
    }

    let word = "";
    let index = 0;

    while (num > 0) {
        let chunk = num % 1000;

        if (chunk) {
            word =
                convertHundreds(chunk) +
                " " +
                thousands[index] +
                " " +
                word;
        }

        num = Math.floor(num / 1000);
        index++;
    }

    return word.trim();
}

function ageDifference(dob, today) {

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}

// -------------------------------
// Main Program
// -------------------------------

const dob = new Date(dobInput);
const now = new Date();

const age = ageDifference(dob, now);

const totalMilliseconds = now - dob;
const totalSeconds = Math.floor(totalMilliseconds / 1000);
const totalMinutes = Math.floor(totalSeconds / 60);
const totalHours = Math.floor(totalMinutes / 60);
const totalDays = Math.floor(totalHours / 24);

// School Completion
const schoolDate = new Date(dob);
schoolDate.setFullYear(schoolDate.getFullYear() + 18);

const schoolSeconds = Math.floor((schoolDate - dob) / 1000);

// Degree Completion
const degreeDate = new Date(dob);
degreeDate.setFullYear(degreeDate.getFullYear() + 18 + degreeYears);

const degreeSeconds = Math.floor((degreeDate - dob) / 1000);

// -------------------------------
// OUTPUT
// -------------------------------

console.log("==============================================");
console.log("🚀 WELCOME TO THE TIME TRAVEL MACHINE");
console.log("==============================================\n");

console.log("📅 Date of Birth :", dobInput);
console.log("🎓 Degree Duration :", degreeYears + " Years\n");

console.log("⌛ CALCULATION STEPS");
console.log("----------------------------------------------");
console.log("Current Date :", now.toLocaleString());

console.log(
    "\nAge = " +
    age.years +
    " Years, " +
    age.months +
    " Months, " +
    age.days +
    " Days"
);

console.log("\nStep 1 : Total Days Lived");
console.log("= " + formatNumber(totalDays));

console.log("\nStep 2 : Total Hours");
console.log("= Days × 24");
console.log("= " + formatNumber(totalHours));

console.log("\nStep 3 : Total Minutes");
console.log("= Hours × 60");
console.log("= " + formatNumber(totalMinutes));

console.log("\nStep 4 : Total Seconds");
console.log("= Minutes × 60");
console.log("= " + formatNumber(totalSeconds));

console.log("\n==============================================");
console.log("🎒 SCHOOL COMPLETION");
console.log("==============================================");
console.log("📆 Completion Date :", schoolDate.toDateString());
console.log("🎉 Now you have finished school.");
console.log(
    "⏱ Seconds lived when school completed :",
    formatNumber(schoolSeconds)
);

console.log("\n==============================================");
console.log("🎓 DEGREE COMPLETION");
console.log("==============================================");
console.log("📆 Completion Date :", degreeDate.toDateString());
console.log("🎉 Now you have completed your degree.");
console.log(
    "⏱ Seconds lived when degree completed :",
    formatNumber(degreeSeconds)
);

console.log("\n==============================================");
console.log("🔥 CURRENT TOTAL SECONDS LIVED");
console.log("==============================================");

console.log(formatNumber(totalSeconds) + " Seconds");

console.log("\n📝 In Words:");
console.log(numberToWords(totalSeconds) + " seconds");

console.log("\n==============================================");
console.log("⚡ TIME TRAVEL EFFECT");
console.log("==============================================");

console.log("🤯 Wait...");
console.log("⏳ Calculating every second of your existence...");
console.log("⌛ Rewinding your timeline...");
console.log("🎒 School Loaded...");
console.log("🎓 Degree Loaded...");
console.log("🚀 Jumping back to Present...");
console.log("");

console.log("💥 SHOCKING FACT 💥");
console.log(
    "You have already lived for " +
    formatNumber(totalSeconds) +
    " seconds!"
);

console.log(
    "That means your heart has beaten hundreds of millions of times..."
);

console.log("⌛ Every second is gone forever.");
console.log("🚀 Welcome back from TIME TRAVEL!");
console.log("==============================================");