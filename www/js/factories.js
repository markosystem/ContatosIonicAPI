angular.module('starter.factories', [])

.factory('Servico', function($http, API){
	var servico = {};
	servico.listar = function(){
		return $http.get(API +'/servicos')
	}
	return servico;
})

.factory('Interesse', function($http, API){
	var interesse = {};
	interesse.listar = function(){
		return $http.get("http://localhost/api/interesses.php");
	}
	return interesse;
})

.factory('Pessoa', function($http, API){
	return {
		listar: function(id){
			return $http.get("http://localhost/api/contatos.php") 
		},
		salvar: function(pessoa){
			console.log(pessoa);
			return $http.post("http://localhost/api/pessoa.php", pessoa)
		}
	}
})