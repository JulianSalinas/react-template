import {
    ZoneId,
    Instant,
    LocalDate,
    ZoneOffset,
    LocalDateTime,
    DateTimeFormatter
} from "js-joda";

const moment = require("moment");
require("moment/locale/es");

export function getCurrentDateString(){
    return LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy"))
}

export function getCurrentTimeString(){
    return LocalDateTime.now().format(DateTimeFormatter.ofPattern("hh:m:ss"))
}

export function getDateString(datetime){
    const instant = Instant.ofEpochMilli(datetime);
    const date = LocalDateTime.ofInstant(instant);
    return date.format(DateTimeFormatter.ofPattern("dd/MM/yyyy"))
}

export function getTimeString(datetime){
    const instant = Instant.ofEpochMilli(datetime);
    const date = LocalDateTime.ofInstant(instant);
    return date.format(DateTimeFormatter.ofPattern("h:mm"))
}

export function atStartOfDay(dateTimeInMillis) {
    let instant = Instant.ofEpochMilli(dateTimeInMillis);
    let datetime = LocalDate.ofInstant(instant, ZoneId.UTC);
    let start = datetime.atStartOfDay();
    return start.toInstant(ZoneOffset.UTC).toEpochMilli();
}

export function getDifferenceInMinutes(datetimeX, datetimeY) {
    const differenceMillis = Math.abs(datetimeX - datetimeY);
    const differenceMinutes = differenceMillis / 60000; // minute
    return Math.round(differenceMinutes);
}

export function getDayString(datetime){
    const dayMoment = new moment(datetime);
    const dayString =  dayMoment.format("dddd D");
    const capital = dayString[0].toUpperCase();
    return `${capital}${dayString.substring(1, dayString.length)}`;
}