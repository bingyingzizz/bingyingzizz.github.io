# a compact subset is closed　`prop.compact-subset-closed`
English entry · root `../`
[in graph](../#n=prop.compact-subset-closed)　·　[Chinese page (authoritative)](./prop.compact-subset-closed.md)

**Proof.** Let $A$ be compact and take $x \in X\setminus A$; we must show it is an interior point.
- For each $a \in A$, by Hausdorffness take an open neighbourhood $U_{a}$ of $a$ and an open neighbourhood $V_{a}$ of $x$ with $U_{a}\cap V_{a} = \emptyset$ (in a metric space take $U_{a} = B(a, r/2)$ and $V_{a} = B(x, r/2)$, where $r = d(a,x)$);
- $\{U_{a}\}_{a\in A}$ is an open cover of $A$; by **compactness** take a finite subcover $U_{a_{1}}, \ldots, U_{a_{n}}$;
- $V := \bigcap_{i=1}^{n} V_{a_{i}}$ is an open neighbourhood of $x$, and $V\cap U_{a_{i}} = \emptyset$ holds for 

> continued in nodes/prop.compact-subset-closed.en.4.md
