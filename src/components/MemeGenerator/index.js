import {useState} from 'react'
import {
  MainDiv,
  MemeDiv,
  MemeHeading,
  Label,
  Input,
  Select,
  Button,
  ImageDiv,
  TopText,
  BottomText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
const MemeGenerator = () => {
  const [url, setUrl] = useState('')
  const [topParagraph, setParagraphTop] = useState('')
  const [bottomParagraph, setParagraphBottom] = useState('')
  const [fontSize, setFontSize] = useState('')
  const [imageDisplay, setImage] = useState(false)
  const onChangeUrl = event => {
    setUrl(event.target.value)
  }

  const onChangeTopText = event => {
    setParagraphTop(event.target.value)
  }

  const onChangeBottomText = event => {
    setParagraphBottom(event.target.value)
  }

  const onChangeFontSize = event => {
    setFontSize(event.target.value)
  }

  const onChangeImageDisplay = event => {
    event.preventDefault()
    setImage(true)
  }
  return (
    <MainDiv>
      <MemeDiv>
        <MemeHeading>Meme Generator</MemeHeading>
        <form>
          <Label htmlFor="image">Image URL</Label>
          <br />
          <Input type="text" id="image" onChange={onChangeUrl} />
          <br />
          <Label htmlFor="top text">Top Text</Label>
          <br />
          <Input type="text" id="top text" onChange={onChangeTopText} />
          <br />
          <Label htmlFor="Bottom text">Bottom Text</Label>
          <br />
          <Input type="text" id="Bottom text" onChange={onChangeBottomText} />
          <br />
          <Label htmlFor="size">Font Size</Label>
          <br />
          <Select id="size" onChange={onChangeFontSize} value={fontSize}>
            {fontSizesOptionsList.map(each => (
              <option key={each.optionId}>{each.displayText}</option>
            ))}
          </Select>
          <br />
          <Button onClick={onChangeImageDisplay}>Generate</Button>
        </form>
      </MemeDiv>
      {imageDisplay ? (
        <ImageDiv bgImage={url} data-testid="meme">
          <TopText fontSize={fontSize}>{topParagraph}</TopText>
          <BottomText fontSize={fontSize}>{bottomParagraph}</BottomText>
        </ImageDiv>
      ) : null}
    </MainDiv>
  )
}
export default MemeGenerator
