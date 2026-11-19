# G-delta and F-sigma sets　`def.g-delta`
English entry · root `../`
[in graph](../#n=def.g-delta)　·　[Chinese page (authoritative)](./def.g-delta.md)

## Notes · **draft**
Distinguish the two directions first. The **trivial** one: a closed set is "a union of one closed set", so closed $\subseteq F_\sigma$; an open set is "an intersection of one open set", so open $\subseteq G_\delta$. **In a metric space the converse also holds** (this is the nontrivial half): open $\subseteq F_\sigma$, closed $\subseteq G_\delta$. Proof: when $U$ is open put $F_n := \{x : d(x, X\setminus U) \ge 1/n\}$; each $F_n$ is closed and $U = \bigcup_n F_n$ (for $x \in U$ choose $n > 1/d(x, X\setminus U)$), so $U$ is $F_\sigma$; dualising to the complement gives "closed $\subseteq G_\delta$". This step needs no separabi

> continued in nodes/def.g-delta.en.3.md
