const random_jokes = [
    {
        setup: 'What is the object oriented way to get wealthy ?',
        punchline: 'Inheritance'
    },
    {
        setup: 'To understand what recursion is...',
        punchline: "You must first understand what recursion is"
    },
    {
        setup: 'What do you call a factory that sells passable products?',
        punchline: 'A satisfactory'
    }
]

let count = 0

export default {
    'get /dev/random_joke': (req, res) => {
        const responseObj = random_jokes[count % random_jokes.length]
        count += 1
        setTimeout(() => {
            res.json(responseObj)
        }, 3000)
    }
}