// ncmbモジュールの読み込み
var NCMB = require("ncmb");
// mobile backendアプリとの連携
var ncmb = new NCMB("0dc2535a20fe72bdf400ebe1470d598bec5696a4484d0a06dd2481bcfcae59f0",
"b212b34e49d68715b108ea52f81fc3036ac7a8cfcabf0a6698d8d4843a2bf542");

function demo(){
    // クラスのTestClassを作成
    var TestClass = ncmb.DataStore("TestClass");
    
    // データストアへの登録
    var testClass = new TestClass();
    testClass.set("message", "関数動作確認");
    testClass.save()
             .then(function(){
                // 保存に成功した場合の処理
              })
             .catch(function(err){
                // 保存に失敗した場合の処理
              });

}


/*************************************************************************************************/
/*
new Vue ({
    el: '#app',
    data(){
        return{
            todos: [],
            text: '',
        };
    },

    methods: {//メソッドを３つ定義している
        inputText(e){
            this.text = e.target.value;
        },

        addTodo(){
            if(!this.text) return;//textに値が入っていなかったらこのメソッドを終了
            //以下入力値があった場合の処理
            const text = this.text;
            const id = Math.ceil(Math.random()*1000);
            const todo = {
                id,
                text,
                isDone: false
            };
            this.todos.push(todo);
            this.resetText();
        },
        
        resetText(){
            this.text = '';
        },

        deleteTodo(id){
            const index = this.getIndexBy(id);
            this.todos.splice(index, 1);
        },

        toggleIsDone(id){ //トグル　indexの値を逆にしている
            const index = this.getIndexBy(id);
            this.todos[index].isDone = !this.todos[index].isDone;
        },

        getIndexBy(id){
            const filteredTodo = this.todos.filter(todo => todo.id === id)[0];
            const index = this.todos.indexOf(filteredTodo);
            return index;
        }
        


    },
    
    computed:{
        doneTodo(){
            return this.todos.filter(todo => todo.isDone === true);
        },

        incompleteTodo(){
            return this.todos.filter(todo => todo.isDone === false);
        }
    }

});
*/

