const { sum, sortAsc, sortDesc, clone } = require('./array')
const { setItem, getItem } = require('./localstorage')
const { ucFirst, wcUpper, rstring, upper } = require('./string')

const str = {
  ucFirst,
  wcUpper,
  rstring,
  upper,
}

const ls = {
  setItem,
  getItem,
}

const arr = {
  sum,
  sortAsc,
  sortDesc,
  clone,
}

module.exports = {
  str,
  ls,
  arr,
}
