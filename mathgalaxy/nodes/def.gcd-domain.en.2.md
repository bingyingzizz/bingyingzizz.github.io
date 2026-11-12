# GCD domain　`def.gcd-domain`
English entry · root `../`
[in graph](../#n=def.gcd-domain)　·　[Chinese page (authoritative)](./def.gcd-domain.md)

## Notes · **draft**
Why it must be defined this way: in $\mathbb{Z}$ the "greatest common divisor" relies on comparing $|d|$, and a general integral domain has no absolute value. The right replacement is "divisible by every common divisor": in $\mathbb{Z}$ it is equivalent to "largest absolute value", and in $\mathbb{Z}[i]$ too this is the only statement that holds.

Hierarchy: UFD $\implies$ gcd domain (`imp.ring-ufd-gcd`), but not conversely ($\mathbb{Z}[\sqrt{-5}]$ does not even have $\gcd(6, 2(1+\sqrt{-5}))$). Bézout domain $\implies$ gcd domain, because $\gcd$ is given directly by a linear combination.

> continued in nodes/def.gcd-domain.en.3.md
