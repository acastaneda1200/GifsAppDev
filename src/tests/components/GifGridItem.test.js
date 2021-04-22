import React from 'react'
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('Pruebas en GifGridItem />', () => {

    const title = 'Un titulo';
    const images = 'https://localhost.algo.jpg'
    test('debe de mostrar el componente correctamente', () => {
        const wrapper = shallow(<GifGridItem title={title} images={images}/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
