//@ts-check
'use strict'

/**
 * can handle status codes and default message as per range
 * handled using switch for now but can be handled using if with ranges
 */
exports.handleResponse  = (res, statusCode, message='No response found', data=null) => {
  if(statusCode>=200 && statusCode <=300){
    return res.status(statusCode).json({ success: true, message, data })
  } else if(statusCode >= 400 && statusCode <=500) {
    return res.status(statusCode).json({ success: false, message, data })
  } else {
    return res.status(statusCode).json({ success: false, message, data })
  }

  }
  
