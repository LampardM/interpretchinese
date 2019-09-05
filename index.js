/*
 * @Description: 中文转拼音首字
 * @Author: longzhang6
 * @Date: 2019-09-04 10:56:18
 * @LastEditors: longzhang6
 * @LastEditTime: 2019-09-04 16:41:47
 */
import { PinYin } from './config'

class InterpretChinese {
  constructor() {}

  /**
   * @description: 判断是否为中文
   * @param {String}
   * @return: 中文返回true，其他返回false
   */
  isChinese(str) {
    var entryVal = str
    var cnChar = entryVal.match(/[^\x00-\x80]/g)
    if (cnChar != null && cnChar.length > 0) return true
    return false
  }

  /**
   *
   * @param str 字
   * @returns {*} 结果
   */
  arraySearch(str) {
    for (var name in PinYin) {
      if (PinYin[name].indexOf(str) != -1) {
        return name
        break
      }
    }
    return false
  }

  /**
   * @description: 获取拼音
   * @param {String} str 获取拼音的字符串
   * @param {String} split 拼音分隔符
   * @param {String} uppercase 是否转为大写
   * @return:
   */
  getTranscription(str, split, uppercase, first = false) {
    split = split || ' '
    uppercase = uppercase || false
    var l2 = str.length
    var result = ''
    var reg = new RegExp('^[^\u4e00-\u9fa5]')
    var val
    var name
    for (var i = 0; i < l2; i++) {
      val = str.substr(i, 1)
      if (this.isChinese(val)) {
        name = this.arraySearch(val)
        if (reg.test(val)) {
          result += split + val
        } else if (name !== false) {
          if (first) {
            result += split + name.substring(0, 1)
          } else {
            result += split + name
          }
        }
      } else {
        result += val
      }
    }
    if (uppercase) result = result.toUpperCase()
    result = result.replace(split, '')
    return result.trim()
  }
}

export default new InterpretChinese()
