# Shrinking Lemma　`lem.shrink`
English entry · root `../`
[in graph](../#n=lem.shrink)　·　[Chinese page (authoritative)](./lem.shrink.md)

and $\mathcal{V}$ is still locally finite. Such a family $\mathcal{V}$ is called a **shrinking** of $\mathcal{U}$.

## Notes · **draft**
**Proof (well-order the index set and shrink one member at a time)**. Choose a well-order on $I$ (using the axiom of choice). Construct open sets $V_{i}$ such that $\overline{V_{i}} \subseteq U_{i}$ while preserving coverage. Maintain the invariant that for every $i$, the family
$$\mathcal{W}_{i} := \{\, V_{j} : j < i \,\} \cup \{\, U_{k} : k \ge i \,\}$$
is a cover of $X$.
**Successor step** ($i \to i^{+}$): Set $A_{i} := X \setminus \bigcup \mathcal{W}_{i^{+}}$.

The set $A_{i}$ is **closed**.

> continued in nodes/lem.shrink.en.3.md
