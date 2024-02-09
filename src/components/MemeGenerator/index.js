import {Component} from 'react'
import {
  Heading,
  Heading1,
  MainContainer,
  InnerCont,
  Input,
  FormContainer,
  Label,
  Option,
  ImageCont,
  Button,
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

class MemeGenerator extends Component {
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    finalUrl: '',
    finalTopText: '',
    finalBottomText: '',
    finalSelectValue: '',
    selectValue: fontSizesOptionsList[0].optionId,
    contShow: false,
  }

  changeInput = event => {
    this.setState({imgUrl: event.target.value})
  }

  changeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  changeTopText = event => {
    this.setState({topText: event.target.value})
  }

  changeFont = event => {
    this.setState({selectValue: event.target.value})
  }

  submitForm = event => {
    const {imgUrl, topText, bottomText, selectValue} = this.state
    event.preventDefault()
    this.setState({
      contShow: true,
      finalUrl: imgUrl,
      finalTopText: topText,
      finalBottomText: bottomText,
      finalSelectValue: selectValue,
    })
  }

  render() {
    const {
      imgUrl,
      topText,
      bottomText,
      selectValue,
      contShow,
      finalBottomText,
      finalTopText,
      finalUrl,
      finalSelectValue,
    } = this.state
    console.log(finalSelectValue)
    return (
      <MainContainer>
        <Heading>Meme Generator</Heading>
        <InnerCont>
          <FormContainer onSubmit={this.submitForm}>
            <Label htmlFor="item1">Image Url</Label>
            <Input
              type="text"
              onChange={this.changeInput}
              placeholder="Enter the Image Url"
              id="item1"
              value={imgUrl}
            />
            <Label htmlFor="item2">Top Text</Label>
            <Input
              type="text"
              onChange={this.changeTopText}
              placeholder="Enter the Top Text"
              id="item2"
              value={topText}
            />
            <Label htmlFor="item3">Bottom Text</Label>
            <Input
              type="text"
              onChange={this.changeBottomText}
              placeholder="Enter the Bottom Tex"
              id="item3"
              value={bottomText}
            />
            <Label htmlFor="item4">Font Size</Label>
            <select value={selectValue} id="item4" onChange={this.changeFont}>
              {fontSizesOptionsList.map(each => (
                <Option value={each.optionId} key={each.optionId}>
                  {each.displayText}
                </Option>
              ))}
            </select>
            <Button type="submit">Generate</Button>
          </FormContainer>
          {contShow && (
            <ImageCont image={finalUrl} data-testid="meme">
              <Heading1 size={finalSelectValue}>{finalTopText}</Heading1>
              <Heading1 size={finalSelectValue}>{finalBottomText}</Heading1>
            </ImageCont>
          )}
        </InnerCont>
      </MainContainer>
    )
  }
}

export default MemeGenerator
