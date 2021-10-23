import {useState} from 'react'
import {Keyboard} from 'react-native'

const useTodos = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const onCreateTodo = () => {
    if (!input.trim()) {
      return
    }

    setTodos(prevState => [input, ...prevState])
    setInput('')
    Keyboard.dismiss()
  }

  const onDeleteTodo = index => {
    const copy = [...todos]
    copy.splice(index, 1)
    setTodos(copy)
  }

  return {input, onChangeText: setInput, onCreateTodo, onDeleteTodo, todos}
}

export default useTodos
