// npm -> mode package manager 
// package.json

const list =(
    <ul>
        <li>Hello</li>
        <li>Hello</li>
        <li>Hello</li>
        <li>Hello</li>
    </ul>
) 



const temp=(
    <div>
   { list}
   { list}
   { list}
   { list}
   { list}
 
    </div>
)

ReactDOM.render(temp,document.querySelector('#root'));