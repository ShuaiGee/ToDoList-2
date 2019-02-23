/**
 * Created by GeShuai on 2019/2/23.
 */
import React from 'react';
/*子组件 子组件通过使用props来与父组件之间进行参数的接收*/
/*子组件如果要和父组件进行通信，要调用父组件传递过来的方法*/
class ToDoItem extends React.Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(){
        this.props.delete(this.props.index)


}
    render(){
        return (
            <div onClick={this.handleDelete}>{'*'+(this.props.index+1)+' '+this.props.content}</div>
        )/*此处return的内容需要使用圆括号括起来 在render函数里的返回值都要使用圆括号 */


    }
}
export default ToDoItem;