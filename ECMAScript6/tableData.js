class listShow{
    constructor(data){

        this.data=data;

        // $.ajax({
        //     async:false,
        //     type: "POST",
        //     url: "http://train3.com/api/alarm_record/get_list",
        //     dataType: "json",
        //     data: {"page": 1, "page_size": 10},
        //     success: function (json) {
        //         // console.log(json);
        //         console.log(json);
        //
        //         this.data=json;
        //     },
        //     error: function () {        //请求出错时调用
        //         console.log("请求失败");
        //     }
        // })

        // console.log(data);
    }
    toTitle(){

        $.ajax({
            async:false,
            type: "POST",
            url: "http://train3.com/api/alarm_record/get_list",
            dataType: "json",
            data: {"page": 1, "page_size": 10,"project_id":100101012},
            success: function (json) {
                // console.log(json);
                console.log(json);

                this.data=json;
            },
            error: function () {        //请求出错时调用
                console.log("请求失败");
            }
        })
        // return 1;
        // console.log(this);
    }
}

let user=new listShow();



// console.log(user);
// console.log(user.toTitle());