# Montel's theorem　`thm.montel`
English entry · root `../`
[in graph](../#n=thm.montel)　·　[Chinese page (authoritative)](./thm.montel.md)

## Notes · **draft**
**Proof**: take a compact exhaustion $K_{1} \subset K_{2} \subset \cdots$, $\bigcup K_{j} = \Omega$. On $K_{j}$, by the **Cauchy inequality**: if $|f| \le M_{j}$ throughout a neighbourhood of $K_{j}$ of radius $r$, then $|f'| \le M_{j}/r$ on $K_{j}$ — the bound is independent of $f$, so $\mathcal{F}$ is **equicontinuous** on $K_{j}$.

Uniform boundedness is supplied by hypothesis, so `thm.arzela-ascoli` gives a convergent subsequence on $K_{j}$;

taking diagonals successively over $j = 1, 2, \ldots$ yields a subsequence converging uniformly on **every** $K_{j}$, i.e. uniformly on compact subsets.

> continued in nodes/thm.montel.en.3.md
