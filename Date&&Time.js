//  DATA AND TIME ####################################################################################
const getMonth = () => {
  let currentDate = new Date(),
    result = [],
    arr = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    Month = currentDate.getMonth();
  result.push(arr[Month]);
  return result;
};

const getDaysOfWeek = () => {
  let currentDate = new Date(),
    result = [],
    arr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    Day = currentDate.getDay() - 1;
  result.push(arr[Day]);
  return result;
};

class Age {
  constructor(input) {
    this.input = input;
    this.currentDate = new Date();
    this.Year = this.currentDate.getFullYear();
    this.Date = this.currentDate.getDate();
    this.Month = this.currentDate.getMonth();
    this.Hours = Math.floor(this.currentDate.getHours());
    this.Minutes = this.currentDate.getMinutes();
    this.Seconds = this.currentDate.getSeconds();
  }
  speak() {
    let years = this.Year - this.input;
    console.log(`You are ${this.Year - this.input} years old`);
    console.log(`You were born in ${this.Year - years}`);
  }

  Time(line) {
    const zeroPad = (number) => {
      let string = String(number);
      string < 10 ? (string = "0" + string) : string;
      return string;
    };
    this.Hours % 12 === 0
      ? console.log(
          `${zeroPad((this.Hours % 12) + 12)}:${zeroPad(
            this.Minutes
          )}:${zeroPad(this.Seconds)} ${line}`
        )
      : console.log(
          `${zeroPad(this.Hours % 12)}:${zeroPad(this.Minutes)}:${zeroPad(
            this.Seconds
          )} ${line}`
        );

    console.log(`${getDaysOfWeek()}-${getMonth()}-${this.Year}`);
    console.log(`${this.currentDate.toLocaleDateString()}`);
  }
}
let Get2 = new Age(Number(prompt("Year")));
Get2.speak();

class Timer extends Age {
  Run() {
    if (this.Hours == 24 || this.Hours <= 11) {
      Get2.Time("AM Good Morning");
      Get2.speak();
    } else if (this.Hours === 12 || this.Hours <= 15) {
      Get2.Time("PM Good Afternoon");
      Get2.speak();
    } else if (this.Hours > 15 && this.Hours < 20) {
      Get2.Time("PM Good Evening");
      Get2.speak();
    } else {
      Get2.Time("PM Good Night");
      Get2.speak();
    }
  }
}
let runTimer = new Timer();
