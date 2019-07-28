var svgObject = document.getElementById('fundo').contentDocument;
var element = svgObject.getElementById('b1');
var y = parseFloat(element.getAttributeNS(null, 'y'));
element.setAttributeNS(null, 'y', y + 10);

