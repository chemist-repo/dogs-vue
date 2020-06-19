/**
 * @param {String|Number} prop
 * @param {String|Number} defaultProp
 * @param {Array} propsList
 * @return {String|Number}
 */

export default function (prop, defaultProp, propsList) {
  if (!propsList.includes(prop)) {
    // eslint-disable-next-line no-console
    console.warn(
      `Not found parameter "${prop}" in settings - ${JSON.stringify(propsList)}`
    )
    return defaultProp
  }
  return prop
}
