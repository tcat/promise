promise
=======

Deferred object (Promise) +Arrays
/*****************************************************************************************/
/*  																					 */
/*	Объект Request																		 */
/*																						 */
/*   getXmlHttp - метод, создающий объект XMLHttpRequest. Для  IE>=7, FF, Chrome, Opera, */
/*  Safari создание экземпляра объекта  XMLHttpRequest осуществляется через встроенный   */
/*  объект XMLHttpRequest. Для IE 5, 6 создание экземпляра объекта  XMLHttpRequest       */
/*  осуществляется через ActiveXObject.													 */ 
/*																						 */
/*   SendRequest - метод, создающий объект Deferred. Метод отправляет асинхронный POST   */
/*  или GET запрос. Входные параметры RequestType,url. RequestType - тип запроса("POST"  */  
/*  или "GET"). url -  адрес запроса. Возвращает Promise-объект                          */
/*																						 */
/*  get - метод, осуществляющий асинхронный GET - запрос				    			 */
/*																						 */
/*  post - метод, осуществляющий асинхронный POST - запрос                               */
/*																						 */
/*																						 */
/*	Примеры использования																 */
/*																						 */
/*  Request.get('promise.js').then(														 */
/*	  function complete(xhr){															 */
/*			console.info(xhr.responseText);												 */
/*	  },																				 */
/*	  function error(err){																 */
/*			 console.error(err.statusText);												 */
/*	  },																				 */
/*	  function progress(xhr){															 */
/*			console.info(xhr.readyState);												 */
/*	  }																					 */
/* 	); 																					 */
/*																						 */
/*	Request.post('promise.js').then(													 */
/*	  function complete(xhr){															 */
/*			console.info(xhr.responseText);												 */
/*	  }, 																				 */
/*	  function error(err){	       														 */
/*			 console.error(err.statusText);												 */
/*	  },																				 */
/*	  function progress(xhr){															 */
/*			console.info(xhr.readyState);												 */
/*	  }																					 */
/*  );																					 */
/*																						 */
/*****************************************************************************************/
