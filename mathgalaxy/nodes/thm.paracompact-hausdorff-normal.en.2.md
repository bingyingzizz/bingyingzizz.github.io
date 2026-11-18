# Paracompact Hausdorff Spaces Are Normal　`thm.paracompact-hausdorff-normal`
English entry · root `../`
[in graph](../#n=thm.paracompact-hausdorff-normal)　·　[Chinese page (authoritative)](./thm.paracompact-hausdorff-normal.md)

## Notes · **draft**
**Step 1: Paracompact Hausdorff $\implies$ regular.** Suppose $x \in X$, with $F \subseteq X$ closed and $x \notin F$.

For each $y \in F$, Hausdorffness gives disjoint open sets $O_{1} \ni y$ and $O_{2} \ni x$.

Take $G_{y} := O_{1}$. From $O_{1} \subseteq X \setminus O_{2}$ we obtain $\overline{G_{y}} \subseteq X \setminus O_{2}$, so $x \notin \overline{G_{y}}$.

Thus
$$\mathcal{A} := \{\, X \setminus F \,\} \cup \{\, G_{y} : y \in F \,\}$$
is an open cover.

> continued in nodes/thm.paracompact-hausdorff-normal.en.3.md
