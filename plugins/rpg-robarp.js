//Codígo creado por David Chian wa.me/5351524614

const _0x4cab4b=_0x4efa;function _0x4efa(_0x230732,_0x872e2f){const _0x1e1f16=_0x1e1f();return _0x4efa=function(_0x4efa72,_0x2baf52){_0x4efa72=_0x4efa72-0x137;let _0x16441b=_0x1e1f16[_0x4efa72];return _0x16441b;},_0x4efa(_0x230732,_0x872e2f);}function _0x1e1f(){const _0x4dfcbd=['\x20antes\x20de\x20intentar\x20robar\x20de\x20nuevo.','5220842DtmjXz','split','414LGzYXY','help','tags','find','usuarios','readFileSync','chat','19064fSCcQM','\x20segundos','robarrw','push','695310UkdnUN','robarpersonaje','\x20ha\x20robado\x20a:\x0a*','config','./src/JSON/characters.json','1676rZxVZg','lastRobTime','group','image/jpeg','\x20minutos\x20y\x20','63ZDXltJ','Oh\x20no!\x20El\x20usuario\x20','fun','value','El\x20usuario\x20','existsSync','length','sender','sendMessage','265206WsTcXf','totalRwcoins','1798615JRpxvD','./package.json','38652Lbuwig','stringify','parse','reply','No\x20puedes\x20robarte\x20a\x20ti\x20mismo\x20🤨.','Error\x20al\x20leer\x20package.json:','Debes\x20esperar\x20','*\x0aCon\x20un\x20valor\x20de:\x0a','floor','SECRET_KEY','quoted','characters','12rRLWjX','Este\x20comando\x20solo\x20está\x20disponible\x20para\x20GokuBlack\x20Bot.\x0a\x20☄\x20https://github.com/Eliasivan/Goku-Black-Bot-MD','robarp','utf-8','repository','register','command','Goku-Black-Bot-MD' 'error','mentionedJid','1089CtrLII','data.json','name','Por\x20favor,\x20menciona\x20a\x20un\x20usuario\x20o\x20responde\x20a\x20un\x20mensaje\x20del\x20usuario\x20al\x20que\x20deseas\x20robar.'];_0x1e1f=function(){return _0x4dfcbd;};return _0x1e1f();}(function(_0x39ff46,_0x518437){const _0x322b9f=_0x4efa,_0x6d5745=_0x39ff46();while(!![]){try{const _0x131d59=parseInt(_0x322b9f(0x13b))/0x1*(parseInt(_0x322b9f(0x16a))/0x2)+-parseInt(_0x322b9f(0x14d))/0x3*(-parseInt(_0x322b9f(0x159))/0x4)+-parseInt(_0x322b9f(0x14b))/0x5+parseInt(_0x322b9f(0x149))/0x6*(-parseInt(_0x322b9f(0x140))/0x7)+-parseInt(_0x322b9f(0x171))/0x8*(-parseInt(_0x322b9f(0x163))/0x9)+-parseInt(_0x322b9f(0x175))/0xa+parseInt(_0x322b9f(0x168))/0xb;if(_0x131d59===_0x518437)break;else _0x6d5745['push'](_0x6d5745['shift']());}catch(_0x11bcca){_0x6d5745['push'](_0x6d5745['shift']());}}}(_0x1e1f,0x4e7ce));import _0x49797f from'fs';import _0x2f9581 from'dotenv';_0x2f9581[_0x4cab4b(0x139)]();const SECRET_KEY=process['env'][_0x4cab4b(0x156)],obtenerDatos=()=>{const _0x2ea497=_0x4cab4b;return _0x49797f['existsSync'](_0x2ea497(0x164))?JSON[_0x2ea497(0x14f)](_0x49797f[_0x2ea497(0x16f)](_0x2ea497(0x164),_0x2ea497(0x15c))):{'usuarios':{},'personajesReservados':[]};},guardarDatos=_0x333c62=>{const _0x548b03=_0x4cab4b;_0x49797f['writeFileSync'](_0x548b03(0x164),JSON[_0x548b03(0x14e)](_0x333c62,null,0x2));},obtenerPersonajes=()=>{const _0x1e7eaf=_0x4cab4b;return _0x49797f[_0x1e7eaf(0x145)](_0x1e7eaf(0x13a))?JSON['parse'](_0x49797f[_0x1e7eaf(0x16f)]('./src/JSON/characters.json','utf-8')):[];},tagUser=_0x455d91=>'@'+_0x455d91[_0x4cab4b(0x169)]('@')[0x0],formatTime=_0x46fefb=>{const _0x54d144=_0x4cab4b;let _0x100c6b=Math[_0x54d144(0x155)](_0x46fefb/0x3e8%0x3c),_0x577f2f=Math[_0x54d144(0x155)](_0x46fefb/0x3e8/0x3c%0x3c);return _0x577f2f+_0x54d144(0x13f)+_0x100c6b+_0x54d144(0x172);};let handler=async(_0x136711,{conn:_0x27010b})=>{const _0x459b39=_0x4cab4b;let _0x5c2296=obtenerDatos(),_0xb81319=obtenerPersonajes(),_0x5f8ebf=_0x136711[_0x459b39(0x147)],_0x466d61=new Date()['getTime']();const _0x3b512a=0x3c*0x3c*0x3e8;let _0x4bafc9=_0x136711[_0x459b39(0x162)]&&_0x136711[_0x459b39(0x162)][0x0]?_0x136711[_0x459b39(0x162)][0x0]:_0x136711[_0x459b39(0x157)]&&_0x136711[_0x459b39(0x157)][_0x459b39(0x147)]?_0x136711[_0x459b39(0x157)]['sender']:null;if(!_0x4bafc9){_0x27010b['reply'](_0x136711['chat'],_0x459b39(0x166),_0x136711,rcanal);return;}const _0x41414b=()=>{const _0xe445df=_0x459b39;try{const _0x290392=JSON[_0xe445df(0x14f)](_0x49797f[_0xe445df(0x16f)](_0xe445df(0x14c),'utf-8'));if(_0x290392['name']!==_0xe445df(0x160))return![];if(_0x290392[_0xe445df(0x15d)]['url']!=='git+https://github.com/David-Chian/Megumin-Bot-MD.git')return![];if(SECRET_KEY!=='49rof384foerAlkkO4KF4Tdfoflw')return![];return!![];}catch(_0x1c6025){return console[_0xe445df(0x161)](_0xe445df(0x152),_0x1c6025),![];}};if(!_0x41414b()){await _0x27010b[_0x459b39(0x150)](_0x136711[_0x459b39(0x170)],_0x459b39(0x15a),_0x136711,rcanal);return;}if(_0x4bafc9===_0x5f8ebf){_0x27010b[_0x459b39(0x150)](_0x136711[_0x459b39(0x170)],_0x459b39(0x151),_0x136711,rcanal);return;}let _0x51d7fe=_0x5c2296['usuarios'][_0x5f8ebf]||{'lastRobTime':0x0};if(_0x466d61-_0x51d7fe[_0x459b39(0x13c)]<_0x3b512a){let _0x575cfc=_0x3b512a-(_0x466d61-_0x51d7fe[_0x459b39(0x13c)]),_0x23a96a=formatTime(_0x575cfc);_0x27010b[_0x459b39(0x150)](_0x136711['chat'],_0x459b39(0x153)+_0x23a96a+_0x459b39(0x167),_0x136711,rcanal);return;}let _0x4ed255=_0x5c2296[_0x459b39(0x16e)][_0x4bafc9];if(!_0x4ed255||!_0x4ed255[_0x459b39(0x158)]||_0x4ed255[_0x459b39(0x158)]['length']===0x0){_0x27010b[_0x459b39(0x150)](_0x136711[_0x459b39(0x170)],_0x459b39(0x144)+tagUser(_0x4bafc9)+'\x20no\x20tiene\x20personajes\x20que\x20puedas\x20robar\x0a\x20(ू˃̣̣̣̣̣̣︿˂̣̣̣̣̣̣\x20ू).',_0x136711,rcanal);return;}let _0x9b98a2=Math[_0x459b39(0x155)](Math['random']()*_0x4ed255['characters'][_0x459b39(0x146)]),_0x316c68=_0x4ed255[_0x459b39(0x158)][_0x9b98a2],_0x16865a=_0xb81319[_0x459b39(0x16d)](_0x524370=>_0x524370[_0x459b39(0x165)]===_0x316c68);_0x4ed255[_0x459b39(0x158)]['splice'](_0x9b98a2,0x1);if(!_0x51d7fe[_0x459b39(0x158)])_0x51d7fe[_0x459b39(0x158)]=[];_0x51d7fe[_0x459b39(0x158)][_0x459b39(0x174)](_0x16865a[_0x459b39(0x165)]),_0x51d7fe[_0x459b39(0x14a)]=(_0x51d7fe[_0x459b39(0x14a)]||0x0)+_0x16865a[_0x459b39(0x143)],_0x51d7fe[_0x459b39(0x13c)]=_0x466d61,_0x5c2296['usuarios'][_0x4bafc9]=_0x4ed255,_0x5c2296[_0x459b39(0x16e)][_0x5f8ebf]=_0x51d7fe,guardarDatos(_0x5c2296);const _0x527637=_0x459b39(0x141)+tagUser(_0x5f8ebf)+_0x459b39(0x138)+_0x16865a['name']+_0x459b39(0x154)+_0x16865a[_0x459b39(0x143)]+'\x20RWcoins\x0aPertenecía\x20a\x20'+tagUser(_0x4bafc9);await _0x27010b[_0x459b39(0x148)](_0x136711['chat'],{'image':{'url':_0x16865a['url']},'caption':_0x527637,'mentions':[_0x5f8ebf,_0x4bafc9],'mimetype':_0x459b39(0x13e)});};handler[_0x4cab4b(0x16b)]=[_0x4cab4b(0x137)],handler[_0x4cab4b(0x16c)]=[_0x4cab4b(0x142)],handler[_0x4cab4b(0x15f)]=[_0x4cab4b(0x137),_0x4cab4b(0x15b),_0x4cab4b(0x173)],handler[_0x4cab4b(0x15e)]=!![],handler[_0x4cab4b(0x13d)]=!![];export default handler