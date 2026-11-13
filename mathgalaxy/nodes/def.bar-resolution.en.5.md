# Bar Resolution　`def.bar-resolution`
English entry · root `../`
[in graph](../#n=def.bar-resolution)　·　[Chinese page (authoritative)](./def.bar-resolution.md)

**Exactness (contracting homotopy)**: set $B_{-1} := R$, $d_{0} := \varepsilon$, and

$$s_{n}[g_{0}|\cdots|g_{n}] := [1|g_{0}|\cdots|g_{n}] \qquad (n \ge 0), \qquad s_{-1}(1) := [1] .$$

Expanding term by term gives $d_{n+1} s_{n} + s_{n-1} d_{n} = \mathrm{id}$: $s d$ produces terms that "insert $1$ and delete some $g_{i}$", while $d s$ produces the same terms **with the opposite sign** plus the term $[g_{0}|\cdots|g_{n}]$ itself; the two strings cancel, leaving only that term.

Hence the augmented complex is contractible, $H_{n}(B_{\bullet}) = 0$ for $n > 0$, $H_{0} = R$, and the resolution is established.

∎

> continued in nodes/def.bar-resolution.en.6.md
