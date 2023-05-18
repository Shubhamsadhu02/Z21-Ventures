var BASE_URL = "https://blog.z21.ventures/wp-json/wp/v2/";
var POST = "posts";
var VIDEO = "video";
var fetchBlogs = async () => {
    try{
        var res = await fetch(BASE_URL+POST);
        var json = await res.json();
        return json;
    }catch(error){
        return [];
    }
    
}

var fetchSingleBlog = async (slug) => {
    try{
        var res = await fetch(BASE_URL+POST+"?slug="+slug);
        var json = await res.json();
        console.log(json);
        if(json.length > 0){
          return json[0];  
        }else{
            return false;
        }
    }catch(error){
        return false;
    }
}

const fetchRelatedBlogs = async () => {
    try{
        var res = await fetch(BASE_URL+POST);
        var json = await res.json();
        if(json.length > 4){
            let arr = [];
            for(var i = 0; i<3; i++){
                arr.push(json[Math.floor(Math.random() * json.length)]);
            }
            return arr;
        }
        return json;
    }catch(error){
        return [];
    }
}

var fetchVideos = async () => {
    try{
        var res = await fetch(BASE_URL+VIDEO);
        var json = await res.json();
        return json;
    }catch(error){
        return [];
    }
    
}

const handleSubmit = async (event) => {  
    var formdata = new FormData();
    formdata.append("email", document.getElementById("email"));
    formdata.append("name", document.getElementById("fullName"));
    formdata.append("description", document.getElementById("description"));
    formdata.append("subject", document.getElementById("subject"));
    formdata.append("nameLink", document.getElementById("nameLink"));
    formdata.append("urlLink", document.getElementById("urlLink"));
    formdata.append('attachment', document.getElementById("attachment"));

    var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
    };

    fetch("z21.ventures/mail/index.php", requestOptions)
    .then(response => response.body())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

export { fetchBlogs, fetchSingleBlog, fetchVideos, fetchRelatedBlogs, handleSubmit };