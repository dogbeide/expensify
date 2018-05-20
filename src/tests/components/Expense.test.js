import React from 'react'
import { shallow } from 'enzyme'

import Expense from '../../components/Expense'
import expenses from '../fixtures/expenses'


test('should render Expense', () => {
    const wrapper = shallow(<Expense {...expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})