//var _0x61dd = ['.campo:nth-child(13)', '-7%', 'images/matrizAct.png', '#circuloOcho', '12%', '#proyectos', 'borrarProyecto', 'Si\x20elimina\x20el\x20proyecto\x20...\x20,\x20perderá\x20toda\x20la\x20información\x20sobre\x20este.', 'warning', '#d33', 'Si,\x20Eliminar', 'No,\x20Cancelar!', 'btn\x20btn-success', 'btn\x20btn-danger', 'EliminarProyecto', 'Tu\x20proyecto\x20ha\x20sido\x20borrado.', 'DeshabilitarCirculos', 'ConsultarProyectos', 'salio\x20mal', 'Eliminado', 'El\x20proyecto\x20ha\x20sido\x20eliminado!', 'error', 'MenuController', '$scope', '$rootScope', 'MenuService', '$cookies', '$cookieStore', '$routeParams', 'DatosBasicos', 'attr', 'value', 'Debe\x20abrir\x20un\x20proyecto\x20o\x20\x20crear\x20uno\x20nuevo', '#238276', '25%', 'then', '#misProyectos', 'toggle', 'slow', 'url', 'Matriz', 'Debes\x20culminar\x20el\x20paso\x20anterior', 'proyecto', 'datos', 'Etapa', 'consultarMatriz', 'success', '/Matriz', 'El\x20árbol\x20esta\x20hecho', 'Arbol', '#iconoTres', '/ArbolProblema', 'reload', 'ArbolObjetivos', '#iconoCuatro', '/Objetivos', 'Involucrados', '#iconoCinco', '/Involucrados', '#iconoSeis', '/PerfilProyecto', '#iconoSiete', '/Cronograma', 'MarcoLogico', '#iconoOcho', '/MarcoL', '.icono-menu', 'click', '.sobre-menu-principal', 'fadeIn', '.menu-principal', 'animate', 'fadeOut', '-1000px', 'globals', 'currentUser', 'Proyectos', 'proyectos', 'InicioProyecto', 'CrearProyecto', 'nombreProyecto', '#circuloUno', 'css', 'rgba(13,\x20132,\x20126,\x200.24)', '50%', '#iconoUno', 'src', 'images/datosBasicosAct.png', '#flechaUno', 'AbrirProyecto', 'remove', 'Proyecto', 'TemaProyecto', 'IdUsuario', 'putObject', 'datosProyecto', 'get', 'EtapasProyecto', 'IdProyecto', '#circuloDos', 'rgb(255,255,255)', '#iconoDos', '#flechaDos', 'fast', '#circuloTres', 'images/arbolProb.png', '#flechaTres', '#circuloCuatro', 'images/arbol.png', '#circuloCinco', 'images/perfil.png', '#flechaCinco', '#circuloSeis', 'images/grafica.png', '#flechaSeis', '#circuloSiete', 'images/calendario.png', '#flechaSiete', 'images/matriz.png', '#flechaOcho', 'animated\x20rotateIn', '.campo:nth-child(1)', 'images/lluviaIdeasAct.png', 'addClass', '.campo:nth-child(3)', '10%', 'images/arbolAct.png', '#flechaCuatro', '.campo:nth-child(7)', '60%', 'images/perfilAct.png', '34%', 'images/graficaAct.png', '.campo:nth-child(11)', 'images/calendarioAct.png']; (function (_0x56fe98, _0x43dc16) { var _0x212f4f = function (_0xc3427d) { while (--_0xc3427d) { _0x56fe98['push'](_0x56fe98['shift']()); } }; _0x212f4f(++_0x43dc16); }(_0x61dd, 0x9d)); var _0xd61d = function (_0x2e748c, _0x55ec8e) { _0x2e748c = _0x2e748c - 0x0; var _0x37e219 = _0x61dd[_0x2e748c]; return _0x37e219; }; ManualApp['controller'](_0xd61d('0x0'), [_0xd61d('0x1'), _0xd61d('0x2'), '$location', _0xd61d('0x3'), _0xd61d('0x4'), _0xd61d('0x5'), _0xd61d('0x6'), '$sce', function (_0x10d950, _0x42feb2, _0x4187cc, _0x544025, _0x147f45, _0x2c55a4, _0x234833, _0x401c82) { _0x10d950[_0xd61d('0x7')] = function () { var _0x3b95ab = $('#iconoUno')[_0xd61d('0x8')](_0xd61d('0x9')); if (_0x3b95ab == '1') { swal({ 'text': _0xd61d('0xa'), 'confirmButtonColor': _0xd61d('0xb'), 'width': _0xd61d('0xc'), 'allowOutsideClick': ![] })[_0xd61d('0xd')](function () { $(_0xd61d('0xe'))[_0xd61d('0xf')](_0xd61d('0x10')); }); } else { _0x4187cc[_0xd61d('0x11')]('/InfoBasica'); } }; _0x10d950[_0xd61d('0x12')] = function () { var _0x36f7f0 = $('#iconoDos')[_0xd61d('0x8')](_0xd61d('0x9')); if (_0x36f7f0 == 0x1) { swal({ 'text': _0xd61d('0x13'), 'confirmButtonColor': _0xd61d('0xb'), 'width': _0xd61d('0xc'), 'allowOutsideClick': ![] }); } else if (_0x42feb2[_0xd61d('0x14')][_0xd61d('0x15')][_0xd61d('0x16')] > 0x2) { _0x544025[_0xd61d('0x17')](_0x42feb2[_0xd61d('0x14')]['datos']['id'], function (_0x20d236) { if (_0x20d236[_0xd61d('0x18')]) { _0x4187cc['url'](_0xd61d('0x19')); } else { swal({ 'text': _0xd61d('0x1a'), 'confirmButtonColor': '#238276', 'width': '25%', 'allowOutsideClick': ![] }); } }); } else { _0x4187cc[_0xd61d('0x11')](_0xd61d('0x19')); } }; _0x10d950[_0xd61d('0x1b')] = function () { var _0x1acda7 = $(_0xd61d('0x1c'))[_0xd61d('0x8')](_0xd61d('0x9')); if (_0x1acda7 == 0x1) { swal({ 'text': _0xd61d('0x13'), 'confirmButtonColor': '#238276', 'width': _0xd61d('0xc'), 'allowOutsideClick': ![] }); } else { _0x4187cc['url'](_0xd61d('0x1d')); location[_0xd61d('0x1e')](); } }; _0x10d950[_0xd61d('0x1f')] = function () { var _0x2421d0 = $(_0xd61d('0x20'))[_0xd61d('0x8')](_0xd61d('0x9')); if (_0x2421d0 == 0x1) { swal({ 'text': _0xd61d('0x13'), 'confirmButtonColor': _0xd61d('0xb'), 'width': _0xd61d('0xc'), 'allowOutsideClick': ![] }); } else { _0x4187cc[_0xd61d('0x11')](_0xd61d('0x21')); location[_0xd61d('0x1e')](); } }; _0x10d950[_0xd61d('0x22')] = function () { var _0x16c9b3 = $(_0xd61d('0x23'))[_0xd61d('0x8')](_0xd61d('0x9')); if (_0x16c9b3 == '1') { swal({ 'text': _0xd61d('0x13'), 'confirmButtonColor': _0xd61d('0xb'), 'width': _0xd61d('0xc'), 'allowOutsideClick': ![] }); } else { _0x4187cc[_0xd61d('0x11')](_0xd61d('0x24')); } }; _0x10d950['Perfil'] = function () { var _0x4b577e = $(_0xd61d('0x25'))[_0xd61d('0x8')](_0xd61d('0x9')); if (_0x4b577e == '1') { swal({ 'text': 'Debes\x20culminar\x20el\x20paso\x20anterior', 'confirmButtonColor': '#238276', 'width': _0xd61d('0xc'), 'allowOutsideClick': ![] }); } else { _0x4187cc[_0xd61d('0x11')](_0xd61d('0x26')); } }; _0x10d950['Cronograma'] = function () { var _0x27f7ba = $(_0xd61d('0x27'))[_0xd61d('0x8')](_0xd61d('0x9')); if (_0x27f7ba == '1') { swal({ 'text': _0xd61d('0x13'), 'confirmButtonColor': _0xd61d('0xb'), 'width': _0xd61d('0xc'), 'allowOutsideClick': ![] }); } else { _0x4187cc[_0xd61d('0x11')](_0xd61d('0x28')); } }; _0x10d950[_0xd61d('0x29')] = function () { var _0x263c4d = $(_0xd61d('0x2a'))['attr'](_0xd61d('0x9')); if (_0x263c4d == '1') { swal({ 'text': _0xd61d('0x13'), 'confirmButtonColor': '#238276', 'width': _0xd61d('0xc'), 'allowOutsideClick': ![] }); } else { _0x4187cc['url'](_0xd61d('0x2b')); } }; $(_0xd61d('0x2c'))[_0xd61d('0x2d')](function () { $(_0xd61d('0x2e'))[_0xd61d('0x2f')](); $(_0xd61d('0x30'))[_0xd61d('0x31')]({ 'left': '0' }, 0x1f4); }); $(_0xd61d('0x2e'))[_0xd61d('0x2d')](function () { $(_0xd61d('0x2e'))[_0xd61d('0x32')](); $('.menu-principal')[_0xd61d('0x31')]({ 'left': _0xd61d('0x33') }, 0x1f4); }); _0x544025['ConsultarProyectos'](_0x42feb2[_0xd61d('0x34')][_0xd61d('0x35')]['id'], function (_0x28ee2d) { if (_0x28ee2d[_0xd61d('0x18')]) { _0x10d950[_0xd61d('0x36')] = _0x28ee2d[_0xd61d('0x37')]; } }); _0x42feb2[_0xd61d('0x38')] = 0x0; _0x10d950[_0xd61d('0x39')] = function () { _0x42feb2[_0xd61d('0x3a')] = ''; $(_0xd61d('0x3b'))[_0xd61d('0x3c')]({ 'background-color': _0xd61d('0x3d'), 'z-index': '1', 'border-radius': _0xd61d('0x3e') }); $(_0xd61d('0x3f'))[_0xd61d('0x8')](_0xd61d('0x40'), _0xd61d('0x41')); $(_0xd61d('0x3f'))[_0xd61d('0x8')]('value', 0x2); $(_0xd61d('0x42'))[_0xd61d('0x2f')]('fast'); _0x42feb2[_0xd61d('0x38')] = 0x1; _0x147f45['remove']('datosProyecto'); _0x10d950['DeshabilitarCirculos'](); }; _0x10d950[_0xd61d('0x43')] = function (_0x2181f6) { _0x10d950['DeshabilitarCirculos'](); _0x42feb2[_0xd61d('0x3a')] = ''; _0x544025[_0xd61d('0x43')](_0x2181f6, function (_0xa446d1) { if (_0xa446d1[_0xd61d('0x18')]) { if (_0x42feb2[_0xd61d('0x14')] != undefined) { _0x147f45[_0xd61d('0x44')]('datosProyecto'); } _0x42feb2[_0xd61d('0x45')] = { 'datos': { 'id': _0xa446d1[_0xd61d('0x14')]['IdProyecto'], 'Tema': _0xa446d1[_0xd61d('0x14')][_0xd61d('0x46')], 'IdUsuario': _0xa446d1['proyecto'][_0xd61d('0x47')], 'Etapa': _0xa446d1[_0xd61d('0x14')][_0xd61d('0x16')] } }; _0x42feb2[_0xd61d('0x3a')] = _0xa446d1[_0xd61d('0x14')][_0xd61d('0x46')]; _0x147f45[_0xd61d('0x48')](_0xd61d('0x49'), _0x42feb2[_0xd61d('0x45')]); _0x42feb2[_0xd61d('0x14')] = _0x2c55a4[_0xd61d('0x4a')]('datosProyecto'); _0x10d950[_0xd61d('0x4b')](_0xa446d1['proyecto'][_0xd61d('0x16')]); } }); }; if (_0x42feb2[_0xd61d('0x14')] != undefined) { _0x544025['AbrirProyecto'](_0x42feb2[_0xd61d('0x14')][_0xd61d('0x15')]['id'], function (_0x607783) { if (_0x607783[_0xd61d('0x18')]) { _0x42feb2[_0xd61d('0x14')] = { 'datos': { 'id': _0x607783[_0xd61d('0x14')][_0xd61d('0x4c')], 'Tema': _0x607783['proyecto']['TemaProyecto'], 'IdUsuario': _0x607783[_0xd61d('0x14')][_0xd61d('0x47')], 'Etapa': _0x607783[_0xd61d('0x14')][_0xd61d('0x16')] } }; _0x42feb2[_0xd61d('0x3a')] = _0x607783[_0xd61d('0x14')][_0xd61d('0x46')]; _0x10d950[_0xd61d('0x4b')](_0x607783['proyecto'][_0xd61d('0x16')]); _0x147f45[_0xd61d('0x48')](_0xd61d('0x49'), _0x42feb2['proyecto']); } }); } if (_0x42feb2[_0xd61d('0x14')] != undefined) { _0x544025[_0xd61d('0x43')](_0x42feb2[_0xd61d('0x14')][_0xd61d('0x15')]['id'], function (_0x145298) { if (_0x145298[_0xd61d('0x18')]) { } }); } _0x10d950['DeshabilitarCirculos'] = function () { $(_0xd61d('0x4d'))[_0xd61d('0x3c')]({ 'background-color': _0xd61d('0x4e'), 'z-index': '1', 'border-radius': _0xd61d('0x3e') }); $(_0xd61d('0x4f'))[_0xd61d('0x8')](_0xd61d('0x40'), 'images/lluviaIdeas.png'); $(_0xd61d('0x4f'))[_0xd61d('0x8')](_0xd61d('0x9'), 0x1); $(_0xd61d('0x50'))[_0xd61d('0x32')](_0xd61d('0x51')); $(_0xd61d('0x52'))[_0xd61d('0x3c')]({ 'background-color': _0xd61d('0x4e'), 'z-index': '1', 'border-radius': _0xd61d('0x3e') }); $(_0xd61d('0x1c'))[_0xd61d('0x8')](_0xd61d('0x40'), _0xd61d('0x53')); $(_0xd61d('0x1c'))['attr'](_0xd61d('0x9'), 0x1); $(_0xd61d('0x54'))[_0xd61d('0x32')](_0xd61d('0x51')); $(_0xd61d('0x55'))[_0xd61d('0x3c')]({ 'background-color': _0xd61d('0x4e'), 'z-index': '1', 'border-radius': '50%' }); $('#iconoCuatro')[_0xd61d('0x8')](_0xd61d('0x40'), _0xd61d('0x56')); $(_0xd61d('0x20'))[_0xd61d('0x8')]('value', 0x1); $('#flechaCuatro')[_0xd61d('0x32')](_0xd61d('0x51')); $(_0xd61d('0x57'))[_0xd61d('0x3c')]({ 'background-color': 'rgb(255,255,255)', 'z-index': '1', 'border-radius': '50%' }); $(_0xd61d('0x23'))['attr'](_0xd61d('0x40'), _0xd61d('0x58')); $('#iconoCinco')[_0xd61d('0x8')](_0xd61d('0x9'), 0x1); $(_0xd61d('0x59'))[_0xd61d('0x32')](_0xd61d('0x51')); $(_0xd61d('0x5a'))[_0xd61d('0x3c')]({ 'background-color': 'rgb(255,255,255)', 'z-index': '1', 'border-radius': _0xd61d('0x3e') }); $(_0xd61d('0x25'))[_0xd61d('0x8')]('src', _0xd61d('0x5b')); $('#iconoSeis')[_0xd61d('0x8')]('value', 0x1); $(_0xd61d('0x5c'))[_0xd61d('0x32')](_0xd61d('0x51')); $(_0xd61d('0x5d'))[_0xd61d('0x3c')]({ 'background-color': _0xd61d('0x4e'), 'z-index': '1', 'border-radius': '50%' }); $(_0xd61d('0x27'))[_0xd61d('0x8')]('src', _0xd61d('0x5e')); $(_0xd61d('0x27'))[_0xd61d('0x8')](_0xd61d('0x9'), 0x1); $(_0xd61d('0x5f'))[_0xd61d('0x32')](_0xd61d('0x51')); $('#circuloOcho')[_0xd61d('0x3c')]({ 'background-color': _0xd61d('0x4e'), 'z-index': '1', 'border-radius': '50%' }); $(_0xd61d('0x2a'))[_0xd61d('0x8')]('src', _0xd61d('0x60')); $(_0xd61d('0x2a'))['attr'](_0xd61d('0x9'), 0x1); $(_0xd61d('0x61'))[_0xd61d('0x32')](_0xd61d('0x51')); }; _0x10d950[_0xd61d('0x4b')] = function (_0x2ac1a8) { if (_0x2ac1a8 >= 0x1) { $(_0xd61d('0x3b'))[_0xd61d('0x3c')]({ 'background-color': 'rgba(13,\x20132,\x20126,\x200.24)', 'z-index': '1', 'border-radius': _0xd61d('0x3e') }); $(_0xd61d('0x3f'))[_0xd61d('0x8')]('src', _0xd61d('0x41')); $('#iconoUno')[_0xd61d('0x8')](_0xd61d('0x9'), 0x2); $(_0xd61d('0x42'))['fadeIn'](_0xd61d('0x10')); $('#circuloUno')['addClass'](_0xd61d('0x62')); $(_0xd61d('0x63'))[_0xd61d('0x3c')]({ 'left': '33%' }); $(_0xd61d('0x4d'))['css']({ 'background-color': _0xd61d('0x3d'), 'z-index': '1', 'border-radius': _0xd61d('0x3e') }); $(_0xd61d('0x4f'))[_0xd61d('0x8')](_0xd61d('0x40'), _0xd61d('0x64')); $(_0xd61d('0x4f'))[_0xd61d('0x8')](_0xd61d('0x9'), 0x2); $(_0xd61d('0x50'))[_0xd61d('0x2f')]('slow'); $('#circuloDos')[_0xd61d('0x65')](_0xd61d('0x62')); $(_0xd61d('0x66'))[_0xd61d('0x3c')]({ 'right': _0xd61d('0xc') }); } if (_0x2ac1a8 >= 0x2) { $(_0xd61d('0x52'))['css']({ 'background-color': 'rgba(13,\x20132,\x20126,\x200.24)', 'z-index': '1', 'border-radius': _0xd61d('0x3e') }); $(_0xd61d('0x1c'))[_0xd61d('0x8')]('src', 'images/arbolProbAct.png'); $('#iconoTres')[_0xd61d('0x8')](_0xd61d('0x9'), 0x2); $(_0xd61d('0x54'))['fadeIn'](_0xd61d('0x10')); $(_0xd61d('0x52'))['addClass']('animated\x20rotateIn'); $('.campo:nth-child(5)')['css']({ 'right': _0xd61d('0x67') }); } if (_0x2ac1a8 >= 0x3) { $(_0xd61d('0x55'))[_0xd61d('0x3c')]({ 'background-color': _0xd61d('0x3d'), 'z-index': '1', 'border-radius': _0xd61d('0x3e') }); $(_0xd61d('0x20'))[_0xd61d('0x8')](_0xd61d('0x40'), _0xd61d('0x68')); $(_0xd61d('0x20'))[_0xd61d('0x8')](_0xd61d('0x9'), 0x2); $(_0xd61d('0x69'))[_0xd61d('0x2f')](_0xd61d('0x10')); $(_0xd61d('0x55'))[_0xd61d('0x65')](_0xd61d('0x62')); $(_0xd61d('0x6a'))['css']({ 'left': _0xd61d('0x6b') }); } if (_0x2ac1a8 >= 0x5) { $(_0xd61d('0x57'))[_0xd61d('0x3c')]({ 'background-color': _0xd61d('0x3d'), 'z-index': '1', 'border-radius': _0xd61d('0x3e') }); $(_0xd61d('0x23'))[_0xd61d('0x8')]('src', _0xd61d('0x6c')); $('#iconoCinco')[_0xd61d('0x8')](_0xd61d('0x9'), 0x2); $('#flechaCinco')[_0xd61d('0x2f')](_0xd61d('0x10')); $(_0xd61d('0x57'))[_0xd61d('0x65')](_0xd61d('0x62')); $('.campo:nth-child(9)')[_0xd61d('0x3c')]({ 'left': _0xd61d('0x6d') }); } if (_0x2ac1a8 >= 0x6) { $(_0xd61d('0x5a'))['css']({ 'background-color': _0xd61d('0x3d'), 'z-index': '1', 'border-radius': '50%' }); $('#iconoSeis')[_0xd61d('0x8')](_0xd61d('0x40'), _0xd61d('0x6e')); $('#iconoSeis')[_0xd61d('0x8')](_0xd61d('0x9'), 0x2); $(_0xd61d('0x5c'))['fadeIn'](_0xd61d('0x10')); $(_0xd61d('0x5a'))[_0xd61d('0x65')](_0xd61d('0x62')); $(_0xd61d('0x6f'))[_0xd61d('0x3c')]({ 'left': '5%' }); } if (_0x2ac1a8 >= 0x7) { $('#circuloSiete')['css']({ 'background-color': _0xd61d('0x3d'), 'z-index': '1', 'border-radius': _0xd61d('0x3e') }); $(_0xd61d('0x27'))['attr'](_0xd61d('0x40'), _0xd61d('0x70')); $('#iconoSiete')['attr'](_0xd61d('0x9'), 0x2); $(_0xd61d('0x5f'))[_0xd61d('0x2f')]('slow'); $('#circuloSiete')[_0xd61d('0x65')](_0xd61d('0x62')); $(_0xd61d('0x71'))[_0xd61d('0x3c')]({ 'left': _0xd61d('0x72') }); } if (_0x2ac1a8 >= 0x9) { $('#circuloOcho')[_0xd61d('0x3c')]({ 'background-color': _0xd61d('0x3d'), 'z-index': '1', 'border-radius': _0xd61d('0x3e') }); $(_0xd61d('0x2a'))[_0xd61d('0x8')](_0xd61d('0x40'), _0xd61d('0x73')); $(_0xd61d('0x2a'))[_0xd61d('0x8')](_0xd61d('0x9'), 0x2); $(_0xd61d('0x61'))['fadeIn'](_0xd61d('0x10')); $(_0xd61d('0x74'))[_0xd61d('0x65')](_0xd61d('0x62')); $('.campo:nth-child(15)')[_0xd61d('0x3c')]({ 'left': _0xd61d('0x75') }); } }; $(_0xd61d('0x76'))[_0xd61d('0x2d')](function () { $('#misProyectos')[_0xd61d('0xf')](_0xd61d('0x10')); }); _0x10d950[_0xd61d('0x77')] = function () { swal({ 'title': '¿Esta\x20seguro?', 'text': _0xd61d('0x78'), 'type': _0xd61d('0x79'), 'showCancelButton': !![], 'confirmButtonColor': '#238276', 'cancelButtonColor': _0xd61d('0x7a'), 'confirmButtonText': _0xd61d('0x7b'), 'cancelButtonText': _0xd61d('0x7c'), 'confirmButtonClass': _0xd61d('0x7d'), 'cancelButtonClass': _0xd61d('0x7e') })[_0xd61d('0xd')](function () { _0x544025[_0xd61d('0x7f')](_0x42feb2[_0xd61d('0x14')][_0xd61d('0x15')]['id'], function (_0x394bcd) { if (_0x394bcd[_0xd61d('0x18')]) { swal({ 'confirmButtonColor': _0xd61d('0xb'), 'title': 'Borrado!', 'text': _0xd61d('0x80'), 'type': _0xd61d('0x18') })['then'](function () { _0x10d950[_0xd61d('0x81')](); _0x147f45[_0xd61d('0x44')](_0xd61d('0x49')); _0x42feb2[_0xd61d('0x3a')] = ''; _0x42feb2[_0xd61d('0x38')] = 0x1; _0x544025[_0xd61d('0x82')](_0x42feb2['globals'][_0xd61d('0x35')]['id'], function (_0x355cd6) { if (_0x355cd6[_0xd61d('0x18')]) { _0x10d950[_0xd61d('0x36')] = _0x355cd6[_0xd61d('0x37')]; } }); }); } else { alert(_0xd61d('0x83')); } }); }), function (_0x128ff0) { if (_0x128ff0 === 'cancel') { swal({ 'confirmButtonColor': _0xd61d('0xb'), 'title': _0xd61d('0x84'), 'text': _0xd61d('0x85'), 'type': _0xd61d('0x86') }); } }; }; }]);

ManualApp.controller('MenuController',
    ['$scope', '$rootScope', '$location', 'MenuService', '$cookies', '$cookieStore', '$routeParams', '$sce',
        function ($scope, $rootScope, $location, MenuService, $cookies, $cookieStore, $routeParams, $sce) {

            //Funciones para direccionar a las vistas 
            $scope.DatosBasicos = function () {
                var color = $("#iconoUno").attr('value');
                //console.log(cosa);
                if (color == "1") {
                    swal({
                        text: 'Debe abrir un proyecto o  crear uno nuevo',
                        confirmButtonColor: '#238276',
                        width: '25%',
                        allowOutsideClick: false

                    }).then(function () {
                        $("#misProyectos").toggle("slow");
                    });
                } else {
                    $location.url("/InfoBasica");
                }

            };

            $scope.Matriz = function () {
                var color = $("#iconoDos").attr('value');
                if (color == 1) {
                    swal({
                        text: 'Debes culminar el paso anterior',
                        confirmButtonColor: '#238276',
                        width: '25%',
                        allowOutsideClick: false

                    })
                } else if ($rootScope.proyecto.datos.Etapa > 2) {
                    MenuService.consultarMatriz($rootScope.proyecto.datos.id, function (response) {
                        if (response.success) {
                            $location.url("/Matriz");
                        }else{
                            swal({
                                text: 'El árbol esta hecho',
                                confirmButtonColor: '#238276',
                                width: '25%',
                                allowOutsideClick: false

                            })
                        }
                    })
                }

                else {
                    $location.url("/Matriz");
                }
            };

            $scope.Arbol = function () {
                var color = $("#iconoTres").attr('value');
                if (color == 1) {
                    swal({
                        text: 'Debes culminar el paso anterior',
                        confirmButtonColor: '#238276',
                        width: '25%',
                        allowOutsideClick: false

                    })
                } else {
                    $location.url("/ArbolProblema");
                    location.reload();
                }
            };

            $scope.ArbolObjetivos = function () {
                var color = $("#iconoCuatro").attr('value');
                if (color == 1) {
                    swal({
                        text: 'Debes culminar el paso anterior',
                        confirmButtonColor: '#238276',
                        width: '25%',
                        allowOutsideClick: false

                    })
                    
                } else {
                    $location.url("/Objetivos");
                    location.reload();
                }
            };

            $scope.Involucrados = function () {
                var color = $("#iconoCinco").attr('value');
                //console.log(cosa);
                if (color == "1") {
                    swal({
                        text: 'Debes culminar el paso anterior',
                        confirmButtonColor: '#238276',
                        width: '25%',
                        allowOutsideClick: false

                    })
                } else {
                    $location.url("/Involucrados");
                }

            };


            $scope.Perfil = function () {
                var color = $("#iconoSeis").attr('value');
                //console.log(cosa);
                if (color == "1") {
                    swal({
                        text: 'Debes culminar el paso anterior',
                        confirmButtonColor: '#238276',
                        width: '25%',
                        allowOutsideClick: false

                    })
                } else {
                    $location.url("/PerfilProyecto");
                }

            };
            
            $scope.Cronograma = function () {
                var color = $("#iconoSiete").attr('value');
                //console.log(cosa);
                if (color == "1") {
                    swal({
                        text: 'Debes culminar el paso anterior',
                        confirmButtonColor: '#238276',
                        width: '25%',
                        allowOutsideClick: false

                    })
                } else {
                    $location.url("/Cronograma");
                }

            };

            $scope.MarcoLogico = function () {
                var color = $("#iconoOcho").attr('value');
                //console.log(cosa);
                if (color == "1") {
                    swal({
                        text: 'Debes culminar el paso anterior',
                        confirmButtonColor: '#238276',
                        width: '25%',
                        allowOutsideClick: false

                    })
                } else {
                    $location.url("/MarcoL");
                }

            };

            //------------------------------------------------------------//

            $(".icono-menu").click(function () {

                $(".sobre-menu-principal").fadeIn();
                $(".menu-principal").animate({
                    left: "0"
                }, 500);
            });

            $(".sobre-menu-principal").click(function () {

                $(".sobre-menu-principal").fadeOut();
                $(".menu-principal").animate({
                    left: "-1000px"
                }, 500);
            });



            //Consulta todos los proyectos del usuario logueado
            MenuService.ConsultarProyectos($rootScope.globals.currentUser.id, function (response) {
                if (response.success) {
                    $scope.Proyectos = response.proyectos;
                }
            })

            $rootScope.InicioProyecto = 0;
            //Función para crear un nuevo proyecto
            $scope.CrearProyecto = function () {
                //location.reload();
                $rootScope.nombreProyecto = "";
                $("#circuloUno").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                $("#iconoUno").attr("src", "images/datosBasicosAct.png");
                $("#iconoUno").attr('value', 2);
                $('#flechaUno').fadeIn("fast");
                $rootScope.InicioProyecto = 1;
                $cookies.remove("datosProyecto");
                $scope.DeshabilitarCirculos();

            }

            //Función para cargar todos los datos de un proyecto ya iniciado
            $scope.AbrirProyecto = function (IdProyecto) {
                $scope.DeshabilitarCirculos();
                $rootScope.nombreProyecto = "";

                MenuService.AbrirProyecto(IdProyecto, function (response) {
                    if (response.success) {

                        if ($rootScope.proyecto != undefined) {
                            $cookies.remove("datosProyecto");
                        }

                        $rootScope.Proyecto = {
                            datos: {
                                id: response.proyecto.IdProyecto,
                                Tema: response.proyecto.TemaProyecto,
                                IdUsuario: response.proyecto.IdUsuario,
                                Etapa: response.proyecto.Etapa
                            }
                        };
                        $rootScope.nombreProyecto = response.proyecto.TemaProyecto;

                        $cookies.putObject("datosProyecto", $rootScope.Proyecto);
                        $rootScope.proyecto = $cookieStore.get('datosProyecto');
                        
                        $scope.EtapasProyecto(response.proyecto.Etapa);
                    }

                })
            }

            if ($rootScope.proyecto != undefined) {
                MenuService.AbrirProyecto($rootScope.proyecto.datos.id, function (response) {
                    if (response.success) {
                        
                        $rootScope.proyecto = {
                            datos: {
                                id: response.proyecto.IdProyecto,
                                Tema: response.proyecto.TemaProyecto,
                                IdUsuario: response.proyecto.IdUsuario,
                                Etapa: response.proyecto.Etapa
                            }
                        };
                        $rootScope.nombreProyecto = response.proyecto.TemaProyecto;
                        $scope.EtapasProyecto(response.proyecto.Etapa);
                        $cookies.putObject("datosProyecto", $rootScope.proyecto);
                    }

                });
            }

            //ANIMACIÓN MENÚ
            if ($rootScope.proyecto != undefined) {

                MenuService.AbrirProyecto($rootScope.proyecto.datos.id, function (response) {
                    if (response.success) {
                        //$scope.EtapasProyecto();
                    }
                });
            }

            //Función para colocar opacos los circulos
            $scope.DeshabilitarCirculos = function () {
                //matriz de vester
                $("#circuloDos").css({ 'background-color': 'rgb(255,255,255)', 'z-index': '1', 'border-radius': '50%' });
                $("#iconoDos").attr("src", "images/lluviaIdeas.png");
                $("#iconoDos").attr('value', 1);
                $("#flechaDos").fadeOut("fast");
                //arbol de problemas
                $("#circuloTres").css({ 'background-color': 'rgb(255,255,255)', 'z-index': '1', 'border-radius': '50%' });
                $("#iconoTres").attr("src", "images/arbolProb.png");
                $("#iconoTres").attr('value', 1);
                $("#flechaTres").fadeOut("fast");

                $("#circuloCuatro").css({ 'background-color': 'rgb(255,255,255)', 'z-index': '1', 'border-radius': '50%' });
                $("#iconoCuatro").attr("src", "images/arbol.png");
                $("#iconoCuatro").attr('value', 1);
                $("#flechaCuatro").fadeOut("fast");

                $("#circuloCinco").css({ 'background-color': 'rgb(255,255,255)', 'z-index': '1', 'border-radius': '50%' });
                $("#iconoCinco").attr("src", "images/perfil.png");
                $("#iconoCinco").attr('value', 1);
                $("#flechaCinco").fadeOut("fast");

                $("#circuloSeis").css({ 'background-color': 'rgb(255,255,255)', 'z-index': '1', 'border-radius': '50%' });
                $("#iconoSeis").attr("src", "images/grafica.png");
                $("#iconoSeis").attr('value', 1);
                $("#flechaSeis").fadeOut("fast");

                $("#circuloSiete").css({ 'background-color': 'rgb(255,255,255)', 'z-index': '1', 'border-radius': '50%' });
                $("#iconoSiete").attr("src", "images/calendario.png");
                $("#iconoSiete").attr('value', 1);
                $("#flechaSiete").fadeOut("fast");

                $("#circuloOcho").css({ 'background-color': 'rgb(255,255,255)', 'z-index': '1', 'border-radius': '50%' });
                $("#iconoOcho").attr("src", "images/matriz.png");
                $("#iconoOcho").attr('value', 1);
                $("#flechaOcho").fadeOut("fast");
            }

            //Función para activar los circulos ejecutados de un proyecto
            $scope.EtapasProyecto = function (Etapa) {
                if (Etapa >= 1) {
                    $("#circuloUno").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                    $("#iconoUno").attr("src", "images/datosBasicosAct.png");
                    $("#iconoUno").attr('value', 2);
                    $('#flechaUno').fadeIn("slow");
                    $("#circuloUno").addClass("animated rotateIn");
                   
                    $(".campo:nth-child(1)").css({ 'left': '33%' })
                    

                    $("#circuloDos").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                    $("#iconoDos").attr("src", "images/lluviaIdeasAct.png");
                    $("#iconoDos").attr('value', 2);
                    $('#flechaDos').fadeIn("slow");
                    $("#circuloDos").addClass("animated rotateIn");
                    $(".campo:nth-child(3)").css({ 'right': '25%' })
                    //$("#circuloTres").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                    //$("#iconoTres").attr("src", "images/arbolProbAct.png");
                    //$("#iconoTres").attr('value', 2);
                    //$('#flechaTres').fadeIn("slow");
                }
                if (Etapa >= 2) {

                    $("#circuloTres").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                    $("#iconoTres").attr("src", "images/arbolProbAct.png");
                    $("#iconoTres").attr('value', 2);
                    $('#flechaTres').fadeIn("slow");
                    $("#circuloTres").addClass("animated rotateIn");
                    $(".campo:nth-child(5)").css({ 'right': '10%' })
                    
                }

                if (Etapa >= 3) {

                    $("#circuloCuatro").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                    $("#iconoCuatro").attr("src", "images/arbolAct.png");
                    $("#iconoCuatro").attr('value', 2);
                    $('#flechaCuatro').fadeIn("slow");
                    $("#circuloCuatro").addClass("animated rotateIn");
                    $(".campo:nth-child(7)").css({ 'left': '60%' })
                }

                if (Etapa >= 5) {

                    $("#circuloCinco").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                    $("#iconoCinco").attr("src", "images/perfilAct.png");
                    $("#iconoCinco").attr('value', 2);
                    $('#flechaCinco').fadeIn("slow");
                    $("#circuloCinco").addClass("animated rotateIn");
                    $(".campo:nth-child(9)").css({ 'left': '34%' })
                }

                if (Etapa >= 6) {
                    $("#circuloSeis").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                    $("#iconoSeis").attr("src", "images/graficaAct.png");
                    $("#iconoSeis").attr('value', 2);
                    $('#flechaSeis').fadeIn("slow");
                    $("#circuloSeis").addClass("animated rotateIn");
                    $(".campo:nth-child(11)").css({ 'left': '5%' })
                }

                if (Etapa >= 8) {
                    $("#circuloSiete").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                    $("#iconoSiete").attr("src", "images/calendarioAct.png");
                    $("#iconoSiete").attr('value', 2);
                    $('#flechaSiete').fadeIn("slow");
                    $("#circuloSiete").addClass("animated rotateIn");
                    $(".campo:nth-child(13)").css({ 'left': '-7%' })
                }
                if (Etapa >= 10) {
                    $("#circuloOcho").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                    $("#iconoOcho").attr("src", "images/matrizAct.png");
                    $("#iconoOcho").attr('value', 2);
                    $('#flechaOcho').fadeIn("slow");
                    $("#circuloOcho").addClass("animated rotateIn");
                    $(".campo:nth-child(15)").css({ 'left': '12%' })
                }
            }


            //función para mostrar MIS PROYECTOS

            $("#proyectos").click(function () {
                $("#misProyectos").toggle("slow");
            });

            $scope.borrarProyecto = function () {
                swal({
                    title: '¿Esta seguro?',
                    text: "Si elimina el proyecto ... , perderá toda la información sobre este.",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#238276',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, Eliminar',
                    cancelButtonText: 'No, Cancelar!',
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                    //preConfirm: function () {
                   
                    //}

                }).then(function () {
                    MenuService.EliminarProyecto($rootScope.proyecto.datos.id, function (response) {
                        if (response.success) {
                            swal({

                                confirmButtonColor: '#238276',
                                title: 'Borrado!',
                                text: 'Tu proyecto ha sido borrado.',
                                type: 'success'
                            }).then(function () {
                                $scope.DeshabilitarCirculos();
                                $cookies.remove("datosProyecto");
                                $rootScope.nombreProyecto = "";
                                $rootScope.InicioProyecto = 1;
                                MenuService.ConsultarProyectos($rootScope.globals.currentUser.id, function (response) {
                                    if (response.success) {
                                        $scope.Proyectos = response.proyectos;
                                    }
                                })
                                
                            })
                        } else {
                            alert("salio mal");
                        }
                    })
                }), function (dismiss) {
                    // dismiss can be 'cancel', 'overlay',
                    // 'close', and 'timer'
                    if (dismiss === 'cancel') {
                        swal({
                            confirmButtonColor: '#238276',
                            title : 'Eliminado',
                            text:'El proyecto ha sido eliminado!',
                            type: 'error',
                        })
                    }
                }
                    
            }

            $scope.Regresar = function () {

                $location.url("/Menu");
                $(".notify").hide();

            }


        }]);



