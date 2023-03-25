import React from 'react'
import Green from '../Green'

const Modal = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>t("welcome")

        <Green />
      </h1>
    </div>
  )
}

export default Modal