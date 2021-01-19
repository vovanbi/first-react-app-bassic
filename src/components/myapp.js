
class Shoppingcart extends React.Component
{
    runder()
    {
        return (
            <div className='shopping-list'>
                <h1>
                    Shopping List for {this.props.name}
                </h1>
                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}