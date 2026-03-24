export const downloadResume = async (resumeUrl, fileName = 'Resume.pdf') => {
  try {
    const response = await fetch(resumeUrl, { cache: 'no-store' })
    if (!response.ok) {
      return false
    }

    const contentType = response.headers.get('content-type') || ''
    if (!contentType.toLowerCase().includes('pdf')) {
      return false
    }

    const blob = await response.blob()
    const blobUrl = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = blobUrl
    anchor.download = fileName
    document.body.appendChild(anchor)
    anchor.click()
    anchor.remove()
    URL.revokeObjectURL(blobUrl)

    return true
  } catch {
    return false
  }
}
