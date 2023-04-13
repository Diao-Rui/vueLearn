# vueLearn
该项目为vue的基本学习路线和一些简单的案例
# vue学习手册

## vue简介

### vue定义

- Vue是一个开源的javascript框架，并且Vue支持mvc（model-view-controller）和mvvm（view-viewModel-model）两种模式。
- Vue是一个构建数据驱动的 web 界面的**渐进式框架**。采用自底向上增量开发的设计。Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件，是又一个js库。
  - 简单应用：只需要一个轻巧的核心库
  - 复杂应用：可以引入各式各样的vue插件
- MVC：Model(模型),View(视图),Controller(控制器)

### MVVM

#### 定义

mvvm（model-view-viewmodel）是一种软件架构模式

![img](https://pic1.zhimg.com/80/v2-cdeee5f633356a814ea5d158ad586b9c_720w.webp)

#### Vue中的mvvm

- M：模型（model）：对应data中的数据
- V：视图（View）：模板
- VM：视图模型（ViewModel）：Vue实例对象

![img](https://picx.zhimg.com/v2-e675530da14bb0ebebd3fbfb0a3398e8_r.jpg?source=1940ef5c)

### 配置对象

- 配置对象的key不可修改
- 配置对象的value的数据类型必须对应

### vue特性

- 轻量：Vue.js库的体积非常小的，并且不依赖其他基础库。
- 数据绑定：对于一些富交互、状态机类似的前端UI界面，数据绑定非常简单、方便。
- 指令：内置指令统一为(v-指令)，也可以自定义指令，通过对应表达值的变化就可以修改对应的DOM。
- 插件化：Vue.js核心不包含Router、AJAX、表单验证等功能，但是可以非常方便地根据需要加载对应插件。
- 组件化：采用组件化模式，提高代码复用率、且代码更好维护。
- 声明式编码：让编码人员无需直接操作DOM，提高开发效率。（直接在HTML组件中使用vue指令）
- 使用**虚拟DOM**和优秀**diff算法**，尽量复用DOM节点。

### vue安装

- 直接下载vue的就是文件，然后直接拷贝到项目中，即下载vue.js文件到你的项目中。

- CDN：直接在文件上使用script标签引入js文件，这个直接使用vue官网提供的路径，只要你电脑有网就可以用，即在直接使用script标签引入：

  ```java
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
  ```

- NPM（node方式安装）：这个需要安装软件，在构建大型应用时使用。

### vue的使用

#### 简单使用vue的三部曲：

- 引入vue的js文件

- 准备一个元素（容器），可以使用任意标签，一般使用div

- 写js代码将上面的元素挂载起来（将容器挂载到el中）

- ```js
  <body>
      <!--vue使用的步骤：①先导入js的文件-->
      <script src="vue/vue.min.js"></script>
      <!--②创建一个div,准备和vue的关系-->
      <div id="app">
          {{ msg }}
      </div>
  
      <!--③写js代码：然后与上面的div创建关系-->
      <script>
          //注意：下面的Vue的写法,写成vue就出不来
          new Vue({ 
              el:"#app",
              data:{ msg:"hello vue",}
          })
      </script>
  </body>
  ```

#### 注意

- vue项目不再和 HTML 直接交互了。一个 Vue 应用会将其挂载到一个 DOM 元素上 (一般是HTML的最外层元素 `#app`) 然后对其进行完全控制。那个 HTML 是我们的入口，但其余都会发生在新创建的 Vue 实例内部。
- vue数据和 DOM 已经被建立了关联，所有东西都是**响应式的**
- JavaScript 控制台 (就在这个页面打开)，并修改 `app.message` 的值，你将看到上例相应地更新。

### vue生命周期

![Vue 实例生命周期](https://v2.cn.vuejs.org/images/lifecycle.png)

## vue基本语法

### 模板语法

#### 插值语法

##### ｛｛｝｝

- ｛｛｝｝是vue的表达式，里面代码的写法和js一样，是用来取值的
- 功能
  - 用于解析标签的内容
- ｛｛｝｝只能书写js表达式
  - 表达式：一个表达式生成一个值，可以放在任何一个需要值的地方
    - 变量
    - 运算式（算术运算、逻辑运算）
    - 函数、方法
    - 三目运算符
    - data中的所有属性
  - js代码（语句）
    - 循环 for
    - 判断 if

##### 样例

```html
 <div id="app">
      <p>{{name.toUpperCase()}}</p>
      <p>{{15*25*3}}</p>
      <p>{{age}}</p>
 </div>
<script>
      // 创建vue实例
      let vm = new Vue({
        // 实例与容器一一绑定
        el: "#app",
        // 存放数据，数据供实例的容器使用
        data() {
          return {
            name: "sjtu",
            age: 100,
          };
        },
      });
</script>
```



#### 指令语法

##### v-bind

- 元素中的属性（key）不用v-bind：的就是静态绑定，属性的值就是单纯的字符串（固定的值）
- 用v-bind：绑定的属性（key）为动态绑定，属性的值为js表达式（可以是变量、函数、方法等），从而可以动态的改变
- 使用方法：v-bind：key=value
- 简写方式：：key=value
- 除了HTML中，标签中的属性可以绑定之外，可以自定义属性绑定如：v-bind：hello=‘hello world’
- 功能：
  - 解析标签（包括：标签属性、标签内容、绑定事件。。。）

##### 样例

```html
  <!-- 创建容器 -->
    <div id="app">
      <!-- 普通标签（为绑定vue指令） -->
      <a href="http://www.athuigu.com">跳转</a>
      <!-- 绑定vue指令的属性 -->
      <a :href="url">跳转</a>
      <!-- 自定义vue指令的属性 -->
      <a :href="url" v-bind:hello="hello">跳转</a>
    </div>
    <script>
      // 创建vue实例
      let vm = new Vue({
        // 实例与容器一一绑定
        el: "#app",
        // 存放数据，数据供实例的容器使用
        data() {
          return {
            name: "sjtu",
            age: 100,
            url: "http://www.athuigu.com",
            hello: "hello world",
          };
        },
      });
    </script>
```

#### 注意

- data中所有的属性，最后都会出现在vm（vue实例）身上
- vm身上的所有属性及vue原型上的所有属性，在vue模板中都可以使用

### 数据绑定

##### 单向数据绑定

###### v-bind

- 通过v-bind可以实现单向绑定
- 数据只能充data流向页面
- 单向绑定的vue实例的数据改变绑定的容器也改变，但是容器内数据改变，vue的数据不改变
- v-bind的简写为：

##### 双向数据绑定

###### v-model

- 通过v-model可以实现双向绑定
- 数据不仅能从data流向页面，也可以从页面流向数据
- 双向绑定的数据，修改容器的数据，vue数据会改变，修改vue数据，容器数据也会改变
- 只有表单类元素才能绑定v-model，因为他们有value属性
  - input
    - text
    - Password
    - CheckBox
      - 绑定为数组
      - 设置value
      - 默认绑定为checked
    - radio
      - 设置value
      - 默认为null
  - select
- v-model：value可以简写为v-model，因为v-model默认绑定的就是value的值
- 三个属性
  - lazy：失去聚焦才收集
  - number：只收集数字
  - trim：去除前后空格

###### demo

```python
<div id="app">
      <form @submit.prevent="demo">
        account<input type="text" v-model="Userform.account" /> 
        <br /><br />
        password<input type="password" v-model="Userform.password"/>
        <br /><br />
        <!-- 数字收集 -->
        age<input type="number" v-model.number="Userform.age"/>
        <br /><br />
        sex 
        <br /><br />
        男<input type="radio" v-model="Userform.sex" value="男" /> 
        女<input type="radio" v-model="Userform.sex" value="女" />
        <br><br>
        hobby
        <br><br>
        <input type="checkbox" v-model="Userform.hobby" value="basketball">basketball
        <input type="checkbox" v-model="Userform.hobby" value="football">football
        <input type="checkbox" v-model="Userform.hobby" value="pingpang">pingpang
        <input type="checkbox" v-model="Userform.hobby" value="swiming">swiming
        <br><br>
        city
        <select v-model="Userform.city">
            <option value="">please select city</option>
            <option value="beijing">bei jing</option>
            <option value="shanghai">shang hai</option>
            <option value="chengdu">cheng du</option>
            <option value="xian">xi an</option>
        </select>
        <br><br>
        othersInfo
        <!-- .lazy非实时收集 -->
        <textarea v-model.lazy="Userform.other"></textarea>
        <br><br>
        <input type="checkbox" v-model="Userform.agree">阅读并接受<a href="www.baidu.com">《用户协议》</a>
        <br><br>
        <button>submit</button>
    </form>
    </div>

    <script>
      new Vue({
        el: "#app",
        data() {
          return {
            Userform: {
              account: "",
              password: "",
              age:'',
              sex: "",
              hobby: [],
              city: "",
              other: "",
              agree: false,
            },
          };
        },
        methods: {
            demo(){
                console.log(JSON.stringify(this.Userform));
            }
        },
      });
    </script>
```

### Vue的属性

#### el

##### 定义

- el用于指定当前vue实例为哪个容器服务，值通常为css选择器字符串
- #app====document.getElementById('app')
- 一个vue实例不能对应多个容器（默认为第一个）
- 一个容器只能被一个实例接收（默认也为第一个）
- 容器和实例必须**一对一**

##### 书写方式

- 可以直接在写在new Vue（｛el:'#app'｝）
- 也可以在实例中调用，vm.$mount('#app')

#### data

##### 定义

- data是数据元，主要用来准备数据的，在被挂载的元素里面可以通过vue的表达式直接取到data中的数据，可以是普通类型的数据，也可以是数组，对象。
- 通过vue对象改变里面数据的值，在元素中取到的值也会跟着改变。

##### 书写格式

- data:{ } 里面可以写json格式的数据
  - 对象式写法
  - 把数据当做对象的属性
  - 每一个组件修改了data的值都是全局修改，每个组件中的data都会被修改
- data(){return { } }
  - 函数式写法，不能写箭头函数，因为一旦写箭头函数，this就不再是vue实例了，是为window实例
  - 函数式每次返回一个data对象的副本，每个组件在自己的副本data上操作，互不干扰
- 这里将data当成函数，以返回值的形式返回数据，在return里面直接写json格式的数据
- 推荐使用data函数式写法

### 事件处理

#### v-on

- **v-on:xxx**是绑定一个事件（元素事件）
- **v-on:xxx**的简写@xxx
- v-on的方法都需要写在**methods**里面
- methods中配置的函数
  - 不要使用箭头函数，因为this不指向vue实例对象
  - vue管理的函数都写在methods里
- 参数
  - 默认参数：event（不用传参数）
  - 没有参数不写括号
  - 有参数写括号
  - 用**$event**传递**event**
- 常用事件
  - click（点击事件）

#### 事件修饰符

##### 阻止默认事件

- js写法：event.preventDefault()
- vue 写法：v-on:click.prevent
- 如：让A标签不跳转

##### 阻止事件冒泡

- js写法：event.stop
- vue 写法：v-on：click.stop
- 如：防止触发不必要的内容（点击子元素，影响父元素）

##### 事件只触发一次

- js写法
- vue写法：v-on:click.ones

##### 只有event.target是当前操作的元素是才触发

- v-on:click.self
- 他也可以实现阻住事件冒泡

##### 事件默认行为为立即执行，无需等待事件回调执行完毕

- v-on:click.passive
- 防止默认行为执行过慢，需要等待事件处理结束
- 一般不使用，移动端常用

#### 键盘事件

##### event.keyCode

- 可以获取输入的按键的code值

##### event.key

- 可以获得按键的值

##### vue按键常用别名

- enter（回车）
- delete（删除、退格）
- ESC（退出）
- space（空格）
- tab（换行）
  - 需要配合@keydown使用
- up（上）
- down（下）
- left（左）
- right（右）

##### @keyup

- 键盘按键弹起

##### @keydown

- 键盘弹起

### 计算属性

#### 定义

- 属性：vue认为data中的对象称为属性（key:value）
- 计算属性：通过已有的属性来计算出全新的属性
- 计算属性也算属性，但不是真实的属性，因为他的值每次都是计算出来的
- 计算属性不会出现在_data里面

#### 写法

```javascript
computed:{
//完整写法
fullName:{
    get(){
        
    }
    set(){
        
    }
}
//简单写法
//只有在只读不改的时候
fullName:function(){
    return ...
}
//最简单的写法
fullName(){
    
	}
}
```

#### 优势

- get有什么作用，当有人读取fullName，get就会被调用，且返回值就作为fullName的值
- get什么时候调用？
  - 初次读取fullName时。
  - 所依赖的数据发生变化时。
- get的数据存在缓存中，能够复用计算属性，不会重复调用，能够提高效率

```html
<div id="app">
      性：<input type="text" /><br /><br />
      名：<input type="text" /><br /><br />
      <p>全名：{{fullName}}</p>
</div>
<script>
      new Vue({
        el: "#app",
        data() {
          return {
            firstName: "",
            lastName: "",
          };
        },
        computed: {
          fullName: {
// get有什么作用，当有人读取fullName，get就会被调用，且返回值就作为fullName的值
// get什么时候调用？1.初次读取fullName时。2.所依赖的数据发生变化时。
// get的数据存在缓存中
            get() {
              return this.firstName + "-" + this.lastName;
            },
//set什么时候调用？当fullName被修改时              
            set(){
                
            }
          },
        },
      });
</script>
```

#### 备注

- 计算属性最终会出现在vm（vue实例）
- 如果要修改计算属性，必须要有set方法，不然会报错

### 侦听属性

#### watch

- 每个监视属性只能监视一个属性
  - data中的属性
  - 计算属性中的属性
- 监视属性必须存在才能监视
- immediate：初始化时让handler调用一下（默认false）
- handler（newValue，oldValue）：处理函数，当属性被修改时调用
  - newValue：修改后的值
  - oldValue：修改前的值
- 创建的方式：

```javascript
watch:{
    //属性名
    isHot{
        //立即执行
     	immediate:true
		//当isHot被修改时调用
    	handler(newValue，oldValue){
    }
  }
    
}
```

```javascript
vm.$watch('isHot',{
    handler(newValue，oldValue){
        
    }
})
```

#### 深度侦听

- deep：开启深度监视（默认值false）
- 监视多级结构中某个属性的变化
- watch默认不监测对象内部值的改变
- vue自身是可以监视对象内部值的改变，但vue提供的watch不行
- 使用watch时根据数据的结构。决定是否采用深度监视

```javascript
watch:{
    numbers:{
        deep:true,
        handler(newValue,oldValue){
            
        }
    }
}
```

#### 简写方式

- 如果不需要其他配置项时，可以开启简写模式
- 只有handler（）函数时可以

```javascript
watch:{
	isHot(newValue,oldValue){
        
    }
}
//不能写箭头函数
vm.$watch('isHot',function(newValue,oldValue){
    
})
```

### 侦听属性与计算属性的区别

- 计算属性不能开启异步任务
- 侦听属性可以开启异步任务
- computed能完成的，watch都可以完成
- watch能完成的，computed不一定能完成
  - 异步任务
- 所有被Vue管理的函数，最好写为普通函数，这样this指向才是vm或者组件实例对象。
- 所有不被Vue管理的函数（定时器回调函数，ajax回调函数、promise回调函数等），最好写箭头函数，这样this才能指向vm或组件实例对象。

### 过滤器

#### 定义

对要显示的数据进行特定的格式化后再显示（适用于一些简单的逻辑）

#### 语法

- 注册过滤器：

  - ```python
    Vue.filter(name,callback)或 new Vue{filters:{}}
    ```

- 使用过滤器

  - ```python
    {{xxx | 过滤器名}} 或 v-bind:属性=‘xxx | 过滤器名’
    ```

**object | filters**

过滤器的参数

- 默认参数为过滤器前面的属性（object）
- 定义参数的过滤器，object作为第一个参数
- 过滤器可以接受额外参数、多个过滤器也可以串联
- 并没有改变原本的数据，是新生成的数据

### 样式绑定

#### ：class

##### 字符串写法

- 正常的样式，正常写，变化的样式使用绑定写
- 适用于：样式类名不确定，需要动态绑定

##### 数组写法

- 适用于：要绑定的样式个数不确定、名字也不确定

##### 对象写法

- 适用于：要绑定的样式个数确定，名字也确定，但动态决定用不用

##### demo

```html
    <div id="app">
      <!-- 绑定变量 -->
      <div class="basic" :class="mood" @click="change">点我改变心情</div>
      <!-- 绑定数组 -->
      <div class="basic" :class="ants">多样式标签</div>
      <!-- 绑定对象 -->
      <div class="basic" :class="ant">多样式标签</div>
    </div>
    <script>
      new Vue({
        el: "#app",
        data() {
          return {
            mood: "happy",
            moods: ["happy", "sad", "normal"],
            ants: ["ant1", "ant2", "ant3"],
            ant: {
              ant1: true,
              ant2: true,
              ant3: false,
            },
          };
        },
        methods: {
          change() {
            this.mood = this.moods[Math.floor(Math.random() * 3)];
          },
        },
      });
    </script>
  </body>
  <style>
    .basic {
      width: 300px;
      height: 200px;
      border: 1px solid black;
      margin: auto;
    }
    .happy {
      background-color: aqua;
    }
    .sad {
      background-color: blue;
    }
    .normal {
      background-color: aquamarine;
    }
    .ant1 {
      background-color: blue;
    }
    .ant2 {
      border-radius: 5%;
    }
    .ant3 {
      font-size: 25px;
    }
  </style>
```

#### ：style

##### 对象写法

```html
<div :style=''>
    
</div>
<script>
Vue({
    el:'#app',
    data(){
        return {
            styleOj:{
               	//key必须是存在的，而且使用小驼峰写法
				fontSize:'40px',
                color:'orange',
                backgroundColor:'red'
            }
        }
    }
})
</script>
```

## vue渲染

### 条件渲染

#### ：v-show

- v-show判断为false，则不显示，但是会渲染

- 实现：display：none

- 不能使用template模板

- ```html
  <div v-show='false'>
      
  </div>
  ```

#### ：v-if

- v-if判断为false，不仅不会现实，而且不会渲染

- v-if  v-else-if  ... v-else需要连在一起才可以使用

- 如果中途被打断了，那么后续的判断将不再进行

- v-if更好和template一起使用，因为template模板不会改变结构（不会出现在HTML页面上）

- ```html
  <template v-if="flag"></template>
  <template v-else-if="flag"></template>
  <template v-else></template>
  
  ```

#### 使用场景

- 切换频率高，使用v-show，因为DOM节点是存在的，只是不显示
- 切换频率低，使用v-if，因为DOM节点是不存在的，每次需要重新添加和删除
- v-if能实现的v-show也能实现
- 多个判断使用v-if--v-else-if-v-else

### 列表渲染

#### v-for

- 数组遍历

  - ```html
    <li v-for='(item,index) in array'></li>
    
    ```

  - item为数组的元素

  - index为数组的索引

- 对象遍历

  - ```html
    <li v-for='(value:key) in object'></li>
    
    ```

  - vlaue为对象的值

  - key为对象的键

- 遍历字符串

  - ```html
    <li v-for='(char,index) in string'></li>
    
    ```

  - char为字符串的字符

  - index为字符串的索引

- 遍历指定次数

  - ```html
    <li v-for='(number,index) in range(number)'></li>
    
    ```

  - number为数值

  - index为索引

#### :key

- key的值必须唯一
- key为节点标识（唯一标识）
- Key为Vue内部使用，不会渲染在真实DOM上（不会出现在页面上）
- 如果数据会更新那不应该用index作为key
  - 因为数据更新的时候（从头开始更新）会导致数据错乱
  - 如果key不唯一效率不高，可能没法复用虚拟DOM
- 遍历时不写key，默认为index

##### 虚拟DOM中key的作用

- key是虚拟DOM对象的标识，当状态发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】
- 随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异进行比较

##### 对比规则

- 旧虚拟DOM中找到了与新虚拟DOM【相同的Key】
  - 若虚拟DOM的内容没变，直接复用之前的真实DOM
  - 若虚拟DOM中内容变了，则生成新的真实DOM，随后替换掉页面之前的真实DOM
- 旧虚拟DOM中没有找到新虚拟DOM相同的Key
  - 创建真实DOM，随后渲染页面

##### 用index作为Key可能产生的问题

- 若对数据进行：逆序添加、逆序删除等破坏顺序的操作，会产生没有必要的真实DOM更新===》界面效果没有影响，但是效率低
- 如果结构中还包含输入雷DOM：会产生错误的DOM更新===》界面有问题

##### 开发中如何选择Key

- 最好选择使用每条数据的唯一标识，比如ID、手机号、身份证号、学号等
- 如果不存在逆序添加、逆序删除等破坏顺序的操作，仅限于列表展示，使用index是没有问题的

### 列表过滤

> 不要操作原数组

#### 侦听属性

```html
<div id="app">
      <div>
        <h1>侦听属性完成过滤</h1>
        <input type="text" placeholder="请输入姓名" v-model="keywords" />
        <ul>
          <li v-for="(item,index) in filtersPersons" :key="item.id">
            {{item.name}}---{{item.age}}---{{item.sex}}
          </li>
        </ul>
      </div>
    </div>
<script>
      new Vue({
        el: "#app",
        data() {
          return {
            persons: [
              { id: 10001, name: "周杰伦", age: 25, sex: "男" },
              { id: 10002, name: "周冬雨", age: 25, sex: "女" },
              { id: 10003, name: "温兆伦", age: 25, sex: "男" },
              { id: 10004, name: "马冬梅", age: 25, sex: "女" },
            ],
            keywords: "",
            filtersPersons: "",
          };
        },
        // 侦听属性完成过滤
        watch: {
          keywords: {
            // 初始化时立即执行
            immediate: true,
            // 调用是执行的函数
            handler(val) {
              this.filtersPersons = this.persons.filter((item) => {
                return item.name.indexOf(val) != -1;
              });
            },
          },
        },
    </script>

```

#### 计算属性

```html
<div id="app">
       <div>
        <h1>计算属性完成</h1>
        <input type="text" placeholder="请输入姓名" v-model="keywords" />
        <ul>
          <li v-for="(item,index) in personsFilters" :key="item.id">
            {{item.name}}---{{item.age}}---{{item.sex}}
          </li>
        </ul>
      </div>
    </div>
<script>
      new Vue({
        el: "#app",
        data() {
          return {
            persons: [
              { id: 10001, name: "周杰伦", age: 25, sex: "男" },
              { id: 10002, name: "周冬雨", age: 25, sex: "女" },
              { id: 10003, name: "温兆伦", age: 25, sex: "男" },
              { id: 10004, name: "马冬梅", age: 25, sex: "女" },
            ],
            keywords: "",
          };
        },
        // 计算属性完成
        computed: {
          personsFilters() {
            return this.persons.filter((item) => {
              return item.name.indexOf(this.keywords) != -1;
            });
          },
        },
      })
    </script>

```

### 列表排序

> 不要操作原数组

#### 计算属性实现

```html
<div id="app">
      <h1>计算属性完成</h1>
      <input type="text" placeholder="请输入姓名" v-model="keywords" />
      <button @click="sortType=2">年龄升序</button>
      <button @click="sortType=1">年龄降序</button>
      <button @click="sortType=0">原顺序</button>
      <ul>
        <li v-for="(item,index) in personsFilters" :key="item.id">
          {{item.name}}---{{item.age}}---{{item.sex}}
        </li>
      </ul>
    </div>
    <script>
      new Vue({
        el: "#app",
        data() {
          return {
            persons: [
              { id: 10001, name: "周杰伦", age: 25, sex: "男" },
              { id: 10002, name: "周冬雨", age: 23, sex: "女" },
              { id: 10003, name: "温兆伦", age: 75, sex: "男" },
              { id: 10004, name: "马冬梅", age: 21, sex: "女" },
            ],
            keywords: "",
            sortType: 0,
          };
        },
        // 计算属性完成
        computed: {
          personsFilters() {
            // 完成过滤，不要着急返回，先记录
            const arr = this.persons.filter((item) => {
              return item.name.indexOf(this.keywords) != -1;
            });
            if (this.sortType) {
              // 排序会改变原数组
              arr.sort((p1, p2) => {
                // 后-前（降序）前-后（升序）
                return this.sortType === 1 ? p2.age - p1.age : p1.age - p2.age;
              });
            }
            return arr;
          },
        },
      });
    </script>

```

## vue工作原理

### 数据检测原理

#### vue.set(target,key,val)

用vue.set添加的属性vue可以帮你做数据代理，属性会有setter和getter方法

#### vm.$set(target,key,val)

只能给data里的某一个对象加属性，不能直接给data加属性

不能给vue实例添加属性或者不能给根数据添加属性

#### 数组检测

vue实例中的数组只能使用

- push
- shift
- unshift
- pop
- splice
- sort
- reverse

只有这些方法才能修改数组，因为他们能够修改原数组。根本原因是，vue封装了这些方法。

### DOM生成过程

1. 初始数据
2. 初始虚拟DOM（Vnodes）
3. 将虚拟DOM转为真实DOM
4. 数据更新
5. 根据新数据生成新的虚拟DOM
6. 虚拟DOM的对比算法（靠key对比）
   - 一次比较所有便签
   - 比较的是key（相同的），没有相同key则生成新的真实DOM
   - 如果相同则复用
   - 不一样则生成新的真实DOM
7. 生成新的真实DOM（复用或新生成）

### 数据代理

#### 定义

数据代理：通过一个对象代理对另一个对象中属性的操作（读/写）

#### object.defineproperty方法

```javascript
object.defineproperty(object,'key',{
    value:''//定义键的值
    enumerable://是否可以被枚举（默认false）
    writeable：//是否可以被修改（默认false）
    configurable：//是否可以被删除（默认false）
    get：function（）｛
    ｝//当有人读取key属性，get函数（getter）就会被调用，且返回值就是key的值
})

```

- defineproperty（）方法新增的属性
  - 不能被遍历（不可枚举）
  - 不可以被修改
  - 不可以被删除

##### 样例

```html
<script>
      let number = 18;
      let person = {
        name: "zhangsan",
        sex: "nan",
      };
      //   Object.defineProperty(person, "age", {
      //     value: 18,
      //     enumerable: true, //是否可以枚举，默认FALSE
      //     writable: true, //是否可以修改，默认false
      //     configurable: true, //是否可以删除，默认false
      //   });
      Object.defineProperty(person, "age", {
        get() {
          console.log("有人读取了age属性");
          return number;
        },
        set(value) {
          console.log("有人修改了age属性，且值是", value);
          number = value;
        },
      });
</script>

```

#### vue中的数据代理

- vm修改属性中的值 =》调用属性的setter=》修改data中的属性
- vm访问属性中的值 =》调用属性的getter=》获取data中的属性
- vm属性中的_data就是new Vue中的data
- vm._data=data
- vue数据代理
  - 通过vm对象来代理data对象中属性的操作（读/写）
- vue数据代理的好处
  - 更加方便操作data中的数据
- vue数据代理实现方法：
  - 通过Object.defineproperty（）把data对象中的所有属性添加到vm上
  - 为每一个添加到vm的属性，都指定getter和setter。 
  - 在getter/setter内部去操作（读/写）data中对应的属性

```javascript
let data={
    name:'zs',
    address:'jnu'
}
const vm=new Vue({
    el:'app',
    data:data
})
vm._data===data//true

```

### vue生命周期

#### 环节

**init Events & lifestyle**

初始化：生命周期、事件、但数据代理还未开始

**init injections & reactivity**

初始化：数据监测、数据代理

**判断el和template**

此阶段Vue开始解析模板，生成虚拟DOM（内存中），页面还不能显示解析好的内容

**转真实DOM**

将内存中的虚拟DOM转为真实DOM插入页面

**挂载**

初始化完成结束，一般在此进行：

- 开启定时器、
- 发布网络请求、
- 订阅信息、
- 绑定自定义事件
- 等初始化操作

**更新流程**

更新数据：生成新的虚拟DOM，随后与旧的虚拟DOM进行比较，最终完成界面更新，即：完成Model===》view更新

**销毁流程**

vm中所有的：data、methods、指令等等，都处于可用状态、马上要执行销毁过程。一般在此阶段：

- 关闭定时器
- 取消消息订阅
- 解绑**自定义事件**等
- 收尾操作

#### 生命周期函数

**beforeCreate**

- 数据代理还没开始

**create**

- 数据监测
- 数据代理

**beforeMount**

- Vue开始解析模板，生成虚拟DOM（内存中）
- 页面还不能显示解析好的内容
- 页面呈现的是未经Vue编译的DOM结构
- 所有对DOM的操作，最终都不奏效

**mounted**

vue完成模板解析并把初始的真实DOM元素放入页面后（挂载完毕后）调用mounted

- 在vue生命周期中只执行一次
- 页面呈现经过Vue编译的DOM
- 对DOM的操作均有效（尽量避免该操作）

 **beforeUpdate**

- 数据是最新的，但页面是旧的
- 页面尚未和数据保持同步                      

**updated**

- 数据是最新的，页面也是最新的
- 页面与数据保持同步

**beforeDestroy**

vm中所有的：data、methods、指令等等，都处于可用状态、马上要执行销毁过程。

- 关闭定时器
- 取消消息订阅
- 解绑**自定义事件**等

**Destroy**

彻底销毁vm中所有的：data、methods、指令、组件、监听器等等。

#### 常用生命周期函数

- mounted
- beforeDestroy

## vue指令

### 常用指令

| 指令名称 | 指令作用           | 备注                                        |
| -------- | ------------------ | ------------------------------------------- |
| v-html   | 显示与解析HTML代码 | 等效与JS的innerHTML                         |
| v-text   | 原封不动的展示     | 等效与JS的innerText                         |
| v-for    | 遍历与循环功能     | 遍历数字，字符串,对象,数组                  |
| v-bind   | 绑定属性           | 简单形式 :属性名=“值”                       |
| v-model  | 双向绑定           | 只支持input,select,textarea                 |
| v-show   | 显示与隐藏         | 隐藏只是样式:style=“display=none”           |
| v-if     | 判断               | v-if/v-else-if/v-else是一组（v-if不会渲染） |
| v-on     | 绑定事件           | 简写形式 @事件名=方法名()                   |

### 内置指令

#### v-html与v-text

##### 定义

- 直接使用{{ }}表达式取值，会将内容原样输出
- v-html指令：可以解析里面的HTML标签，和innerHTML的用法一样（可以在里面插入标签，并且标签能够被解析）
  - 在网络上动态渲染任意HTML是非常危险的，容易导致XSS攻击
  - 一定要在可信
- v-text指令：向其文本中插入内容，只能将文本原样输出，和innerText的用法一样

##### 样例

```vue
	<div id="app">
      <!-- v-html等同于HTML的属性innerHTML能够解析字符串中的标签 -->
      <div v-html="fun()"></div>
      <!-- v-text会原封不动的输出字符串 -->
      <div v-text="fun()"></div>
      <!-- {{}}取值也是原封不动的取字符串 -->
      <div>{{fun()}}</div>
    </div>
    <script>
      new Vue({
        el: "#app",
        data() {
          return {
            person: {name: "zhangsan",age: 18,sex: "man",weight: 100,},
          };
        },
        methods: {
          fun: function () {
            let html = "<ul>";
            //获取data中的元素必须使用this指针
            //使用箭头函数没法在这里使用this
            //for in获得的是他的键而不是值
            for (item in this.person) {
              html += "<li>" + this.person[item] + "</li>";
            }
            html += "</ul>";
            return html;
          },
        },
      });
    </script>

```

#### v-cloak

v-cloak没有值

- 本质上是一个特殊属性，vue实例创建完成并接管容器后，会删除v-cloak属性
- 使用css配合v-cloak可以解决网速慢时页面展示出｛｛xxx｝｝的问题

#### v-ones

v-ones没有值

- 所在的节点初次动态渲染后，就视为静态内容了
- 以后数据改变不会引起v-ones所在节点的更新

#### v-pre

v-pre没有值

- 可以让vue跳过所在节点的编译过程
- 可利用它跳过：没有使用指令的语法，没有使用插值语法的节点，会加快编译

### 自定义指令

#### directives

##### 调用时机

- 指令和元素成功绑定时
- 指令所在的模板被重新解析时

##### 函数式

- 参数1：真实DOM（HTML的元素）element
- 参数2：binding（和元素关联）

```javascript
directives:{
   function(element,binding){
    element.innerText=binding.value*10
	} 
}

```

##### 对象式

- bind()：指令与元素成功绑定时调用
- inserted()：指令所在元素被插入页面时
- update()：指令所在的模板被解析时

```javascript
directives:{
    'name':{
            bind(element, binding) {
              element.value = binding.value;
            },
            inserted(element, binding) {
              element.focus();
            },
            update(element, binding) {
              element.value = binding.value;
            },
    }
}

```

##### 使用规则

- 不能使用小驼峰命名法
- 使用name-name
- 在指令执行函数中使用‘name-name’
- 指令相关的回调this都是window，不是vue实例

```javascript
Vue.directive('name',function(element,binding){
    
})
Vue.directive('name',{
    bind(element,binding){},
    inserted(element,binding){},
    update(element,binding){}
})

```



## vue项目

### 创建vue项目

#### vue cli

步骤

- vue create 项目名

  - Default（vue2，babel，eslint）
  - Default（vue3，babel，eslint）
  - Manually select feature（自定义）
  - label用于将es6转为es5
  - eslint进行语法检查

- 选择自定义版本

- 选择需要安装的工具

  - Babel （转码器，可以将ES6代码转为ES5代码，从而在现有环境执行）

  - TypeScript （TypeScript是一个JavaScript（后缀.js）的超集（后缀.ts）包含并扩展了 

    JavaScript 的语法，需要被编译输出为 JavaScript在浏览器运行）

  - Progressive Web App (PWA) Support（渐进式Web应用程序）

  - Router （vue路由）

  - Vuex （vue的状态管理模式）

  - CSS Pre-processors （CSS 预处理器（如：less、sass））

  - Linter / Formatter （代码风格检查和格式化（如：ESlint））

  - Unit Testing （单元测试（unit tests））

  - E2E Testing （ e2e（end to end） 测试）

- 版本选择

  - 2.x
  - 3.x

- Use class-style component syntax? (Y/n):

- 是否使用class风格的样式语法（TypeScript）

  - y
  - n

- Use Babel alongside TypeScript for auto-detected polyfills? (Y/n) ：

  - 是否使用class风格的组件语法（TypeScript）
  - y
  - n

- Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n)：

  - 是否使用history模式
  - y（history）
  - N（hash）

- Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default):

  - 选择预处理的模式
  - Sass/SCSS (with dart-sass)
  - Sass/SCSS (with node-sass)
  - Less
  - Stylus

- Pick a linter / formatter config: (Use arrow keys)：

  - 选择语法检测规范
  - TSLint
  - ESLint with error prevention only
  - ESLint + Airbnb config
  - ESLint + Standard config
  - ESLint + Prettier

- Pick additional lint features: (Press to select, to toggle all, to invert selection) 

  - 选择 保存时检查 / 提交时检查
  - Lint on save
  - Lint and fix on commit

- Pick a unit testing solution: (Use arrow keys) ：

  - 测试方式
  - Mocha + Chai
  - Jest

- Pick a E2E testing solution: (Use arrow keys) ：

  - e2e测试方式
  - Cypress (Chrome only)
  - Nightwatch (Selenium-based)

- Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? (Use arrow keys)

  - 选择配置信息存放位置，单独存放或者并入package.json
  - In dedicated config files
  - In package.json

- Save this as a preset for future projects? (y/N) ：

  - 是否保存当前预设，下次构建无需再次配置

### 项目结构

| 目录/文件         | 说明                                                         |
| :---------------- | :----------------------------------------------------------- |
| build             | 项目构建(webpack)相关代码（打包工具）                        |
| config            | 配置目录，包括端口号等。（配置网络IP地址，端口，全局变量）   |
| node_modules      | npm 加载的项目依赖模块                                       |
| src               | 这里是我们要开发的目录，基本上要做的事情都在这个目录里。里面包含了几个目录及文件：assets: 放置一些图片，如logo等。components: 目录里面放了一个组件文件，可以不用。App.vue: 项目入口文件，我们也可以直接将组件写这里，而不使用 components 目录。main.js: 项目的核心文件。 |
| static            | 静态资源目录，如图片、字体等。                               |
| test              | 初始测试目录，可删除                                         |
| .xxxx文件         | 这些是一些配置文件，包括语法配置，git配置等。                |
| index.html        | 首页入口文件，你可以添加一些 meta 信息或统计代码啥的。       |
| package.json      | 项目配置文件（包说明书，名称、版本、命令、依赖包、打包工具） |
| package.lock.json | 包版本配置文件                                               |
| README.md         | 项目的说明文档，markdown 格式                                |

### 核心文件

#### main.js

main.js为整个vue项目的入口文件

- 引入vue文件
  - 引入需要依赖的文件（element UI）
  - 引入router
- 引入App组件
- 关闭生产提示
- 创建vue实例对象
- 应用render渲染函数（添加模板解析器）

**demo**

```javascript
// 引入vue（vue.runtime.esm.js）
// 残缺版vue(不包含模板解析器)
import Vue from "vue";
// import App from "./App.vue";

Vue.config.productionTip = false;

// 创建vue实例
// 第一种方法
// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");
// 第二种方法
new Vue({
  el: "#app",
  // 用render导入模板解析器
  render(createElement) {
    return createElement(App);
  },
});


```

**不同版本的vue**

- vue.js和vue.runtime.xx.js的区别
  - vue.js为完整版vue，包含：vue核心和模板解析器
  - vue.runtime.xx.js为运行版vue，只包含：vue核心，没有模板解析器
- 因为vue.runtime.xx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体的内容

#### index.HTML

整个项目的启动文件，最终的vue文件都会被打包为js文件放在该index.HTML中

该文件中有一个容器

- 根容器：绑定vue实例，
- 容器存放Appvue组件实例

**demo**

```html
<!-- 整个应用的启动文件 -->
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8" />
    <!-- 针对IE浏览器的一个特殊配置，含义是让IE浏览器最高的渲染级别渲染页面 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- 开启移动端的理想视口 -->
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <!-- 配置网页图标 -->
    <link rel="icon" href="<%= BASE_URL %>favicon.ico" />
    <!-- 设置网页标题 -->
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <!-- 当浏览器不支持js时时这个标签中的元素就会被渲染 -->
    <noscript>
      <strong
        >We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work
        properly without JavaScript enabled. Please enable it to
        continue.</strong
      >
    </noscript>
    <!-- 定义的容器（存放vue组件） -->
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>


```

#### App.vue

- 整个项目中vue组件的父组件，负责管理所有的子组件
- 在这个文件中设置全局属性
  - 全局样式
  - 全局宽高

### 绑定表单

双向绑定v-model绑定

- input

  - .lazy

    - 在默认情况下， v-model 在 input 事件中同步输入框的值与数据，但你可以添加一个修饰符 lazy ，从而转变为在 change 事件中同步：

    - ```HTML
      <!-- 在 "change" 而不是 "input" 事件中更新 -->
      <input v-model.lazy="msg" >
      
      ```

  - number

    - .number。如果想自动将用户的输入值转为 Number 类型（如果原值的转换结果为 NaN 则返回原值），可以添加一个修饰符 number 给 v-model 来处理输入值：

    - ```HTML
      <input v-model.number="age" type="number">
      
      ```

  - text

    - .trim。如果要自动过滤用户输入的首尾空格，可以添加 trim 修饰符到 v-model 上过滤输入：

    - ```HTML
      <input v-model.trim="msg">
      
      ```

  - radio

    - radio标签设置在input type类型中代表单选框。一般格式为：

    - ```html
      <!-- 单选框的值取决于他的value -->
      <input type="radio" id="man" value="男生" v-model="person.sex" />
      <!-- label标签的for指向他的父元素的ID -->
      <label for="man">男</label>
      
      ```

    - 当选中某一个radio时绑定的model会获得单选框的value

  - CheckBox

    - CheckBox也是设置在input，type类型中。一般格式为

    - ```html
      <input
      type="checkbox"
      id="basketball"
      value="篮球"
      v-model="person.interests"
        />
      <label for="basketball">篮球</label>
      
      ```

    - 绑定model必须是数组而能是其他的，否则会变为true或者FALSE。当选中某一个CheckBox时model会添加value（CheckBox）进入数组中。反之则从数组中删除。

- select

  - 选择器一般使用规则：

  - ```html
    <select v-model="person.school">
               <!-- disabled代表不能被选择 -->
               <option value="" disabled>请选择学校</option>
               <option value="清华大学">清华大学</option>
               <option value="北京大小">北京大学</option>
               <option value="上海交通大学">上海交通大学</option>
               <option value="浙江大学">浙江大学</option>
               <option value="南京大学">南京大学</option>
    </select>
    
    ```

  - 在绑定选择器时，model绑定在select上，当选中某一项时会将该项的value传给select进而传给model

## 组件

### 定义

组件（Component）是 Vue.js 最强大的功能之一。

组件可以扩展 HTML 元素，封装可重用的代码。

VueComponent简称vc

vue实例对象检测vm

**实现应用中局部功能代码和资源（css、image、mp3、mp4等）的集合**

组件系统让我们可以用独立可复用的小组件来构建大型应用，几乎任意类型的应用的界面都可以抽象为一个组件树：

![img](https://www.runoob.com/wp-content/uploads/2017/01/components.png)

**为什么使用组件**

一个界面的功能很复杂

**作用**

复用编码、简化项目编码、提高运行效率

**组件化**

当应用中的功能都是多组件的方式来编写的，那么该应用就是组件化应用

#### 定义总结

##### vueComponent

- 组件本质是一个VueComponent的构造函数
- 只要写了组件标签（如：<hello></hello>），vue解析时会帮我们创建该组件的实例对象，即执行：new vueComponent（options）
- 每次调用Vue.extend都是返回一个全新的vueComponent

##### this

- 组件配置中：data函数、watch函数、methods中的函数、computed的函数this等都是VueComponent的实例对象
- new Vue（optional）配置中：data函数、methods中的函数、watch中的函数、computed中的函数，他们的this均是vue实例对象

**vc有的vm都有，vm有的vc不一定有（el）**

#### 内置关系

- VueComponent.prototype._proto__（VueComponent原型对象的隐式原型属性）===vue.prototype（操作vue原型对象）
- 让组件实例对象（vc）可以访问到Vue原型上的属性、方法

##### prototype

**vue**

- 只有vue构造函数才有这个属性
- vue中的prototype指向vue原型对象

**VueComponent**

- VueComponent的构造函数有prototype属性
- VueComponent的prototype指向VueComponent原型对象

##### —Proto—

**vue**

- 实例的隐式原型属性永远指向自己缔造的原型对象
- vue实例对象（vm）的proto指向vue原型对象
- vue原型对象的proto指向object原型对象

**VueComponent**

- VueComponent的实例对象有—Proto—属性
- VueComponent实例对象—Proto—指向VueComponent原型对象
- VueComponent原型的对象的—ptoto—属性指向vue的原型对象

### 组件类型

#### 单文件组件

一个文件中只包含一个组件（demo.vue）

**文件框架**

- <template></template>

  该结构中书写HTML代码

- <script></script>

  该结构中书写交互相关代码（数据、方法）

- <style></style>

  给结构中书写该组件相关的样式代码

##### 组件启动步骤

- 进入index.HTML并引入main.js
- 进入main.js中引入APP组件并创建vue实例
- 进入APP组件中引入其他所需的组件

#### 非单文件组件

一个文件中包含由N个组件

##### 组件步骤

- 创建组件

  - ```javascript
    const school=Vue.extend({
        template:`
    	<div><h1>{{msg}}<h1/></div>
    	`
        data(){
        return{
            msg:'hello'
    	}
    	}
    })
    
    ```

- 注册组件

  - ```javascript
    //局部注册
    const vm=new Vue({
        components:{
            school:school
        },
        data(){
            return{
                
            }
        }
    })
    //全局注册
    Vue.component('school',school)
    
    ```

- 使用组件标签

  - ```html
    <school></school>
    
    ```

##### 注意

- 组件定义时不要绑定el配置项，因为最终所有的组件都要被一个Vm管理，由vm决定服务的对象

- data必须使用函数式，不能为对象式。（因为对象式，每一个组件修改数据，其他组件也会被影响，避免组件复用时，数据存在引用关系）

- vue.extend()可以写可以不写，但是不管写不写Vue最后会调用Vue.extend()

- 组件名称设置

  - 一个单词：

    - 纯小写：school
    - 首字母大写：School

  - 多个单词

    - 短横连接（纯小写）（kebab-case）：my-school
    - 大驼峰命名法（CameCase）：MySchool（需要脚手架）

  - 备注

    - 不要使用HTML中已经有的或者预留的元素名
    - vue开发者工具中呈现的名称用组件的name配置项

  - 便签设置使用

    - ```html
      <school></school>
      
      ```

    - ```html
      <school/>//需要在脚手架下使用
      
      ```

### 设置组件

在注册 一个组件的时候，我们始终需要给它一个名字。比如在全局注册的时候我们已经看到了：

```javascript
Vue.component('my-component-name', { /* ... */ })

```

- 该组件名就是 `Vue.component` 的第一个参数。
- 你给予组件的名字可能依赖于你打算拿它来做什么。当直接在 DOM 中使用一个组件 (而不是在字符串模板或[单文件组件](https://v2.cn.vuejs.org/v2/guide/single-file-components.html)) 的时候，我们强烈推荐遵循 [W3C 规范](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)中的自定义组件名 (字母全小写且必须包含一个连字符)。这会帮助你避免和当前以及未来的 HTML 元素相冲突。

#### 命名风格

- 使用 kebab-case（横线连接<my-component-name>）
  - 当使用 kebab-case (短横线分隔命名) 定义一个组件时，你也必须在引用这个自定义元素时使用 kebab-case，例如 `<my-component-name>`。
- 使用 PascalCase（大驼峰命名法）
  - 当使用 PascalCase (首字母大写命名) 定义一个组件时，你在引用这个自定义元素时两种命名法都可以使用。也就是说 `<my-component-name>` 和 `<MyComponentName>` 都是可接受的。注意，尽管如此，直接在 DOM (即非字符串的模板) 中使用时只有 kebab-case 是有效的。

#### 全局组件

注册一个全局组件语法格式如下：

```vue
Vue.component(tagName, options)

```

tagName 为组件名，options 为配置选项。注册后，我们可以使用以下方式来调用组件：

```vue
<tagName></tagName>

```

```html
<div id="app">
    <hello></hello>
</div>
<script>
// 注册
Vue.component('hello', {
  template: '<h1>自定义组件!</h1>'
})
// 创建根实例
new Vue({
  el: '#app'
})
</script>

```

#### 局部组件

我们也可以在实例选项中注册局部组件，这样组件只能在这个实例中使用：

```html
<div id="app">
	<!-- 只能在某个对象中使用 -->
	<world></world>
</div>
 
<script>
//注册一个局部组件
var Child = {
  template: '<h1>自定义组件!</h1>'
}
 
// 创建根实例
new Vue({
  el: '#app',
  components: {
    // <runoob> 将只在父模板可用
    'world': Child
  }
})
</script>

```

### Prop

注意: prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是不会反过来。

- 父组件变，子组件变
- 子组件变，父组件不变

#### 静态prop

prop 是子组件用来接受父组件传递过来的数据的一个自定义属性。

父组件的数据需要通过 props 把数据传给子组件，子组件需要显式地用 props 选项声明 "prop"：

```html
<div id="app">
    <child message="hello!"></child>
</div>
 
<script>
// 注册
Vue.component('child', {
  // 声明 props
  props: ['message'],
  // 同样也可以在 vm 实例中像 "this.message" 这样使用
  template: '<span>{{ message }}</span>'
})
// 创建根实例
new Vue({
  el: '#app'
})
</script>

```

#### 动态 Prop

类似于用 v-bind 绑定 HTML 特性到一个表达式，也可以用 v-bind 动态绑定 props 的值到父组件的数据中。每当父组件的数据变化时，该变化也会传导给子组件：

```html
<div id="app">
    <div>
      <input v-model="parentMsg">
      <br>
      <child v-bind:message="parentMsg"></child>
    </div>
</div>
 
<script>
// 注册
Vue.component('child', {
  // 声明 props
  props: ['message'],
  // 同样也可以在 vm 实例中像 "this.message" 这样使用
  template: '<span>{{ message }}</span>'
})
// 创建根实例
new Vue({
  el: '#app',
  data: {
    parentMsg: '父组件内容'
  }
})
</script>

```

#### Prop 验证

组件可以为 props 指定验证要求。

为了定制 prop 的验证方式，你可以为 props 中的值提供一个带有验证需求的对象，而不是一个字符串数组。

```JavaScript
Vue.component('my-component', {
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
})

```

### 组件 - 自定义事件

父组件是使用 props 传递数据给子组件，但如果子组件要把数据传递回去，就需要使用自定义事件！

我们可以使用 v-on 绑定自定义事件, 每个 Vue 实例都实现了事件接口(Events interface)，即：

- 使用 `$on(eventName)` 监听事件
- 使用 `$emit(eventName)` 触发事件
- 另外，父组件可以在使用子组件的地方直接用 v-on 来监听子组件触发的事件
- 如果你想在某个组件的根元素上监听一个原生事件。可以使用 .native 修饰 v-on 

```html
 <div id="app">
      <p>{{total}}</p>
      <!-- 组件复用 -->
      <!-- 自定义事件（变化从子件传过来） -->
      <counter v-on:increment="increment"></counter>
      <counter v-on:increment="increment"></counter>
    </div>
    <script>
      // 定义组件
      let child = {
        // 子件设置点击事件
        template: "<button v-on:click='add'>{{counter}}</button>",
        data() {
          return {
            counter: 0,
          };
        },
        methods: {
          add() {
            this.counter += 1;
            // 把子件的方法与父件的方法绑定在一起
            this.$emit("increment");
          },
        },
      };
      let vm = new Vue({
        el: "#app",
        components: {
          counter: child,
        },
        data() {
          return {
            total: 0,
          };
        },
        methods: {
          increment() {
            this.total += 1;
          },
        },
      });
    </script>

```

#### data 必须是一个函数

- 上面例子中，可以看到 counter 组件中的 data 不是一个对象，而是一个函数：
- 这样的好处就是每个实例可以维护一份被返回对象的独立的拷贝，如果 data 是一个对象则会影响到其他实例，
- 如果是对象的话，那么每个实例都会共用这个对象，而不是拷贝。这样某一个实例改变了对象的值，则全部都改变了
- 注释起来的 data 代码和未注释起来的 data 都是函数，只是注释起来的函数返回值是每执行一次函数就产生一个独立的对象（return），而未注释的 data 函数返回值却是引用了一个已有对象的名称（即对象的引用），不管函数执行多少次返回值都是这个外部定义的对象的引用而已，也就是说不管有多少个组件，所有的组件维护的数据都是同一个对象的数据而已，所以一个组件的数据发生变化同样会影响到其他所有的组件的数据。。。

### 自定义组件的 v-model

组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件。

以下实例自定义组件 runoob-input，父组件的 num 的初始值是 100，更改子组件的值能实时更新父组件的 num：

```html
<div id="app">
    <runoob-input v-model="num"></runoob-input>
    <p>输入的数字为:{{num}}</p>
</div>
<script>
Vue.component('runoob-input', {
    template: `
    <p>   <!-- 包含了名为 input 的事件 -->
      <input
       ref="input"
       :value="value" 
       @input="$emit('input', $event.target.value)"
      >
    </p>
    `,
    props: ['value'], // 名为 value 的 prop
})
   
new Vue({
    el: '#app',
    data: {
        num: 100,
    }
})
</script>

```

由于 v-model 默认传的是 value，不是 checked，所以对于复选框或者单选框的组件时，我们需要使用 model 选项，model 选项可以指定当前的事件类型和传入的 props。

```html
<div id="app">
    <base-checkbox v-model="lovingVue"></base-checkbox> 
     <div v-show="lovingVue"> 
        如果选择框打勾我就会显示。 
    </div>
</div> 
<script>
// 注册
Vue.component('base-checkbox', {
 
  model: {
    prop: 'checked',
    event: 'change'  // onchange 事件
  },
  props: {
    checked: Boolean
  },
   
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
})
// 创建根实例
new Vue({
  el: '#app',
  data: {
    lovingVue: true
  }
})
</script>

```



## 性能优化

### 计算属性computed性能高于函数

## 代码规范

### 注意

- vue实例和组件只能一一对应
- 真实开发中只有一个vue实例，并且会配合组件一起使用
- 所有被Vue管理的函数最好都写为普通函数，不要写箭头函数
  - 普通函数this===》vue实例
  - 箭头函数===》window
- 只要data中的数据改变了，页面上的数据都会改变（每次数据更新都会从新解析模板）
- 绑定事件时（@XXX=‘YYY’，YYY可以是一些简单的语句）
- 对象中的key为字符串
- string.indexof('')===0是代表所有字符中都包含‘’
- template
  - template最后不会渲染在页面上
  - template里面只能有一个根元素（里面可以包括很多元素）一般设计为div
