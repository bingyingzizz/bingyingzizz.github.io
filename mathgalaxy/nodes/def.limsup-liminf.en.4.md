# limit superior and limit inferior　`def.limsup-liminf`
English entry · root `../`
[in graph](../#n=def.limsup-liminf)　·　[Chinese page (authoritative)](./def.limsup-liminf.md)

⭐ Their appearance in measure theory is crucial: Fatou's lemma is exactly $\int \liminf f_n \le \liminf \int f_n$ (**requiring $f_n \ge 0$**, or $f_n \ge g \in L^{1}$; otherwise a counterexample: on $\mathbb{R}$, for $f_n = -\mathbf{1}_{[n,n+1)}$, the left-hand side is $0$ and the right-hand side is $-1$) — no "limit" is available there, because $f_n$ need not converge.

⚠ $\limsup$ and $\sup$ are not the same thing: $\sup_n x_n$ is the supremum of all terms, whereas $\limsup_n x_n$ looks only at the **tail**; thus for $x_n = (-1)^{n}$ we have $\sup x_n = 1$, while $\limsup x_n = 1$ and $\liminf x_n = -1$.

> continued in nodes/def.limsup-liminf.en.5.md
