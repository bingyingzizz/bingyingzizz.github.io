# Euler totient function　`def.euler-phi`
English entry · root `../`
[in graph](../#n=def.euler-phi)　·　[Chinese page (authoritative)](./def.euler-phi.md)

## Notes · **draft**
The formula comes in two steps: first $\varphi(p^{e}) = p^{e} - p^{e-1}$ (among $1$, ..., $p^{e}$, the numbers divisible by $p$ are $p^{e-1}$ in number); then multiplicativity $\varphi(mn) = \varphi(m)\varphi(n)$ (when $\gcd(m,n) = 1$), which follows by splitting the unit group into a direct product via the CRT.

$\varphi$ is the first example of a **multiplicative function**: $f(mn) = f(m)f(n)$ holds for coprime $m, n$. Chapter 3 of the number theory introduction is entirely about such functions ($\tau$, $\sigma$, $\mu$).

> continued in nodes/def.euler-phi.en.3.md
