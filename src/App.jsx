import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState("")
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState("")

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(Number(amount) * currencyInfo[to])
  }

  return (
    <div
  className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg)`
  }}
>
      <div className="w-full">

        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">

          <form
            onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}
          >

            {/* FROM */}
            <div className="w-full mb-1">

              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}

                onAmountChange={(amount) => setAmount(amount)}

                onCurrencyChange={(currency) => setFrom(currency)}

                selectCurrency={from}
              />

            </div>


            {/* SWAP */}
            <div className="relative w-full h-0.5">

              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>

            </div>


            {/* TO */}
            <div className="w-full mt-1 mb-4">

              <InputBox
                label="To"

                amount={convertedAmount}

                currencyOptions={options}

                onCurrencyChange={(currency) => setTo(currency)}

                selectCurrency={to}

                amountDisable
              />

            </div>


            {/* CONVERT */}
           <button
              type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg
             transition-all duration-100
             hover:bg-blue-700
             active:scale-95"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
</button>

          </form>

        </div>

      </div>
    </div>
  )
}

export default App