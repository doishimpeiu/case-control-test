import React from 'react'

const Pref = ({hok, prefs}) => {
  return (
    <div>
      <label>
        <input type="checkbox" />{hok}, {prefs}
      </label>
    </div>
  )
}

export default Pref
