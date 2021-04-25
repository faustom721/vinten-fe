/**
 * This file is to handle unwanted console logs.
 * It is important to call this file at the beginning of the app.
 */
var console = (function (oldCons) {
  let drop = process.env.NODE_ENV === 'production';
  let newCons = { ...oldCons };
  window.consol = oldCons; // A quick handle to enable all console logs again. In browser > developer tools > console tab: {window.console = window.consol}
  if (drop) {
    oldCons.log(
      '%c               ',
      'font-size:300px; background: url(https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766__340.png) no-repeat'
    );
    oldCons.log(
      '%c%s',
      'color: red; font-size: 16px;',
      "CAUTION: This space is only for Vinten's tech team. Do not run any scripts here!"
    );
    newCons.log = function () {};
    newCons.warn = function () {};
    // newCons.error = oldCons.error; // You can retain error logs if required.
  }
  return newCons;
})(window.console);
window.console = console;
