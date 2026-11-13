# Bernstein polynomial approximation　`thm.bernstein-approximation`
English entry · root `../`
[in graph](../#n=thm.bernstein-approximation)　·　[Chinese page (authoritative)](./thm.bernstein-approximation.md)

## Notes · **draft**
The proof is written on the edge @@imp.bernstein-approximation@@: view $B_nf(x)$ as the expectation of $f(S_n/n)$ (where $S_n\sim\mathrm{Bin}(n,x)$), and use the binomial moment identities $\mathbb E[S_n/n]=x$, $\operatorname{Var}(S_n/n)=x(1-x)/n\le 1/(4n)$, together with uniform continuity of $f$, to split the error into two regimes (where the deviation is $<\delta$ the error is $<\varepsilon$; elsewhere Markov's inequality gives probability $\le 1/(4n\delta^2)$), then take $n$ large enough to get uniform convergence.

> continued in nodes/thm.bernstein-approximation.en.3.md
