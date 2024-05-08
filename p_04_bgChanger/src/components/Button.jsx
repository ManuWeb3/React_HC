// destructured default "props" parameter of JSX component
const Button = ({ color, label, colorCode }) => {
  // event "e" nowehere used, just for memory
  function bgColor(e) {
    document.body.style.backgroundColor = `${colorCode}`
  }
  return (
    <button
      className={`${color} text-white m-1 rounded-full py-1}`}
      // syntax 1: Passed fn. ref. = PROBLEMATIC. Refer HC's video # 9 @ 14:00
      // onClick={bgColor}
      // syntax 2: GOOD (just registered, not called, can pass params)
      /*
      onClick={function () {
        return (document.body.style.backgroundColor = `${colorCode}`)
      }}
      */
      // syntax 3: GOOD (just registered, not called, can pass params)
      /*
      onClick={()=>{
        return (document.body.style.backgroundColor = `${colorCode}`)
      }}
      */
      // syntax 4: GOOD (just registered, not called, can pass params)
      onClick={() => (document.body.style.backgroundColor = `${colorCode}`)}
    >
      {label}
    </button>
  )
}

export default Button
