const React = require('react')
const Def = require('../default')

function new_comment (data) {
    return (
        <Def>
            <main>
                <h1>Enter your comment</h1>
                <form method="POST" action="/places">
                    <div className="form-group">
                        <label htmlFor="author">Enter your name</label>
                        <input type="text" id="author" name="author" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Enter your comment here</label>
                        <textarea value={textarea} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rating">Rating</label>
                        <input type="number" id="rating" name="rating" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rant">Rant</label>
                        <input type="checkbox" id="rant" name="rant" />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add comments" />
                </form>
            </main>
        </Def>
    )
}

module.exports = new_comment