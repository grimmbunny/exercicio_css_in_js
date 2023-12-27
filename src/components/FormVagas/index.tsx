import { FormEvent, useState } from 'react'
import { FormsStyle, CampoStyle, BtnStyle } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormsStyle onSubmit={aoEnviarForm}>
      <CampoStyle
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BtnStyle type="submit">Pesquisar</BtnStyle>
    </FormsStyle>
  )
}
export default FormVagas
