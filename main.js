const handleInput = (num) =>
{
    const array = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const currentInput =
    document.querySelector(`input:nth-child(${num})`)
    const nextInput =
    document.querySelector(`input:nth-child(${num + 1})`)
    
    if (array.includes(currentInput.value))
        {
            currentInput.className = 'right'
        } else
        {
            currentInput.className = 'wrong'
            btn.disabled = true
        }
        
        if (currentInput.value.length === 1 && nextInput)
            {
                nextInput.disabled = false
                nextInput.focus()
            }
    const btn = document.querySelector('#verify')

    const allInputsFilled = Array.from(document.querySelectorAll('input')).every(input => input.value.length === 1)

    btn.disabled = !allInputsFilled
}
const prevInput = (num, event) =>
{
    if (event.key === "Backspace")
    {
        const currentInput =
            document.querySelector(`input:nth-child(${num})`)
        const prevInput =
            document.querySelector(`input:nth-child(${num - 1})`)
        
        if (currentInput.value.length === 0 && prevInput)
        {
            currentInput.disabled = true
            currentInput.value = ''
            prevInput.focus()
        }
    
        const allInputsFilled = Array.from(document.querySelectorAll('input')).every(input => input.value.length === 1)
    
        const btn = document.querySelector('#verify')
        btn.disabled = !allInputsFilled
    }
}
const btn = document.querySelector('button')
const success = document.querySelector('#success')
btn.addEventListener('click', () =>
{
    setTimeout(() =>
    {
        success.className = 'show'
        document.querySelectorAll('input').forEach(input => {
            input.value = ''
        });
    }, 0);
    setTimeout(() =>
    {
        success.className = ''
    }, 2000);
})