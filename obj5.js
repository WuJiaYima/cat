let cat = {
  name:  '牛魔',
  age: 3,
  weight:  5,
  varieties:  '英短',
  ismale:  true,
  colour: 'white',

  health:  100,
  food:  100,
  water:  100,
  happy:100,

  liveInterval : null,
  like1:1,
  like2:2,
  like3:3,
  like4:4,
  bark: function () {
    view.displaycatSay('miao~');
    this.water - 1;
  },
  sayname:function(){
    view.displaycatSay('My name is ' + this.name );
    this.food - 1;
  },

  run: function(){
    if (!this.isTired()) {
      view.displaySay(' 牛魔在家里睡觉');
      this.food = this.food - 5;
      this.water = this.water - 5;
      this.happy = this.happy -10;
    } else {
      view.displaySay('牛魔已经被你叫醒了');
    }

    var cat =document.getElementById("cat");
    var exercise =document.getElementById("exercise");
    if (document.getElementById("runBtn").innerHTML=="睡觉") {
      cat.className="hide";
      exercise.className="hide";
      document.getElementById("runBtn").innerHTML="叫醒";
    }else{
      cat.className="cat";
      exercise.className=("exercise");
      document.getElementById("runBtn").innerHTML ="睡觉";
    }

},


  play: function(){
    if (!this.isTired()) {
      view.displaySay(' 猫抓板好好玩');
      this.happy = this.happy + 5 ;
    }
  },
  //状态
  showStatus:function(){
    return "helth: " +this.health  +"food: " +this.food +" "+ "water: " +this.water +"happy: " + this.happy;
  },

  isTired: function(){
    if (this.food >= 20 && this.water >= 20 && this.happy>=20){
      return false;
    };
    return true;
  },




  live: function() {
    let self = this;
    this.liveInterval = setInterval(function(){
      self.water = self.water - 5;
      self.food = self.food - 5;
      if (self.water < 0 ) {
        self.water = 0;
      } else if ( self.food < 0){
        self.food = 0;
      }
      self.checkFood();
      self.checkHealth();
      view.displaycatStatus();
    }, 900);
  },

  checkFood: function (){
    if (this.food <= 0) {
      this.food = 0;
      this.health -= 5;
      this.happy -=5;
      view.displaySay('miao miao miao !')
    } else if (this.food >= 80) {
      this.food = this.food >= 100 ? 100 : this.food;
      this.health += 5;
    }else if (this.happy >110) {
      view.displaySay("幸福感爆棚啦")
      
    }
  },

  checkHealth: function () {
    this.health = this.health >= 100 ? 100 : this.health;
    if (this.health <= 0 ) {
      this.dead();
    };
  },

  checkStatus:function(){
    if(this.water < 0){
      this.water = 0;
      this.bark();
    } 
    if(this.food < 0){
      this.food = 0;
      this.bark();
    }
    if (this.water === 0 || this.food === 0){
      this.health = this.health < 0 ? 0 : this.health - 5;
      this.happy -=5;
    }
    if (this.health === 0) {
      this.dead();
    }
  },

  dead: function(){
    clearInterval(this.liveInterval);
    this.isLive = false;
    view.displaySay("牛魔死了wwwww~");
  },

  

  resurrect: function () {
    if (!this.isLive) {
      this.isLive = true;
      this.health = 100;
      this.food = 100;
      this.water = 100;
      this.happy = 100;
      this.live();
      view.displaySay("我我我我获得重生啦");
    } else {
      view.displaySay("干嘛啊，我还没有死呢");
    }
  },

  eat:function(){
    if (this.isLiving) {
      this.food = 100;
      this.water = 100;
      this.happy = 100;
      view.displaySay(this.name + "吃饱了");
    }
  },
  


//////////////////////////////////////////////////
  friend:function () {
    let guess =document.getElementById("guessInput");
    let value = parseInt(guess.value);
    if (value > 4|| value <1) {
        view.displayspeak("请输入有效数字");
    } else if(Math.floor(Math.random() * 3)){
          view.displayspeak("恭喜你找到了牛魔的好朋友");
      }else if(value >Math.floor(Math.random() * 3)+1||value<Math.floor(Math.random() * 3)-1){
        view.displayspeak("这不是她的朋友，是敌人");
      }else{
        view.displayspeak("猜错了！");
      }
  },


 
/////////////////////////////////////////////////


  isLiving: function(){
    if (this.isLive){
      return true;
    } else {
      view.displaySay(this.name + "已经去世了");
      return false;
    }
  },


  change:function (){
    var cat =document.getElementById("cat");
    var sleep =document.getElementById("sleep");
    if (document.getElementById("world").innerHTML=="锻炼") {
      cat.className="hide";
      sleep.className="hide";
      document.getElementById("world").innerHTML="停止";
    }else{
      cat.className="cat";
      sleep.className="sleep"
      document.getElementById("world").innerHTML="锻炼";
    }
  },




  like1: function () {
    if (this.clothes = 1) {
      view.displaySay('好气！上次和他打了一架');
    }
  },
  like2: function () {
    if (this.clothes1 = 2) {
      view.displaySay('我们不太合适吧');
    }
  },
  like4: function () {
    if (this.clothes2 = 3) {
      view.displaySay('最喜欢和兔兔玩了');
    }
  },
  like3: function () {
    if (this.clothes = 1) {
      view.displaySay('体型也太小了吧');
    }
  },








};


let view ={
  displaycatStatus:function() {
    let statusBoard = document.getElementById("catStatus");
    setInterval(function() {
      statusBoard.innerHTML = cat.showStatus();
    },1000);
  },

displaycatBark :function() {
  let sayTxt = document.getElementById("catBark");
  sayTxt.innerHTML = "hi";
},
displaySay : function(str) {
  let catSay = document.getElementById("say");
  catSay.innerHTML = str;
},



displayBark :function() {
  let Bark = document.getElementById("Bark");
  Bark.innerHTML = "hi";
},
displayspeak : function(str) {
  let speak = document.getElementById("speak");
  speak.innerHTML = str;

},
};

view.displayspeak("康康谁是牛魔的好朋友？（可能都是她的好朋友，可能都不是，可能还会有她的敌人~）");
view.displaySay("我是一只英短");
cat.live();
view.displaycatStatus();