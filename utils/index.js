function encoder(code, hash) {
	
	code = code.replace(/[\u0080-\uFFFF]/g, function (s) {
        return "\\u" + ('000' + s.charCodeAt(0).toString(16)).substr(-4);
    });
	
	var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	var encoded = '';
	var j = 0;
	
	var chr1, chr2, chr3,
		com1, com2, com3,
		enc1, enc2, enc3, enc4;
		
	for (var i=0; i<code.length;) {
		chr1 = code.charCodeAt(i++);
		chr2 = code.charCodeAt(i++);
		chr3 = code.charCodeAt(i++);

		com1 = (chr1^b64chars.indexOf(hash.charAt(j)));
		com1 += j;
		if(j===hash.length-1)j=0; else j++;
		com2 = (chr2^b64chars.indexOf(hash.charAt(j)));
		com2 += j;
		if(j===hash.length-1)j=8; else j++;
		com3 = (chr3^b64chars.indexOf(hash.charAt(j)));
		com3 += j;
		if(j===hash.length-1)j=16; else j++;

		enc1 = com1 >> 2;
		enc2 = ((com1 & 3) << 4) | (com2 >> 4);
		enc3 = isNaN(com2) ? 64:(((com2 & 15) << 2) | (com3 >> 6));
		enc4 = isNaN(com3) ? 64:(com3 & 63);
		
		encoded += b64chars.charAt(enc1) + b64chars.charAt(enc2) + b64chars.charAt(enc3) + b64chars.charAt(enc4);
	}
	return encoded+"==";
}

function decoder(code, hash) {
	var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	var decoded = '';
	var j = 0;
	
	var chr1, chr2, chr3,
		com1, com2, com3,
		enc1, enc2, enc3, enc4;
		
	code = code.slice(0,-2);
		
	for (var i=0; i<code.length;) {
		enc1 = b64chars.indexOf(code.charAt(i++));
		enc2 = b64chars.indexOf(code.charAt(i++));
		enc3 = b64chars.indexOf(code.charAt(i++));
		enc4 = b64chars.indexOf(code.charAt(i++));

		chr1 = (enc1 << 2) | (enc2 >> 4);
		chr1 -= j;
		com1 = chr1^b64chars.indexOf(hash.charAt(j));
		if(j===hash.length-1)j=0; else j++;
		chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
		chr2 -= j;
		com2 = chr2^b64chars.indexOf(hash.charAt(j));
		if(j===hash.length-1)j=8; else j++;
		chr3 = ((enc3 & 3) << 6) | enc4;
		chr3 -= j;
		com3 = chr3^b64chars.indexOf(hash.charAt(j));
		if(j===hash.length-1)j=16; else j++;
		
		if(com1 !== 0) decoded = decoded + String.fromCharCode(com1);
		
		if (enc3 < 64 && com2 !== 0) decoded += String.fromCharCode(com2);
		if (enc4 < 64 && com3 !== 0) decoded += String.fromCharCode(com3);
	}
	return decoded;
}