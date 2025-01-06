import {createStore} from 'vuex'

const store = createStore({
    state(){
        return{
            count:0,
            todos:[]
        };
    },
    mutations:{
        increment(state){
            state.count++;
        },
        addTodo(state,todo){
            state.todos.push(todo);
        }
    },
    actions:{
        incrementAsync({commit}){
            setTimeout(()=>{
                commit('increment')
            },1000);
        }
    },
    getters:{
        doubleClick(state){
            return state.count*2;
        }
    }
});

export default store;