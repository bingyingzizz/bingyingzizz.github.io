# transfinite recursion　`thm.recursion-wellorder`
English entry · root `../`
[in graph](../#n=thm.recursion-wellorder)　·　[Chinese page (authoritative)](./thm.recursion-wellorder.md)

> English: **draft** · machine-drafted, pending author review; the Chinese page is authoritative.

layer 7 · theorem · cluster Ordinals and Transfinite Recursion (`set.ordinal`) · Set Theory

## Statement · **draft**
Let $(W, \preceq )$ be a **well-ordered set** and $G$ an arbitrary function (it may take values in a collection larger than any set). Write $W_{< w} = \{ v \in W : v \prec w \}$. Then there is a **unique** function $F$ defined on $W$ such that

$$F(w) = G\big( F \upharpoonright W_{< w} \big), \qquad \forall w \in W$$

> continued in nodes/thm.recursion-wellorder.en.2.md
