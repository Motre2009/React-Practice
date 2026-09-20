import { useState } from 'react'

export default function SmartForm() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        city: '',
    })

    function handleInputChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <form>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
            <br />
            <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleInputChange} />
            <br />
            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleInputChange} />
        </form>
    )
}
