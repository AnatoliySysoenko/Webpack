/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./statistics.ts ***!
  \***********************/
function createStatistics() {
  var counter = 0;
  var isDestroyed = false;

  var listener = function listener() {
    return counter++;
  };

  document.addEventListener('click', listener);
  return {
    destroy: function destroy() {
      document.removeEventListener('click', listener);
      isDestroyed = true;
      return 'Destroyed';
    },
    getClicks: function getClicks() {
      if (isDestroyed) return 'Statistics is destroyed';
      return counter;
    }
  };
}

window['statistics'] = createStatistics();
/******/ })()
;
//# sourceMappingURL=stat.js.map