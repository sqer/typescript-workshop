export enum WeekDay {SUNDAY = 0, MONDAY = 1, TUESDAY = 2, WEDNESDAY = 3, THURSDAY = 4, FRIDAY = 5, SATURDAY = 6}

/*
 * $Required
 * Usage:
 * sexString(0) => "FEMALE"
 */
function sexString(sex){

}

/*
 * $Required
 * Usage:
 * sexNumber(Sex.FEMALE) => 0
 */
function sexNumber(sex){

}

export function enumsApp() {
   let day: WeekDay = WeekDay.SATURDAY;
   console.log("day:", day, "name:", WeekDay[day]);
  
  // console.log("name:",sexString(0));
  // console.log("number:",sexNumber(Sex.FEMALE));

}
