# basic properties of measures　`prop.measure-basic`
English entry · root `../`
[in graph](../#n=prop.measure-basic)　·　[Chinese page (authoritative)](./prop.measure-basic.md)

## Notes · **draft**
(a): split $F$ as $F = E \cup (F \setminus E)$ and use countable additivity (fill the remaining positions with $\emptyset$).

(b): rewrite $\bigcup E_{j}$ as a disjoint union: $F_{j} = E_{j} \setminus (E_{1} \cup \cdots \cup E_{j-1})$, then $\mu (\bigcup E_{j}) = \sum \mu (F_{j}) \le \sum \mu (E_{j})$.

(c): put $A_{j} = E_{j} \setminus E_{j-1}$ ($E_{0} = \emptyset$); then $\bigcup E_{j}$ is a disjoint union of the $A_{j}$, and $\mu (E_{n}) = \sum _{j\le n} \mu (A_{j})$ — take limits on both sides.

> continued in nodes/prop.measure-basic.en.4.md
