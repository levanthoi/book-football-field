/* eslint-disable prefer-template */
/* eslint-disable no-console */
/* eslint-disable no-sparse-arrays */
/* eslint-disable no-var */
/* eslint-disable import/no-mutable-exports */
var styles = [
  ,
  // 'background: linear-gradient(#b4ddb4, #002400)'
  // , 'border: 1px solid #3E0E02'
  'color: green',
  // , 'display: block'
  'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)',
  // , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
  // , 'line-height: 40px'
  // , 'text-align: center'
  'font-weight: bold',
].join(';');

const dev = process.env.NODE_ENV !== 'production';
// dev = true

const log = (title, ...args) => {
  // console.log('process.env.NODE_ENV', process.env.NODE_ENV);
  if (dev) {
    // console.log('process.env.NODE_ENV 1', process.env.NODE_ENV);
    // console.log('%c ' + title, styles, ...args);
  }
};

log.group = (groupTitle) => {
  if (dev) {
    console.group('%c ' + groupTitle, 'color: #FFA500;');
  }
};

log.groupEnd = () => {
  if (dev) {
    console.groupEnd();
  }
};

export default log;
