<script>
import Store from './store.js';
    export default {
        data(){
            return {

                data:Store.state,
            }
        },
        watch:{
            'data.status':{
                handler:(val,oldVal)=>{

                }
            }
        },
        methods:{
        }
    }
</script>