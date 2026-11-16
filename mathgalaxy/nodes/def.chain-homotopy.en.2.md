# chain homotopy　`def.chain-homotopy`
English entry · root `../`
[in graph](../#n=def.chain-homotopy)　·　[Chinese page (authoritative)](./def.chain-homotopy.md)

**Basic fact**: if such a $P$ exists, then $f$ and $g$ induce the **same** homomorphism on homology, i.e. $f_{*} = g_{*} : H_{n}(C) \to H_{n}(D)$.

## Notes · **draft**
**Why "chain homotopy $\implies$ equal on homology"**: let $z \in C_{n}$ be a cycle ($\partial z = 0$). Then

$$g(z) - f(z) = \partial' P(z) + P\partial(z) = \partial' P(z),$$

i.e. $g(z) - f(z)$ is a **boundary** in $D$, so the homology class it represents is $0$. That is, $[g(z)] = [f(z)]$ for every cycle — exactly $f_{*} = g_{*}$. ∎

> continued in nodes/def.chain-homotopy.en.3.md
