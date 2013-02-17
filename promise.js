/*****************************************************************************************/
/*																						 */
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

Request ={
	getXmlHttp:function() {
	  if (typeof XMLHttpRequest === 'undefined') {
		XMLHttpRequest = function() {
		  try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
			catch(e) {}
		  try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
			catch(e) {}
		  try { return new ActiveXObject("Msxml2.XMLHTTP"); }
			catch(e) {}
		  try { return new ActiveXObject("Microsoft.XMLHTTP"); }
			catch(e) {}
		  throw new Error("This browser does not support XMLHttpRequest.");
		};
	  }
	  return new XMLHttpRequest();
	},
	SendRequest:function(RequestType,url){
		var Promise=$.Deferred();
		var request = Request.getXmlHttp();
		request.open(RequestType, url, true);
		request.send(null); 
		request.onreadystatechange = function() {
			if (request.readyState==4) {
				if (request.status==200) {
					Promise.resolve(request);
				} else {
					Promise.reject(request);
				}
			}
			else Promise.notify(request);
		}
		return Promise;
	
	},
	get:function(url){
		return Request.SendRequest("GET",url).promise();	
	},
	post:function(url){
		return Request.SendRequest("POST",url).promise();	
	}
}