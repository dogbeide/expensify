import React from 'react'
import { shallow } from 'enzyme'

import { LoginPage } from '../../components/LoginPage' 


test('should render LoginPage', () => {
    const wrapper = shallow(<LoginPage />)
    expect(wrapper).toMatchSnapshot()
})

test('should call startLogin on button click', () => {
    const loginSpy = jest.fn()
    const wrapper = shallow(<LoginPage startLogin={loginSpy} />)
    wrapper.find('button').simulate('click')
    expect(loginSpy).toHaveBeenCalled()
})