const identifyChat = (output) => {
  if (output.generic[0].response_type === 'text') {
    return {
      chat: 'bot',
      content: [
        {
          content: output.generic[0].text,
        },
      ],
    }
  }
  if (output.generic[0].response_type === 'option') {
    return {
      chat: 'bot',
      content: [
        {
          content: output.generic[0].title,
          response: output.generic[0].options.map((_i) => ({
            label: _i.label,
            text: _i.value.input.text,
          })),
        },
      ],
    }
  }
  return {
    chat: 'bot',
    content: [
      {
        content: '알 수 없는 오류가 발생했어요.',
      },
    ],
  }
}

export default identifyChat
