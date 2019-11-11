<!--html here -->
<template>
    <div class="container mx-1">
        <form>
            <!-- event title -->
            <div class="form-group row">
                <label for="EventName" class="col-form-label"> Event title:</label>
                <div class="col-sm-10">
                    <input class="form-control " type="text" id="EventName" placeholder="Event title"><br>
                </div>
            </div>

            <!-- event date picker only appears if all day is true-->
            <div class="form-group row" v-if="checked">
                <div>
                    <i class="fas fa-calendar-day"></i>
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
            <div class="form-group row d-flex justify-content-center">
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

</style>