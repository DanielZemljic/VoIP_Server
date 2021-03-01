import React, { useCallback } from "https://esm.sh/react"
import { redirect } from "https://deno.land/x/aleph/mod.ts"

export default function Link({to, replace, children}) {
  const onClick = useCallback(e => {
    e.preventDefault()
    redirect(to, replace)
  }, [to, replace])
  return (
    <a href={to} onClick={onClick}>{children}</a>
  )
}