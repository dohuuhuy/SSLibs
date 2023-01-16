import IconImg from '@components/provider/IconImg'
import IconSvg from '@components/provider/IconSvg'

export default function Home() {
  return (
    <>
      <div>
        <IconSvg name='pen_edit' size={25} fill='red' />

        <IconImg name='chat' size={500}/>
      </div>
    </>
  )
}
