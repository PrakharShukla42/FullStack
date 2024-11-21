const head = React.createElement('h1',{id:'head'},'Learning React');
console.log(head);


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(head);

const element = React.createElement('div',
    {},
    [
        React.createElement('div',
            {class:'child1'},
            [
                React.createElement('h1',{},'This is a H1 Tag'),
                React.createElement('h2',{},'This is H2 Tag'),
            ]
        ),
        React.createElement('div',
            {class:'child2'},
            [
                React.createElement('p',{},'This is a paragraph Tag'),
                React.createElement('p',{},'This is another Paragraph Tag'),
            ]
        ),
    ]
)
root.render(element);