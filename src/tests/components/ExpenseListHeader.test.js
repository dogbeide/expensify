import React from 'react'
import { shallow } from 'enzyme';

import { ExpenseListHeader } from '../../components/ExpenseListHeader'
import expenses from '../fixtures/expenses'


describe('ExpenseListHeader', () => {

    test('should render with 1 expense', () => {
        const wrapper = shallow(
            <ExpenseListHeader
                count={1}
                total={999}
            />
        )
        expect(wrapper).toMatchSnapshot()
    })

    test('should render with multiple expenses', () => {
        const wrapper = shallow(
            <ExpenseListHeader
                count={3}
                total={6666}
            />
        )
        expect(wrapper).toMatchSnapshot()
    })
})
