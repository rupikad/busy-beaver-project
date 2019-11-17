<template>
    <div>
        <ul>
            <li v-for="e in ev">{{e.eventTitle}}</li>
        </ul>
    </div>
</template>

<script>
import bbconfig from './../bbconfig.js'
var bbAPI = bbconfig.bbAPI

export default {
    name: 'events',
    data: function(){
        return{
            ev: this.getev(this),
            test: false
        }
    },
    methods: {
        getev(context){
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function() { 
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
                    var result = xmlHttp.responseText
                    var jsonresult = JSON.parse(result)
                    console.log(jsonresult[0]._id)
                    context.test = true;
                    context.ev = jsonresult;
                }
            }
            xmlHttp.open("GET","http://localhost:3000/events", true); // true for asynchronous 
            xmlHttp.send(null);
        }
    },
    mounted: function () {
        this.ev = this.getev(this);
    }
}

function httpGetAsync()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            this.test = true;
            return xmlHttp.responseText
    }
    xmlHttp.open("GET","http://localhost:3000/events", true); // true for asynchronous 
    xmlHttp.send(null);
}

</script>