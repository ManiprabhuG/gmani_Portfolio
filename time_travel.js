// ===============================
// 🚀 TIME TRAVEL MACHINE
// Author: ChatGPT
// ===============================

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Example:
// DOB : 2002-05-15
// Degree Duration : 4

rl.question("Enter Date of Birth (YYYY-MM-DD): ", (dobInput) => {

    rl.question("Enter Degree Duration (Years): ", (degreeYears) => {

        const dob = new Date(dobInput);
        const now = new Date();

        // --------------------------
        // AGE CALCULATION
        // --------------------------

        let years = now.getFullYear() - dob.getFullYear();
        let months = now.getMonth() - dob.getMonth();
        let days = now.getDate() - dob.getDate();

        if (days < 0) {
            months--;
            const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += previousMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        const totalMilliseconds = now - dob;
        const totalSeconds = Math.floor(totalMilliseconds / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalMinutes / 60);
        const totalDays = Math.floor(totalHours / 24);

        // --------------------------
        // Number to Words
        // --------------------------

        function numberToWords(num) {

            if (num === 0) return "zero";

            const belowTwenty = [
                "", "one", "two", "three", "four", "five",
                "six", "seven", "eight", "nine", "ten",
                "eleven", "twelve", "thirteen", "fourteen",
                "fifteen", "sixteen", "seventeen",
                "eighteen", "nineteen"
            ];

            const tens = [
                "", "", "twenty", "thirty", "forty",
                "fifty", "sixty", "seventy",
                "eighty", "ninety"
            ];

            const thousands = [
                "",
                "thousand",
                "million",
                "billion",
                "trillion",
                "quadrillion"
            ];

            function helper(n) {

                if (n === 0) return "";

                if (n < 20)
                    return belowTwenty[n];

                if (n < 100)
                    return tens[Math.floor(n / 10)] +
                        (n % 10 ? " " + helper(n % 10) : "");

                if (n < 1000)
                    return helper(Math.floor(n / 100)) +
                        " hundred" +
                        (n % 100 ? " " + helper(n % 100) : "");

                return "";
            }

            let word = "";
            let i = 0;

            while (num > 0) {

                if (num % 1000 !== 0) {

                    word =
                        helper(num % 1000) +
                        " " +
                        thousands[i] +
                        " " +
                        word;
                }

                num = Math.floor(num / 1000);
                i++;
            }

            return word.trim();
        }

        // --------------------------
        // SCHOOL COMPLETION
        // --------------------------

        const schoolDate = new Date(dob);
        schoolDate.setFullYear(schoolDate.getFullYear() + 18);

        const schoolSeconds = Math.floor((schoolDate - dob) / 1000);

        // --------------------------
        // DEGREE COMPLETION
        // --------------------------

        const degreeDate = new Date(schoolDate);
        degreeDate.setFullYear(
            degreeDate.getFullYear() + Number(degreeYears)
        );

        const degreeSeconds = Math.floor((degreeDate - dob) / 1000);

        // --------------------------
        // FUN INTRO
        // --------------------------

        console.clear();

        console.log("==============================================");
        console.log("🚀        TIME TRAVEL MACHINE v1.0");
        console.log("==============================================\n");

        console.log("🔋 Charging Flux Capacitor...");
        console.log("██████████ 100%");

        console.log("\n⚡ Opening Time Portal...");
        console.log("🌀 Scanning Your Timeline...");
        console.log("⌛ Travelling Through Time...");
        console.log("📡 Connecting to the Time Server...");
        console.log("✅ Timeline Located!\n");

        console.log("==============================================");
        console.log("🧬 YOUR LIFE TIMELINE");
        console.log("==============================================\n");

        console.log("🎂 DOB :", dob.toDateString());
        console.log("📅 Today :", now.toDateString());

        console.log("\n----------------------------------------");
        console.log("CURRENT AGE");
        console.log("----------------------------------------");

        console.log(
            `🧑 ${years} Years ${months} Months ${days} Days`
        );

        console.log("\n----------------------------------------");
        console.log("STEP BY STEP CALCULATION");
        console.log("----------------------------------------");

        console.log("✔ Total Days     :", totalDays);
        console.log("✔ Total Hours    :", totalHours);
        console.log("✔ Total Minutes  :", totalMinutes);
        console.log("✔ Total Seconds  :", totalSeconds);

        console.log("\n----------------------------------------");
        console.log("🏫 SCHOOL COMPLETION");
        console.log("----------------------------------------");

        console.log("🎉 Now you have finished school.");

        console.log(
            "📅 Completion Year :",
            schoolDate.getFullYear()
        );

        console.log(
            "⏱ Seconds Lived :",
            schoolSeconds
        );

        console.log("\n----------------------------------------");
        console.log("🎓 DEGREE COMPLETION");
        console.log("----------------------------------------");

        console.log("🎉 Now you have completed your degree.");

        console.log(
            "📅 Completion Year :",
            degreeDate.getFullYear()
        );

        console.log(
            "⏱ Seconds Lived :",
            degreeSeconds
        );

        console.log("\n----------------------------------------");
        console.log("🕒 CURRENT TOTAL SECONDS");
        console.log("----------------------------------------");

        console.log(totalSeconds);

        console.log("\n📝 In Words:\n");

        console.log(
            numberToWords(totalSeconds) +
            " seconds"
        );

        console.log("\n==============================================");
        console.log("😳 WAIT...");
        console.log("==============================================");

        console.log("\nYou have been alive for...");

        console.log("\n" + totalSeconds + " seconds.");

        console.log("\nEvery second...");
        console.log("❤️ Your heart kept beating.");
        console.log("🫁 You kept breathing.");
        console.log("🧠 Your brain never stopped working.");
        console.log("⏳ Time never paused...");
        console.log("Not even for ONE second.");

        console.log("\n💀 You can never get even ONE second back.");
        console.log("⏰ Make every second count.");

        console.log("\n==============================================");
        console.log("🚀 END OF TIME TRAVEL");
        console.log("==============================================");

        rl.close();

    });

});