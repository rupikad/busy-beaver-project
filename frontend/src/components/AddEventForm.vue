<!--html here -->
<template>
<div>
 <v-navbar></v-navbar>
    <div class="d-flex justify-content-center">
        <form @submit="validateEvent()">
            <div class="form-group row">
                <h4> Add a Event </h4>
            </div>
            <!-- event title -->
            <div class="form-group row">
                <div class="col-sm-12">
                    <input class="form-control" type="text" id="EventName" placeholder="Event Title" v-model="form.title" v-on:change="validateEvent(form)"><br>
                </div>
            </div>

            <!-- event location -->
            <div class="form-group row">
                <div class="col-sm-12">
                    <input class="form-control " type="text" id="EventLocation" placeholder="Location" v-model="form.location"><br>
                </div>
            </div>


            <!-- event date picker only appears if all day is true-->
            <div class="form-group row" v-if="form.allDay">
                <div>
                    <label for="FromDate" class="pr-1 col-form-label"> From: </label> <date-pick v-model="form.fromDate" id="FromDate"></date-pick>
                </div>

                <div>
                    <label for="ToDate" class="pl-3 pr-1 col-form-label"> To: </label> <date-pick v-model="form.toDate" id="ToDate"></date-pick>
                </div>
            </div>

            <!-- event date time - if all day is false -->
            <div class="form-group row" v-else>
                <div>
                    
                    <label for="FromDate" class="pr-1 col-form-label"> From: </label> 
                    <date-pick v-model="form.fromDateTime"
                        :pickTime="true"
                        :format = "'YYYY-MM-DD HH:mm'"
                        id="FromDate"></date-pick>
                </div>

                <div>
                    <label for="ToDate" class="pl-3 pr-1 col-form-label"> To: </label> 
                    <date-pick v-model="form.toDateTime" 
                    :pickTime="true"
                    :format = "'YYYY-MM-DD HH:mm'"
                    id="ToDate"></date-pick>
                </div>
            </div>

            <!-- all day toggle button -->
            <div class="custom-contol custom-switch form-group row">
                <input type="checkbox" class="custom-control-input" id="dayswitch" v-model="form.allDay">
                <label class="custom-control-label" for="dayswitch"> All day </label>
            </div>

            <!-- notes textarea -->
            <div class="form-group row">
                <div class="col">
                    <!--<input class="form-control " type="text" id="RepeatEvent" placeholder="Repeat Event" v-model="repeat"><br>-->
                    <input type="checkbox" class="custom-control-input" id="repeat" v-model="form.repeat"><br>
                </div>
                <div class="col"> 
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Notes" v-model="form.notes"></textarea>
                </div>
            </div>

            <!-- submit button -->
            <div class="form-group row d-flex justify-content-left">
                <button type="button" class="btn btn-primary" v-on:click="postEvent">Submit</button>
            </div>

        </form>
        <div v-if="(!valid)" class="alert alert-danger">
            Please fill out all required fields.
        </div>
        <div v-if="saved" class="alert alert-success">
            The event has been saved.
        </div>
    </div>
</div>
</template>

<script>
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';
import VNavbar from './VNavbar.vue';

export default {
    components: {
        DatePick,
        VNavbar
        },
    data: function(){
        return {
            form: {
                allDay: false,
                toDate: '2019-01-01',
                toDateTime: '2019-01-01 15:30',
                fromDate: '2019-01-01',
                fromDateTime: '2019-01-01 15:30',
                title: "",
                location: "",
                repeat: false,
                notes: ""
            },
            valid: true,
            saved: false
        }
    },
    methods: {
        validateEvent: function (form){
            if(form.title == ""){
                this.valid = false
                this.saved = false
            } else {
                this.valid = true
            }
        },

        postEvent(context){
            var vm = this
            var form = this.form

            var event = {
                "allDay": form.allDay,
                "eventEndDate": form.toDate,
                "eventEndTime": form.toDateTime,
                "eventStartDate": form.fromDate,
                "eventStartTime": form.fromDateTime,
                "eventTitle": form.title,
                "location": form.location,
                "recurring": form.repeat,
                "notes": form.notes
            }

            var xmlHttp = new XMLHttpRequest();

            xmlHttp.onreadystatechange = function() { 
                console.log(xmlHttp)
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
                    var result = xmlHttp.responseText
                    vm.saved = true
                }
            }

            xmlHttp.open("POST","http://localhost:3000/events", true); // true for asynchronous 
            xmlHttp.setRequestHeader("Content-Type", "application/json")
            xmlHttp.send(JSON.stringify(event));
        }
    },
}

</script>

<style scoped>
</style>