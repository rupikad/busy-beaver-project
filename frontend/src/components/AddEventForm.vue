<!--html here -->
<template>
    <div class="d-flex justify-content-center">
        <form>
            <div class="form-group row">
                <h4> Add a Event </h4>
            </div>
            <!-- event title -->
            <div class="form-group row">
                <div class="col-sm-12">
                    <input class="form-control" type="text" id="EventName" placeholder="Event Title"><br>
                </div>
            </div>

            <!-- event location -->
            <div class="form-group row">
                <div class="col-sm-12">
                    <input class="form-control " type="text" id="EventLocation" placeholder="Location"><br>
                </div>
            </div>


            <!-- event date picker only appears if all day is true-->
            <div class="form-group row" v-if="checked">
                <div>
                    <label for="FromDate" class="pr-1 col-form-label"> From: </label> <date-pick v-model="date" id="FromDate"></date-pick>
                </div>

                <div>
                    <label for="ToDate" class="pl-3 pr-1 col-form-label"> To: </label> <date-pick v-model="date" id="ToDate"></date-pick>
                </div>
            </div>

            <!-- event date time - if all day is false -->
            <div class="form-group row" v-else>
                <div>
                    
                    <label for="FromDate" class="pr-1 col-form-label"> From: </label> 
                    <date-pick v-model="datetime"
                        :pickTime="true"
                        :format = "'YYYY-MM-DD HH:mm'"
                        id="FromDate"></date-pick>
                </div>

                <div>
                    <label for="ToDate" class="pl-3 pr-1 col-form-label"> To: </label> 
                    <date-pick v-model="datetime" 
                    :pickTime="true"
                    :format = "'YYYY-MM-DD HH:mm'"
                    id="ToDate"></date-pick>
                </div>
            </div>

            <!-- all day toggle button -->
            <div class="custom-contol custom-switch form-group row">
                <input type="checkbox" class="custom-control-input" id="dayswitch" v-model="checked">
                <label class="custom-control-label" for="dayswitch"> All day </label>
            </div>

            <!-- notes textarea -->
            <div class="form-group row">
                <div class="col">
                    <input class="form-control " type="text" id="RepeatEvent" placeholder="Repeat Event"><br>
                </div>
                <div class="col"> 
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Notes"></textarea>
                </div>
            </div>

            <!-- submit button -->
            <div class="form-group row d-flex justify-content-left">
                <button type="button" class="btn btn-primary">Submit</button>
            </div>

        </form>
    </div>
</template>

<script>
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';
export default {
    components: {DatePick},
    data: () => ({
        date: '2019-01-01',
        datetime: '2019-01-01 15:30',
        checked: false
    }),
    
};
</script>

<style scoped>
    .btn-primary {
        background-color: #DC4405;
    }
</style>