import React from 'react';

class CustomGoogleAutocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState();
        this.onAddressChange = this.onAddressChange.bind(this);
        this.autocomplete = null;
    }

    componentDidMount() {
        this.autocomplete = new window.google.maps.places.Autocomplete(
        document.getElementById(this.props.id),
                { types: ['geocode'] }
            );
        this.autocomplete.addListener('place_changed', this.onAddressChange);
    }

    initialState() {
        return {
        formatted_address: ''
            };
    }

    onAddressChange(address) {
        const { input } = this.props;
        const { onChange } = input;
        let addressObject = this.autocomplete.getPlace();
        this.setState({
        formatted_address: addressObject.formatted_address
            });
        onChange(this.state.formatted_address);
    }

    render() {
        const input = {    
        type: 'search',
        value: this.state.formatted_address,
        onchange: this.onAddressChange,
        ...this.props.input,
            };

        const error = this.props.meta.touched && this.props.meta.error;
        let styles;
        if (error) {
            styles = {
                border: 'solid crimson 2px'
                }
        } 
        console.log(this.props.meta);
        return (
            <div>
                <div>
                    <input
                        id={this.props.id}
                        autoComplete="off"
                        {...input}
                        style={styles}
                        {...this.props}
                    />
                </div>
                {error && <span style={{color: 'crimson', fontSize: 14}}>{this.props.meta.error}</span>}
            </div>
            );
    }
}

export default CustomGoogleAutocomplete;

// const CustomGoogleAutocomplete = ({props}) => {

//     const [formatted_address, setFormatted_address] = useState('');
//     let autocomplete = null

//     useEffect(() => {
//         autocomplete = new window.google.maps.places.Autocomplete(
//         document.getElementById(this.props.id),
//                 { types: ['geocode'] }
//             );
//         autocomplete.addListener('place_changed', onAddressChange);
//     })

//     const onAddressChange = () => {
//         const { input } = props;
//         const { onChange } = input;
//         let addressObject = autocomplete.getPlace();
//         setFormatted_address()
//     }

// }