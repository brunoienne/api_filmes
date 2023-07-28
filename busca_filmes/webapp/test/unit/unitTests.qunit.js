/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"busca_filmes/busca_filmes/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
