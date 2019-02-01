fetch('https://aer-recyclage.com/wp-json/wp/v2/posts')
        .then(function(response){
            response.json()
            .then(function(response){
                console.log(response)
            })    
        })