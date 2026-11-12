# Filter and Ultrafilter　`def.filter`
English entry · root `../`
[in graph](../#n=def.filter)　·　[Chinese page (authoritative)](./def.filter.md)

1. $\emptyset \notin \mathcal{F}$, $X \in \mathcal{F}$;
2. upward closed: $F \in \mathcal{F}$ and $F \subseteq G$ $\implies$ $G \in \mathcal{F}$;
3. closed under finite intersections: $F, G \in \mathcal{F}$ $\implies$ $F \cap G \in \mathcal{F}$.

**Convergence**: $\mathcal{F} \to x$ if every neighbourhood of $x$ belongs to $\mathcal{F}$ (i.e. $\mathcal{N}(x) \subseteq \mathcal{F}$).

An **ultrafilter** is a maximal filter. Equivalently, for every $A \subseteq X$, **exactly one** of $A$ and $X \setminus A$ belongs to $\mathcal{U}$.

**Ultrafilter lemma**: every filter is contained in an ultrafilter (using Zorn's lemma, `lem.zorn`).

> continued in nodes/def.filter.en.3.md
