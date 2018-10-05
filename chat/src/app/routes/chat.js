module.exports = function(application) {
    application.get('/chat', function(req, res){        
        application.app.controllers.index.iniciaChat(application, req, res);
    });
    
    application.get('/chat', function(req, res){
        application.app.controllers.index.iniciaChat(application, req, res);
    });
}