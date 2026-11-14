# addition and multiplication of natural numbers　`def.nat-arith`
English entry · root `../`
[in graph](../#n=def.nat-arith)　·　[Chinese page (authoritative)](./def.nat-arith.md)

> English: **draft** · machine-drafted, pending author review; the Chinese page is authoritative.

layer 7 · definition · cluster Constructing the Number Systems (`set.numbers`) · Set Theory

## Statement · **draft**
Let $\omega = \mathbb{N}$, $S(n) := n \cup \{n\}$, $0 := \emptyset$. Define two operations on $\omega$ by **recursion**.

**Addition**: for each fixed $m$, the map $n \mapsto m + n$ is the unique $g : \omega \to \omega$ satisfying

$$m + 0 := m, \qquad m + S(n) := S(m + n)$$

**Multiplication**: likewise,

$$m \cdot 0 := 0, \qquad m \cdot S(n) := m \cdot n + m$$

> continued in nodes/def.nat-arith.en.2.md
