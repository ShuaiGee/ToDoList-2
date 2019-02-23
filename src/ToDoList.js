import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
/*父组件 父组件使用属性值来与子组件之间进行参数值的传递*/
class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            list:[],
            inputValue:'',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);/*涉及到react底层的性能优化 在constructor内进行替换*/


    }
    handleBtnClick(){/*react与vue类似，不再强调dom操作，更多的是进行数据的操作*/
       this.setState({
           list:[...this.state.list,this.state.inputValue],
           inputValue: ''
       })
    }
    handleInputChange(ChangeValue){
        this.setState({
            inputValue:ChangeValue.target.value
        })

    }
   /* handleItemClick(index){

            const list =[...this.state.list];/!*看似繁琐的操作是为了不直接改动this.state.list 能够使得在后期调试代码时能够变得更加方便
            拷贝出一个副本 在副本上进行操作能有效减少对数据的破坏*!/
            list.splice(index,1);
            this.setState({
                list:list
            })
        }*//*此处点击删除的方法是初步学习所编写；在使用组件思想之后另外在todoitem内另外编写*/

    handleDelete(index){
        const list =[...this.state.list];
        list.splice(index,1);
        this.setState({
            list:list
        })

    }
    getItems(){
        return (
            this.state.list.map((item,index) =>
            {  /*return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>*/
                return (
                    <ToDoItem
                        delete={this.handleDelete}
                        key={index} content={item}
                        index={index}
                    />
                    /*将父组件内的方法传递给子组件*/
                )

            })
        )

    }

  render() {/*render 函数只能返回一个标签 可以同过嵌套div标签的方式来实现*/
    return (
    <div>
        <div className="ToDoList">
            {/*为了防止react混淆class为声明一个组件，这里使用classnName
        来实现原本由class来实现的功能*/}
            <input value={this.state.inputValue} type="text" onChange={this.handleInputChange} />
            <button className="red-btn" onClick={this.handleBtnClick}>add</button>{/*此处为重点掌握处，this的指向问题*/}
        </div>
        <div>
            <ul>{this. getItems()}</ul>
        </div>
    </div>


    );
  }
}

export default ToDoList;
