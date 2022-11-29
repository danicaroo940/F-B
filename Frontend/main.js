
    async function main(event){
        const user = document.getElementById('username-input');
        const pass = document.getElementById('password-input');
        const response = await fetch ('http://localhost:3000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                user: user.value,
                pass: pass.value
            })
        });
        localStorage.setItem('test', 1);
        return await response.json();
    }
   