
const User = require("../models/usersModel");

const getAllUsers = (req, res) => {
    User.find({}, (err, data) => {
        const encryptCaesar = (password) => {
            const shiferKalit = process.env.SHIFIR_KALIT;

            // Matnni ketma-ketlikka olish
            const bytes = new TextEncoder().encode(password);

            // Matnni shifrlash
            let encryptedBytes = new Uint8Array(bytes.length);
            for (let i = 0; i < bytes.length; i++) {
                encryptedBytes[i] = (bytes[i] + shiferKalit) % 256;
            }
            // Shifrlangan matnning string sifatida qaytarilishi
            return new TextDecoder().decode(encryptedBytes);
        }
        const shifrData = data.map(user => {
            const password = encryptCaesar(user.password)
            user.password = password
            return user
        })
  
        res.status(200).json(data)
        // res.status(500).json({error: err.message})
    })
}

const signup = async (req, res) => {
    try {
        const newUser = await User.signup(req);
        res.status(201).json(newUser)
    }
    catch (err) {
        await res.status(500).json({ error: err.message })
    }

}
const login = async (req, res) => {
    try {
        const newUser = await User.login(req);
        res.status(201).json(newUser)
    }
    catch (err) {
        await res.status(500).json({ error: err.message })
    }

}

module.exports = { getAllUsers, signup, login };
