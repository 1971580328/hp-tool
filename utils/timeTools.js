/**
 * 时间转换成字符串
 * @param {Date} date 时间
 * @param {String} cFormat 时间格式
 * @param {Boolean} week 周
 * */
export const formatTime = (time, cFormat, week) => {
  if (arguments.length === 0) {
    return null
  }
  if (('' + time).length === 10) time = parseInt(time) * 1000 // 秒转毫秒
  const date = new Date(time)
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let YYYY = date.getFullYear()
  let MM = date.getMonth() + 1
  MM = MM < 10 ? '0' + MM : MM
  let DD = date.getDate()
  DD = DD < 10 ? '0' + DD : DD
  let hh = date.getHours()
  hh = hh < 10 ? '0' + hh : hh
  let mm = date.getMinutes()
  mm = mm < 10 ? '0' + mm : mm
  let ss = date.getSeconds()
  ss = ss < 10 ? '0' + ss : ss
  let timeStr
  switch (format) {
    case 'YYYY':
    case 'yyyy':
      timeStr = YYYY
      break
    case 'MM':
    case 'mm':
      timeStr = MM
      break
    case 'DD':
    case 'dd':
      timeStr = DD
      break
    case 'hh':
    case 'HH':
      timeStr = hh
      break
    case 'mm':
    case 'MM':
      timeStr = mm
      break
    case 'ss':
    case 'SS':
      timeStr = ss
      break
    case 'yyyy-mm-dd':
    case 'YYYY-MM-DD':
      timeStr = `${YYYY}-${MM}-${DD}`
      break
    case 'HH:mm:ss':
    case 'HH:MM:SS':
    case 'hh:mm:ss':
      timeStr = `${hh}:${mm}:${ss}`
      break
    default:
      timeStr = `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}`
  }
  if (week && (format.indexOf('yyyy-mm-dd') !== '-1' || format.indexOf('YYYY-MM-DD') !== '-1')) {
    // 根据time判断是星期几
    const days = ['日', '一', '二', '三', '四', '五', '六']
    const dayOfWeek = days[date.getDay()]
    return {
      timeStr,
      week: `星期${dayOfWeek}`
    }
  }
  return {
    timeStr
  }
}
