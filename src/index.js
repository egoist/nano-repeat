export default function (char, count = 0) {
  if (count < 0) throw new RangeError(`count must be non-negative`)

  let res = ''
  count = parseInt(count, 10)
  while (count--) {
    res += char
  }

  return res
}
