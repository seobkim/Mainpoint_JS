var parser = new DOMparser() ;
//새 DomParser 객체 생성
var xml_Str = xml_형식문자열;

var xmlDoc=parser.parseFromString(xml_Str,"text/xml");
HTML 파서 또는 XML 파서를 사용하여 문자열을 구문 분석하여 HTMLDocument 또는 XMLDocument 를 반환합니다 .

var feature = xmlDoc.getElementsByTagName('태그이름');

var xml_Str = new XMLSerializer().serializeToString(feature);
//XML 텍스트로 직렬화

JSON.parse()
string 객체를 json 객체로 변환

JSON.stringify()
json 객체를 String 객체로 변환



