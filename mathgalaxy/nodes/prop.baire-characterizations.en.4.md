# equivalent characterisations of Baire spaces　`prop.baire-characterizations`
English entry · root `../`
[in graph](../#n=prop.baire-characterizations)　·　[Chinese page (authoritative)](./prop.baire-characterizations.md)

- (1) $\implies$ (2): **contradiction**. Suppose some non-empty open $U$ is meager: $U \subseteq \bigcup_{n} F_{n}$, with each $F_{n}$ nowhere dense (closed, without loss). Put $G_{n} := X \setminus F_{n}$; then each $G_{n}$ is dense open. By (1), $G := \bigcap_{n} G_{n}$ is dense, hence $G \cap U \ne \emptyset$; but $x \in G \cap U$ would give $x \in U$ and $x \notin \bigcup_n F_n$, contradicting $U \subseteq \bigcup_{n} F_{n}$. **This step uses only "a countable intersection of dense open sets is dense"**.
- (2) $\implies$ (3): **the same in rev

> continued in nodes/prop.baire-characterizations.en.5.md
