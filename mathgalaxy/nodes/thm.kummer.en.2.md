# Kummer's test　`thm.kummer`
English entry · root `../`
[in graph](../#n=thm.kummer)　·　[Chinese page (authoritative)](./thm.kummer.md)

## Notes · **draft**
⭐ This is the **master theorem for positive-term tests**: every "ratio-type" test is obtained from it by choosing a different $\{c_n\}$ —

- $c_n = 1$: **d'Alembert (ratio) test** — $\lim \frac{a_{n+1}}{a_n} < 1$ means convergence, $> 1$ means divergence;

- $c_n = n$: **Raabe's test** — $\lim n\bigl(\frac{a_n}{a_{n+1}} - 1\bigr) > 1$ gives convergence;

- $c_n = n \ln n$: **Bertrand's test** — one finer step than Raabe;

- $c_n$ given by a Gauss expansion: **Gauss's test** — handles the class $a_n/a_{n+1} = 1 + \frac{\mu}{n} + O(n^{-1-\delta})$.

> continued in nodes/thm.kummer.en.3.md
