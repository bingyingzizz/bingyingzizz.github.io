# G-delta and F-sigma sets　`def.g-delta`
English entry · root `../`
[in graph](../#n=def.g-delta)　·　[Chinese page (authoritative)](./def.g-delta.md)

## Notes · **stale**
Two directions must be kept apart. **The trivial one**: a closed set is a union of one closed set, so $\subseteq F_\sigma$; an open set is an intersection of one open set, so $\subseteq G_\delta$. **In a metric space the converse also holds** (this is the non-trivial half): $\subseteq F_\sigma$ and $\subseteq G_\delta$. Proof: for open $U$ put $F_n := \{x : d(x, X\setminus U) \ge 1/n\}$; each $F_n$ is closed and $U = \bigcup_n F_n$ (for $x \in U$ take $n > 1/d(x, X\setminus U)$), so $U$ is $F_\sigma$; dualizing to complements gives $\subseteq G_\delta$. Separability is not needed here — "an open set is a countable union of b

> continued in nodes/def.g-delta.en.3.md
