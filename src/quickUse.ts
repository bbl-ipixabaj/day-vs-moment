// happy coding 👻
import * as dayjs from 'dayjs';
import * as moment from "moment";

// ------------- dayjs plugins -------------------------

/*import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(utc);
dayjs.extend(customParseFormat);*/

console.log(moment.default().format('YYYY-MM-DD HH:MM:SS'));
console.log(dayjs.default().format('YYYY-MM-DD HH:MM:ss'));