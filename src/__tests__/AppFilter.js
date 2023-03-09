import '@testing-library/jest-dom'
import { render, screen, waitFor, fireEvent } from "@testing-library/react"
import { act } from 'react-dom/test-utils'

import AppFilter from "../AppFilter"

describe('AppFilter', () => {
	it('should filter elements when select filter value', async () => {
		render(<AppFilter />)

		const select = screen.getByDisplayValue('...')

		await waitFor(() => {
			expect(select).toBeInTheDocument()
		})

		expect(screen.getByText('4 tasks remaining')).toBeInTheDocument()
		expect(screen.getAllByRole('listitem').length).toEqual(4)

		fireEvent.change(select, { target: { value: 'done' } })

		await waitFor(() => {
			expect(screen.getByDisplayValue('Done')).toBeInTheDocument()
		})
		expect(screen.getByText('2 tasks remaining')).toBeInTheDocument()
		expect(screen.getAllByRole('listitem').length).toEqual(2)
	})

	it('should mark task as done when toggle that task', () => {
		render(<AppFilter />)

		const allNotDoneTasks = screen.getAllByRole('checkbox', { checked: false })

		act(() => {
			allNotDoneTasks[0].click() // mark first not-done task in list to done
		})

		expect(screen.getAllByRole('checkbox', { checked: false }).length).toEqual(allNotDoneTasks.length - 1)
	})

	it('should add item when click add todo button', async () => {
		// TODO: to be implemented by student
        render(<AppFilter />)

        const input = screen.getById('new-todo-input');
        fireEvent.change(input, {target: {value: 'test'}});

        const button = screen.getByRole('button', {name:'Add'})

        fireEvent.click(button)
        expect(screen.getAllByRole('listitem').length).toEqual(5)

	})

	it('should delete item when click delete button', () => {
		// TODO: to be implemented by student
        render(<AppFilter />)

        const button = screen.getByRole('button', {name:'Delete'})

        act(() => {
			button[0].click()
		})
        expect(screen.getAllByRole('listitem').length).toEqual(3)
	})
})
