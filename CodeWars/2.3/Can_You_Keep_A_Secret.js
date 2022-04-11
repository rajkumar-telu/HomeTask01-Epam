function createSecretHolder(secret){
    return {
        getSecret: function(){
            return secret;
        },
        setSecret: function(val){
            secret = val;
        }
    }
}