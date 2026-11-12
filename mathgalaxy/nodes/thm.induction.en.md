# induction and recursion　`thm.induction`
English entry · root `../`
[in graph](../#n=thm.induction)　·　[Chinese page (authoritative)](./thm.induction.md)

> English: **draft** · machine-drafted, pending author review; the Chinese page is authoritative.

layer 6 · theorem · cluster Constructing the Number Systems (`set.numbers`) · Set Theory

## Statement · **draft**
Let $\omega$ be the smallest inductive set (that is, $\mathbb{N}$).

**(i) Induction principle**: if $S \subseteq \omega$ satisfies

$$\emptyset \in S, \qquad x \in S \implies x \cup \{x\} \in S$$

then $S = \omega$.

**(ii) Recursive definition**: given a set $A$, an element $a_0 \in A$ and a function $F : A \to A$, there exists a **unique** function $g : \omega \to A$ such that

> continued in nodes/thm.induction.en.2.md
