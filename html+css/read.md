### 0.label标签作用

> label标签通常是和表单input结合，当点击label区域内容时，表单自动聚焦

```
<lable>name: </label><input />
```

### 1.盒子模型

css盒子模型是一个盒子，它包含了margin,border,padding,content区域。

**标准盒子模型**

1. 元素宽度width = content内容区域

2. 盒子总宽度=margin+border+padding+元素width 

3. 盒子默认设置border-sizing:content-box,盒子可以被子元素撑大

**IE盒子模型**

1. 元素width = content + padding + border

2. 盒子总宽度=元素width+margin

3. 盒子默认设置border-sizing:border-box,盒子一旦确认，子元素无法撑起盒子

### 2. transition和animation的区别

transtion指的是过渡，满足三要素是：元素某个属性的改变，告诉系统哪个属性执行过渡效果，过渡执行的时间

animation指的是动画，满足的三要素是：声明动画的名称，定义动画效果，动画执行时间

所以说transtion和animation都是动画的效果，而transtion需要某个元素触发改变才能执行，而animation是自动执行

### 3.元素水平垂直居中

**3.1：position+transform**

```
.father{
    width: 200px;
    height: 200px;background-color: red;
    position: relative;
}
.son{
    width: 100px;
    height: 100px;
    background: blue;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
```

**3.2 display居中布局**

```
.father{
    width: 200px;
    height: 200px;background-color: red;
    display: flex;
    justify-content: center;//子元素横轴居中
    align-items: center;//子元素侧轴居中
}
.son{
    width: 100px;
    height: 100px;
    background: blue;
}
```

### 4 绘制三角形，圆形，椭圆

**4.1 绘制圆形**

```
div{
	width:200px;
	height:200px;
	border-raduis:50%;
}

```

**4.2 绘制椭圆**

```
//椭圆就是三角形基础上绘制圆弧
div{
	width: 0;
    height: 0;
    border: 100px solid red;
    border-color: red transparent transparent;
    border-radius: 100px;
}
```

**4.3 绘制半圆**

```
div{
    width: 100px;
    height: 50px;
    border-radius: 50px 50px 0 0;
    background: red;
}
```

**4.4 绘制四种三角形**

>border本质不是矩形，而是三角形。

```
//哪个方向的三角形，哪个方向有颜色
div{
	width: 0;
    height: 0;
    border: 100px solid red;
    border-color: red transparent transparent;
}
```

### 5 像素单位px % em rem vw vh

#### 5.1 px

```
px是像素单位，无论浏览器页面如何改变，像素都是固定不变
```

#### 5.2 %

```
%可用于宽度，高度，padding,margin的设置上，注意：border不可以使用百分比设置
```

**width和height的百分比**

> width和height的百分比是参考父类元素的width和height进行设置的

```
<div class="father">
	<div class="son"></div>
</div>

<style>
	.father{
		width:120px;
		height:140px;
	}
	.son{
		width:50%;//60px
		height:50%;//70px
	}
</style>
```

**padding和margin的百分比**

> padding和margin的百分比都是参考父类元素的width进行设置的

```
<div class="father">
	<div class="son"></div>
</div>

<style>
	.father{
		width:120px;
		height:140px;
	}
	.son{
		padding:50%;//相对于父元素width,60px
		margint:50%;//60px
	}
</style>
```

#### 5.3 em

> em是字体单位像素，首先参考自己设置font-size的值，如果自己没设置，则参考祖先的
>
> 如果祖先没有，一直来到根html，如果还没有，则使用浏览器默认的

```
<div class="father">
	<div class="son"></div>
</div>

<style>
	.father{
		width:120px;
		height:140px;
		font-size:14px;
	}
	.son{
		width:10em;//140px;
		height:10em;//140px;
	}
```

#### 5.4 rem

> rem只参考根元素设置的font-size,如果根元素没有，则使用浏览器默认的

```
<div class="father">
	<div class="son"></div>
</div>

<style>
	html{
		font-size:15px;
	}
	.father{
		width:120px;
		height:140px;
		font-size:14px;
	}
	.son{
		width:10rem;//150px;
		height:10rem;//150px;
	}
</style>
```

#### 5.5 vw vh

> 只参考当前视口的大小

#### 5.6 vmax vmin

> 保证浏览器旋转屏幕后，宽高保持不变

### 6.文本（图片）内容垂直居中

```
display: table-cell;
vertical-align: middle;
```

### 7.文本溢出，用省略号...

**单行文本省略**

```
overflow: hidden;            // 溢出隐藏
text-overflow: ellipsis;      // 溢出用省略号显示
white-space: nowrap; 
```

**多行文本省略**

```
overflow: hidden;
display: -webkit-box;
-webkit-box-orient:vertical;
-webkit-line-clamp:4;//最多显示几行
```

### 8.清除浮动

**方式一：父元素设置高度**

**方式二：父元素设置:overflow:hidden**

**方式三：父元素设置伪元素（最常用）**

```
.box::after{
    content: '';
    display:block;
    clear: both;
}
```

### 9.BFC理解

**1.概念**

> BFC称为块级格式化上下文。我的理解就是BFC是一个独立的空间，其内部子元素的布局不会影响外面的元素

**2.作用范围**

* 消除浮动
* 解决上下边距塌陷问题
* 设计两栏布局

**3.触发**

```
overflow:hidden;
display:inner-block, flex, tabel-ceil;
position:absolute, fixed;
```

### 10.Flex布局

### 11.实现小于12px字体

> 本质无法完成小于12px的字体，通过缩放标签 间接完成

```
div{
	font-size:12px;
	transform:scale(0.8);
}
```

### 12.两栏布局

**1.float+margin完成**

```
<div class='box'>
	<div class='left'></div>
	<div class='right'></div>
<div>


<style>
.box{
	width:100%;
	height:200px;
}
.box>div{
	height:200px;
}
.left{
	float:left;
	width:200px;
}
.right{
	margin-left:200px;
}
</style>
```

**2.flolat+BFC**

```
<div class='box'>
	<div class='left'></div>
	<div class='right'></div>
<div>


<style>
.box{
	width:100%;
	height:200px;
}
.box>div{
	height:200px;
}
.left{
	float:left;
	width:200px;
}
.right{
	overflow:hidden;
}
</style>
```

**3.flex布局**

```
<div class='box'>
	<div class='left'></div>
	<div class='right'></div>
<div>


<style>
.box{
	width:100%;
	height:200px;
	display:flex;
}
.box>div{
	height:200px;
}
.left{
	width:200px;
}
.right{
	flex:1;
}
</style>
```

### 13.三栏布局

> 三栏布局的特定是两边确定宽度，中间自适应

**1.float+margin**

> 两侧固定的盒子左右浮动，中间的设置margin隔离 （注意中间的盒子最后出现，浮动规则）

```
<div class="box">
    	<div class="left">1</div>
    	<div class="right">3</div>
    	<div class="main">2</div>
</div>


.box{
	height: 100px;
}
.box>div{
	height: 100px;
}
.left{
    width: 200px;
	background: pink;
	float: left;
}
.right{
	width: 200px;
	background: green;
	float: right;
}
.main{
	margin: 0 200px;
	background: red;
}
```

**2.float+BFC**

> 两侧固定的盒子左右浮动,中间盒子触发BFC隔离两边的浮动.

```
<div class="box">
    	<div class="left">1</div>
    	<div class="right">3</div>
    	<div class="main">2</div>
</div>

.box{
	height: 100px;
}
.box>div{
	height: 100px;
}
.left{
    width: 200px;
	background: pink;
	float: left;
}
.right{
	width: 200px;
	background: green;
	float: right;
}
.main{
	overflow:hidden;
	background: red;
}
```

**3.flex**

> 此时中间元素出现在中间,符合正常的排布

```

<div class="box">
    	<div class="left">1</div>
    	<div class="main">2</div>
    	<div class="right">3</div>
</div>


.box{
	height: 100px;
	display:flex;
}
.box>div{
	height: 100px;
}
.left{
    width: 200px;
	background: pink;
}
.right{
	width: 200px;
	background: green;
}
.main{
	flex:1;
	background: red;
}
```



### 14.伪元素和伪类的理解

> 伪类：讲特定的功能绑定到选择器上，它是在已存在的元素上作用，不产生新元素

```
div:hover{

}

div:nth-first-child{

}
```

> 伪元素：首先会产生新的元素，但是不会在文档上生成，主要是在某个元素前后插入额外的元素或者内容。

```
h2::before{
	content:"dzp";
	display:block;
	background:red;
	color:pink;
}
```

### 15.圣杯布局

> 圣杯布局：使用float+padding完成

1. 中间盒子最前面，后面是左右两个盒子。三个都左浮动
2. 最外面大盒子设置padding-left和padding-right是左右两个盒子的宽度
3. 中间盒子设置宽度100%,占据中心全部位置
4. 左边盒子设置margin-left:-100%,接着设置position:relative ,right:width可以移动到最左边
5. 右边盒子设置marign-left:width，接着设置position:relative,left:width可以移动到最右边

```
<div class="box">
	<div class="main"></div>
	<div class="left"></div>
	<div class="right"></div>
</div>


<style>
.box{
	height:100px;
	padding:0 100px;
}
.box>div{
	height:100px;
	float:left
}
.main{
	width:100%;
}
.left{
	width:100px;
	margin-left:-100%;
	position:relative;
	right:100px;
}
.right{
	width:100px;
	margin-left:-100px;
	position:relative;
	left:100px;
}
</style>
```



### 16.双飞翼布局

> 双飞翼布局是float+margin完成的

1. 中间盒子最前面，依次是左盒子，右盒子，三个都左浮动
2. 中间盒子嵌套一个盒子，中间盒子宽度100%，铺满屏幕，设置中间盒子里面盒子mrgin-left和margin-right是左右盒子的宽度
3. 左边盒子设置margin-left:-100%,跑到最左边
4. 右边盒子设置margin-left:-width.跑到最右边

```
<div class="box">

	<div class="main">
		<div class="contain"></div>
	</div>
	
	<div class="left"></div>
	<div class="right"></div>
</div>

<style>
.box{
	height:100px;
}
.box>div{
	height:100px;
	float:left;
}
.left,.right{
	width:100px;
	height:100px;
}
.main{
	width:100%;
}
.main>div{
	margin:0 100px;
}
.left{
	margin-left:-100%;
}
.right{
	margin-left:-100px;
}
</style>
```

### 17.外边距塌陷

> 外边塌陷只存在 块级元素，并且只出现在垂直方向，水平方向不存在边距重合塌陷的情况。

**规则：margin**

1. 两个正数，取最大的
2. 两个负数，取绝对值最大的
3. 一正一负，取两个之和

### 18.实现0.5Px

> 0.5像素主要是移动端的问题，最简单的方式是直接设置0.5px，但是老板版存在兼容性问题。

1. 添加伪类元素设置绝对定位
2. 伪类元素的宽度和高度都是2倍，边框是1px
3. 伪类元素整体缩放到0.5

```
.border {
        width: 200px;
        height: 200px;
        margin: 0 auto;
        position: relative;
 }
.border::before {
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        width: 200%;
        height: 200%;
        border: 1px solid red;
        transform-origin: 0 0;
        transform: scale(0.5);
}
```

### 19.移动端适配方案

**方案一**

> 使用媒体查询方式,缺点需要针对不同页面尺寸进行维护,开发难度大,维护成本高,我不太喜欢用

**方案二**

> 使用rem+viewport进行配置,rem是根标签的字体大小像素单位,viewport设置移动端其它配置

### 20.品字布局

**满屏**

> 上面的全屏，下面的两个元素浮动，各占50%

```
<div>1</div>
<div>2</div>
<div>3</div>


div{
	height: 100px;
}

body>div:nth-child(1){
	background: red;
}

body>div:nth-child(2){
	background: blue;
	width: 50%;
	float: left;
}

body>div:nth-child(3){
	background: pink;
	width: 50%;
	float: left;
}
```

**局部**

```
div{
	width: 100px;
	height: 100px;
	background: red;
}

body>div:nth-child(1){
	margin: 0 auto;
}

body>div:nth-child(2){
	float: left;
	background: pink;
    margin-left: 50%;
	transform: translateX(-100%);
}

body>div:nth-child(3){
	background: yellow;
	float: left;
	transform: translateX(-100%);
}
```

### 21. 图片防抖动

> 先让图片的盒子占据一定的空间，等图片加载成功后自动铺开

```
div{
	height:0;
	overflow:hidden;
	paddind-bottom:图片的宽/图片的高%
	img{
		width:100%;
	}
}
```



### 22. Line-height继承属性

**1.父元素的line-height具体px,直接继承**

**2.父元素的line-heigh是纯数字**

子元素的line-heigth = 子元素font-size * 父元素line-height

```
.box{
	line-height: 1.2;
	font-size: 20px;
}
.box>div{
	font-size: 12px;
}

div的line-heigth是 12*1.2=14.4px
```

**3.父元素的line-height是百分比**

子元素的line-height= 父元素的font-size * 父元素line-heigth

```
.box{
	line-height:200%;
	font-size: 20px;
}
.box>div{
	font-size: 12px;
}

div的line-heigth是 20 * 2 = 40px;
```





