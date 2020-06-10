import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Form from 'containers/chat/Form'

describe('Form', () => {
  const setup = (props = {}) => {
    const utils = render(<Form {...props} />)
    const { getByPlaceholderText, getByTestId } = utils
    const input = getByPlaceholderText('Add text to this message')
    const button = getByTestId('button')

    return {
      ...utils,
      input,
      button,
    }
  }

  it('should render correctly', () => {
    const { input, button } = setup()

    expect(input).toBeTruthy()
    expect(button).toBeTruthy()
  })

  it('change value', () => {
    const { input } = setup()

    fireEvent.change(input, {
      target: {
        value: 'test text',
      },
    })

    expect(input).toHaveAttribute('value', 'test text')
  })

  it('submit', () => {
    const onSubmit = jest.fn()
    const { input, button } = setup({ onSubmit })

    fireEvent.change(input, {
      target: {
        value: 'test text',
      },
    })

    fireEvent.click(button)
    expect(onSubmit).toBeCalledWith({
      chat: 'user',
      content: [
        {
          content: 'test text',
        },
      ],
    })
  })

  it('when chat is typing disable input', () => {
    const { input } = setup({ isLoading: true })

    expect(input).toHaveAttribute('disabled', '')
  })
})
