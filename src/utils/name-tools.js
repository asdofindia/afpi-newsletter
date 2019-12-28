const convertToWord = (code) => code.replace(/^./, code[0].toUpperCase()).replace('-', ' ')

export const getIssueName = (issueId) => {
  let [volume, issue] = issueId.split("/").map(convertToWord)
  return `${volume}, ${issue}`
}

