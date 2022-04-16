<template>
    <main>
        <div class="container-fluid">
            <div class="card shadow mb-4">
                <div class="card-header d-flex bd-highlight">
                    <h6 class="bd-highlight font-weight-bold text-success">Update Footer</h6>
                </div>
            </div>
            <div class="card mt-3">
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <input type="text"  name="title" class="form-control" id="title" aria-describedby="emailHelp" >
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" name="description" id="description" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary mt-4">Update</button>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
import * as footerService from "../../services/footer_service";
export default {
    name: "Footer",
    data(){
        return{
            footer:[],
            editfooter:{},
            errors: {},
        };
    },
    mounted(){
        this.getFooter();
    },
    methods:{
        getFooter: async function(){
            try {
                const response = await footerService.getFooter();
                console.log(response);
                this.footer = response.data;
            } catch (error) {
                this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
            }

        }
    }
}
</script>
