import React, { Component } from 'react'
import { render } from 'react-dom'

let skiData = {
    total: 50,
    powder: 20,
    backcountry: 10,
    goal: 100
}

const getPercent = decimal => {
    return decimal * 100 + '%'
}
const calcGoalProgress = (total, goal) => {
    return getPercent(total / goal)
}

//replace (props) with ({total, powder, backcountry, goal}) ; access props by name to destructure the code ; cannot creat functions in function here
const SkiCounterComplex = ({total, powder, backcountry, goal}) => {
    return (
        <section>
        <div>
            <h2>Ski Days Counter Goals</h2>
            <p>Total days: {total}</p>
            <p>Powder days: {powder}</p>
            <p>Backcountry: {backcountry}</p>
            <p>Goal: {calcGoalProgress(total, goal)}</p>
        </div>
             </section >
    )
}

class SkiDayCounter extends Component {
    //add functions
    getPercent = decimal => {
        return decimal * 100 + '%'
    }
    calcGoalProgress = (total, goal) => {
        return this.getPercent(total/goal)
    }
    //end functions, begin render method
    render () {
        const {total, powder, backcountry, goal} = this.props
         return(
            <section>
                <div>
                <h2>Ski Days</h2>
                <p>Total days: {total}</p>
                <p>Powder days: {powder}</p>
                <p>Backcountry: {backcountry}</p>
                <p>Goal: {goal}</p>
                </div>
           
                 <div>
                     <h2>Ski Days Goals!</h2>
                     <p>Total days: {total}</p>
                     <p>Powder days: {powder}</p>
                     <p>Backcountry: {backcountry}</p>
                     <p>Goal: {this.calcGoalProgress(total, goal)}</p>
                 </div>
             </section>

        )
    }   
}


class Message extends Component {
    render() {
        console.log(this.props)
        return(
            <div>
                <h1 style={{color:this.props.color}}>{this.props.msg}</h1>
                <p>I'll check back in {this.props.minutes} minutes</p>
                <p>And guess what? I am {this.props.age} years old</p>
            </div>

        )
    }

}
render(
  <Message color="blue" age={50} msg="how are you?" minutes={5}/>,
    document.getElementById('root')
)

render(
    <SkiDayCounter
        total={skiData.total}
        powder={skiData.powder}
        backcountry={skiData.backcountry}
        goal={skiData.goal}
    />,
    document.getElementById('ski')
)

render(
    <SkiDayCounter
        total={skiData.total}
        powder={skiData.powder}
        backcountry={skiData.backcountry}
        goal={skiData.goal}
    />,
    document.getElementById('ski')
)

//render const method
render(
    <SkiCounterComplex
        total={skiData.total}
        powder={skiData.powder}
        backcountry={skiData.backcountry}
        goal={skiData.goal}
    />,
    document.getElementById('skiComplex')
)