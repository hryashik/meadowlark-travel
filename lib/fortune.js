const fortuneCookies = [
    "Победи свои страхи, или они победят тебя",
    "Рекам нужны истоки",
    "Не бойся неведомого",
    "Тебя ждет приятный сюрприз",
    "Будь проше везде, где только можно"
]
module.exports.getFortune = () => {
    const idx = Math.floor(Math.random() * fortuneCookies.length)
    return fortuneCookies[idx]
}