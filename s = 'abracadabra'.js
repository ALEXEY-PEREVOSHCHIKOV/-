s = 'abracadabra'
alph = new Array();
for (i = 0; i < s.length; i++) {
	if (alph[s.charAt(i)])
		alph[s.charAt(i)]++;
	else
		alph[s.charAt(i)] = 1;
}
powerofalph = 0;
for (i in alph) {
	alph[i] /= s.length;
	powerofalph++;
}
entropia = 0;
for (i in alph) {
	entropia -= alph[i] * Math.log(alph[i]);
}
entropia /= Math.log(powerofalph)
console.log(entropia);