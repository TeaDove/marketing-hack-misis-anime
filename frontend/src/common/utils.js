const exhausterStatus = (status) => {
  const statuses = ["UNKNOWN", "OK", "WARNING", "ALARM"]
  const find = s => statuses.findIndex(x => x === s)

  let result = "UNKNOWN";
  for (const n of Object.keys(status)) {
    let current = "UNKNOWN"
    if (typeof status[n] === "object" && status[n] !== null) {
      current = exhausterStatus(status[n])
    } else if (n === "status") {
      current = status[n]
    }
    if (find(current) > find(result)) {
      result = current
    }
  }
  return result
}

const roundNum = (x, digits) => {
  if (!digits) digits = 0
  const y = Math.pow(10, digits)
  return Math.round(x * y) / y
}

export {exhausterStatus, roundNum}
