import { useState } from 'react'

export function NewTodoForm({ onSubmit }) {  // Aquí desestructuramos props correctamente
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    onSubmit(newItem)  // Aquí ya usamos onSubmit directo, que recibimos como prop
    setNewItem("")
  }

  return (
    <form onSubmit={handleSubmit} className="net-item-form">
      <div className="form-row">
        <label htmlFor='item'>New Item</label>
        <input 
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type='text' 
          id='item'
        />
      </div>
      <button className='btn'>Add</button>
    </form>
  )
}
