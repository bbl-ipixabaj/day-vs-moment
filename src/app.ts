// happy coding 👻
import * as dayjs from 'dayjs';
import * as moment from "moment";
import customParseFormat from 'dayjs/plugin/customParseFormat'
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
interface DayVsMoment {
    dayResult: any;
    momentResult: any;
}

function displayComparison(comparison: DayVsMoment) {
    const displayStr = `
                                    RESULTS

        Dayjs                         vs                    momentjs
        ------------------------------------------------------------
        ${comparison.dayResult}                                     ${comparison.momentResult}
    `; 

    console.log(displayStr);
}
const test1 = <DayVsMoment> {
    dayResult: dayjs.default().format('YYYY-MM-DD'),
    momentResult: moment.default().format('YYYY-MM-DD'),
}

const test2 = <DayVsMoment> {
    dayResult: dayjs.default().format('YYYYMMDDHHMMSSS'),
    momentResult: moment.default().format('YYYYMMDDHHMMSS'),
}

const test3 = <DayVsMoment> {
    dayResult: dayjs.default().format('MMM DD, YYYY'),
    momentResult: moment.default().format('MMM DD, YYYY')
}


const test4 = <DayVsMoment> {
    dayResult: dayjs.default('1999-21-12', 'YYYY-MM-DD', true).format('DD/MM/YYYY'),
    momentResult: moment.default('1999-21-12', 'YYYY-MM-DD').format('DD/MM/YYYY')
}

const test5 = <DayVsMoment> {
    dayResult: dayjs.default('22/03/1997', ['DD/MM/YYYY']).format('YYYY-MM-DD'),
    momentResult: moment.default('22/03/1997', ['DD/MM/YYYY']).format('YYYY-MM-DD')
}

const test6 = <DayVsMoment> {
    dayResult: dayjs.default().subtract(24, 'month') .format('YYYY-MM-DD'),
    momentResult: moment.default().subtract(24, 'months').format('YYYY-MM-DD')
}

//moment(new Date().toDateString()).format("dddd, MMMM Do");
const test7 = <DayVsMoment> {
    dayResult: dayjs.default().format("dddd, MMMM Do"),
    momentResult: moment.default().format("dddd, MMMM Do")
}
//moment(x.createdOn).format('DD/MM/YY')
const test8 = <DayVsMoment> {
    dayResult: dayjs.default().format("DD/MM/YY"),
    momentResult: moment.default().format('DD/MM/YY')
}

const test9 = <DayVsMoment> {
    dayResult: dayjs.default().format("DD/MM/YY"),
    momentResult: moment.default().format('DD/MM/YY')
}
const tests: DayVsMoment[] = [test1, test2, test3, test4, test5, test6, test7, test8, test9];

for (const test of tests) {
    displayComparison(test);
}
console.log(moment.default().format("dddd, MMMM Do"))