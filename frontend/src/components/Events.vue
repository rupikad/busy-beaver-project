<template>
    <div>
        <div class="event-container" v-for="e in ev">
            <div>
                <p class="event-header">{{getDateTime(e.eventStartTime)}} | {{e.eventTitle}}</p>
            </div>
            <span>{{e.location}}</span>
        </div>
    </div>
</template>

<script>

export default {
    name: 'events',
    data: function(){
        return{
            ev: this.getev(this),
            test: false
        }
    },
    methods: {
        getev(){
            var vm = this
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function() { 
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
                    var result = xmlHttp.responseText
                    var jsonresult = JSON.parse(result)
                    console.log(jsonresult[0]._id)
                    vm.test = true;
                    vm.ev = jsonresult;
                }
            }
            xmlHttp.open("GET","http://localhost:3000/events", true); // true for asynchronous 
            xmlHttp.send(null);
        },
        getDateTime(dateString){
            var date = new Date(dateString)
            var year = date.getFullYear()
            var month = date.getMonth()
            var day = date.getDate()
            var eventDate = String(month+1) + "/" + String(day) + "/" + String(year)
            return eventDate
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

<style scoped>
.event-container{
    border: 1px solid black;
    padding: 8px;
    margin: 5px;
    width: 100%;
}
.event-header{
    font-weight: bold;
    margin: 0px;
}
</style>