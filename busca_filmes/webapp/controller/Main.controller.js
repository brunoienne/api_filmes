sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("buscafilmes.buscafilmes.controller.Main", {
            onInit: function () {
                var oPopulares = new JSONModel();
                var oAvaliados = new JSONModel();
                var oBreve = new JSONModel();
                this.getView().setModel(oPopulares, "Populares");
                this.getView().setModel(oAvaliados, "Avaliados");
                this.getView().setModel(oBreve, "Breve");
                this.buscarPopulares();
                this.buscarAvaliados();
                this.buscarBreve();
            },

            buscarPopulares: function () {
                var dadosModel = this.getView().getModel("Populares");

                $.ajax({
                    method: "GET",
                    url: "https://api.themoviedb.org/3/tv/popular?language=pt-BR",
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9'
                    },
                    success: function (dados) {
                        dadosModel.setData(dados);
                    },
                    error: function (erro) {
                        console.log(erro);
                    }

                });
            },

            buscarAvaliados: function () {
                var dadosModel = this.getView().getModel("Avaliados");

                $.ajax({
                    method: "GET",
                    url: "https://api.themoviedb.org/3/movie/top_rated?language=pt-BR",
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9'
                    },
                    success: function (dados) {
                        dadosModel.setData(dados);
                    },
                    error: function (erro) {
                        console.log(erro);
                    }

                });
            },

            buscarBreve: function () {
                var dadosModel = this.getView().getModel("Breve");
                $.ajax({
                    method: "GET",
                    url: "https://api.themoviedb.org/3/movie/upcoming?language=pt-BR",
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.'
                    },
                    success: function (dados) {
                        dadosModel.setData(dados);
                    },
                    error: function (erro) {
                        console.log(erro);
                    }

                });
            },
        });
    });
