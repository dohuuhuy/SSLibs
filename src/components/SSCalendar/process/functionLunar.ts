/* eslint-disable id-length */
/* eslint-disable prefer-const */
import { chunk, range } from 'lodash';

export const LOCAL_TIMEZONE = 7.0;

export const INT = (d = 0) => {
  return Math.floor(d);
};

export const MOD = (x = 0, y = 0) => {
  let z = x - y * Math.floor(x / y);
  if (z === 0) {
    z = y;
  }
  return z;
};

export const UniversalFromJD = (JD = 0) => {
  let Z;
  let A;
  let B;
  let C;
  let D;
  let E;
  let F;
  let alpha;
  let dd;
  let mm;
  let yyyy;

  Z = INT(JD + 0.5);
  F = JD + 0.5 - Z;

  if (Z < 2299161) {
    A = Z;
  } else {
    alpha = INT((Z - 1867216.25) / 36524.25);
    A = Z + 1 + alpha - INT(alpha / 4);
  }
  B = A + 1524;
  C = INT((B - 122.1) / 365.25);
  D = INT(365.25 * C);
  E = INT((B - D) / 30.6001);
  dd = INT(B - D - INT(30.6001 * E) + F);
  if (E < 14) {
    mm = E - 1;
  } else {
    mm = E - 13;
  }
  if (mm < 3) {
    yyyy = C - 4715;
  } else {
    yyyy = C - 4716;
  }
  return { dd, mm, yyyy };
};

export const UniversalToJD = (D = 0, M = 0, Y = 0) => {
  let JD;
  if (
    Y > 1582 ||
    (Y === 1582 && M > 10) ||
    (Y === 1582 && M === 10 && D > 14)
  ) {
    JD =
      367 * Y -
      INT((7 * (Y + INT((M + 9) / 12))) / 4) -
      INT((3 * (INT((Y + (M - 9) / 7) / 100) + 1)) / 4) +
      INT((275 * M) / 9) +
      D +
      1721028.5;
  } else {
    JD =
      367 * Y -
      INT((7 * (Y + 5001 + INT((M - 9) / 7))) / 4) +
      INT((275 * M) / 9) +
      D +
      1729776.5;
  }
  return JD;
};

export const LocalFromJD = (JD = 0) => {
  return UniversalFromJD(JD + LOCAL_TIMEZONE / 24.0);
};
export const LocalToJD = (D = 0, M = 0, Y = 0) => {
  return UniversalToJD(D, M, Y) - LOCAL_TIMEZONE / 24.0;
};

export const { PI } = Math;

export const NewMoon = (k = 0) => {
  const T = k / 1236.85;
  const T2 = T * T;
  const T3 = T2 * T;
  const dr = PI / 180;
  let Jd1 = 2415020.75933 + 29.53058868 * k + 0.0001178 * T2 - 0.000000155 * T3;
  Jd1 = Jd1 + 0.00033 * Math.sin((166.56 + 132.87 * T - 0.009173 * T2) * dr); // Mean new moon
  const M = 359.2242 + 29.10535608 * k - 0.0000333 * T2 - 0.00000347 * T3; // Sun's mean anomaly
  const Mpr = 306.0253 + 385.81691806 * k + 0.0107306 * T2 + 0.00001236 * T3; // Moon's mean anomaly
  const F = 21.2964 + 390.67050646 * k - 0.0016528 * T2 - 0.00000239 * T3; // Moon's argument of latitude
  let C1 =
    (0.1734 - 0.000393 * T) * Math.sin(M * dr) + 0.0021 * Math.sin(2 * dr * M);
  C1 = C1 - 0.4068 * Math.sin(Mpr * dr) + 0.0161 * Math.sin(dr * 2 * Mpr);
  C1 = C1 - 0.0004 * Math.sin(dr * 3 * Mpr);
  C1 = C1 + 0.0104 * Math.sin(dr * 2 * F) - 0.0051 * Math.sin(dr * (M + Mpr));
  C1 =
    C1 -
    0.0074 * Math.sin(dr * (M - Mpr)) +
    0.0004 * Math.sin(dr * (2 * F + M));
  C1 =
    C1 -
    0.0004 * Math.sin(dr * (2 * F - M)) -
    0.0006 * Math.sin(dr * (2 * F + Mpr));
  C1 =
    C1 +
    0.001 * Math.sin(dr * (2 * F - Mpr)) +
    0.0005 * Math.sin(dr * (2 * Mpr + M));
  let deltat;
  if (T < -11) {
    deltat =
      0.001 +
      0.000839 * T +
      0.0002261 * T2 -
      0.00000845 * T3 -
      0.000000081 * T * T3;
  } else {
    deltat = -0.000278 + 0.000265 * T + 0.000262 * T2;
  }
  const JdNew = Jd1 + C1 - deltat;
  return JdNew;
};

export const SunLongitude = (jdn = 0) => {
  const T = (jdn - 2451545.0) / 36525; // Time in Julian centuries from 2000-01-01 12:00:00 GMT
  const T2 = T * T;
  const dr = PI / 180; // degree to radian
  const M = 357.5291 + 35999.0503 * T - 0.0001559 * T2 - 0.00000048 * T * T2; // mean anomaly, degree
  const L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2; // mean longitude, degree
  let DL = (1.9146 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M);
  DL =
    DL +
    (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M) +
    0.00029 * Math.sin(dr * 3 * M);
  let L = L0 + DL; // true longitude, degree
  L = L * dr;
  L = L - PI * 2 * INT(L / (PI * 2)); // Normalize to (0, 2*PI)
  return L;
};

export const LunarMonth11 = (Y = 0) => {
  const off = LocalToJD(31, 12, Y) - 2415021.076998695;
  const k = INT(off / 29.530588853);
  let jd = NewMoon(k);
  const ret = LocalFromJD(jd);
  const sunLong = SunLongitude(LocalToJD(ret.dd, ret.mm, ret.yyyy)); // sun longitude at local midnight
  if (sunLong > (3 * PI) / 2) {
    jd = NewMoon(k - 1);
  }
  return LocalFromJD(jd);
};

export const initLeapYear = (ret: any) => {
  const sunLongitudes = [ret.length];
  for (let index = 0; index < ret.length; index++) {
    const a = ret[index];
    const jdAtMonthBegin = LocalToJD(a[0], a[1], a[2]);
    sunLongitudes[index] = SunLongitude(jdAtMonthBegin);
  }
  let found = false;
  for (let index = 0; index < ret.length; index++) {
    if (found) {
      ret[index][3] = MOD(index + 10, 12);
      continue;
    }
    const sl1 = sunLongitudes[index];
    const sl2 = sunLongitudes[index + 1];
    const hasMajorTerm =
      Math.floor((sl1 / PI) * 6) !== Math.floor((sl2 / PI) * 6);
    if (!hasMajorTerm) {
      found = true;
      ret[index][4] = 1;
      ret[index][3] = MOD(index + 10, 12);
    }
  }
};

export const LunarYear = (Y = 0) => {
  let ret: any = chunk(range(13 * 5), 5);
  const month11A = LunarMonth11(Y - 1);
  const jdMonth11A = LocalToJD(month11A.dd, month11A.mm, month11A.yyyy);
  const k = Math.floor(0.5 + (jdMonth11A - 2415021.076998695) / 29.530588853);
  const month11B = LunarMonth11(Y);
  const off = LocalToJD(month11B.dd, month11B.mm, month11B.yyyy) - jdMonth11A;

  const leap = off > 365.0;

  if (!leap) {
    ret = chunk(range(13 * 5), 5);
  }

  ret[0] = [month11A.dd, month11A.mm, month11A.yyyy, 0, 0];
  ret[ret.length - 1] = [month11B.dd, month11B.mm, month11B.yyyy, 0, 0];
  for (let index = 1; index < ret.length - 1; index++) {
    const nm = NewMoon(k + index);
    const a = LocalFromJD(nm);
    ret[index] = [a.dd, a.mm, a.yyyy, 0, 0];
  }
  for (let index = 0; index < ret.length; index++) {
    ret[index][3] = MOD(index + 11, 12);
  }
  if (leap) {
    initLeapYear(ret);
  }
  return ret;
};

// dương sang âm
export const Solar2Lunar = (D = 0, M = 0, Y = 0) => {
  let yy = Y;
  let ly = LunarYear(Y);

  const month11 = ly[ly.length - 1];
  const jdToday = LocalToJD(D, M, Y);
  const jdMonth11 = LocalToJD(month11[0], month11[1], month11[2]);
  if (jdToday >= jdMonth11) {
    ly = LunarYear(Y + 1);
    yy = Y + 1;
  }
  let index = Number(ly.length - 1);
  while (jdToday < LocalToJD(ly[index][0], ly[index][1], ly[index][2])) {
    index--;
  }
  const dd = jdToday - LocalToJD(ly[index][0], ly[index][1], ly[index][2]) + 1;
  const mm = ly[index][3];
  if (mm >= 11) {
    yy--;
  }
  const ix = ly[index][4];
  return {
    dd,
    mm,
    yy,
    ix,
    LLLL: `${dd}/${mm}/${yy}`,
    DM: `${dd}/${mm}`,
  };
};

// âm sang dương
export const Lunar2Solar = (D = 0, M = 0, Y = 0, leap = 0) => {
  let yy = Y;
  if (M >= 11) {
    yy = Y + 1;
  }
  const lunarYear = LunarYear(yy);
  let lunarMonth = null;

  for (const index of lunarYear) {
    const lm = lunarYear[index];
    if (lm[3] === M && lm[4] === leap) {
      lunarMonth = lm;
      break;
    }
  }
  if (lunarMonth != null) {
    const jd = LocalToJD(lunarMonth[0], lunarMonth[1], lunarMonth[2]);
    return LocalFromJD(jd + D - 1);
  } else {
    return null;
  }
};
