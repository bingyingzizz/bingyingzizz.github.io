# Grothendieck Topology　`def.grothendieck-topology`
English entry · root `../`
[in graph](../#n=def.grothendieck-topology)　·　[Chinese page (authoritative)](./def.grothendieck-topology.md)

1. $h_{X} \in J(X)$;
2. **Pullback stability**: $R \in J(X)$, $f : Y \to X$ $\implies$ $f^{*}(R) := R \times_{h_{X}} h_{Y} \in J(Y)$;
3. **Transitivity**: for $R, R' \subseteq h_{X}$, if $R' \in J(X)$ and for every $f \in R'(Y)$ one has $f^{*}(R) \in J(Y)$, then $R \in J(X)$.

A category with a Grothendieck topology is called a **site**.

## Notes · **draft**
$J(X)$ is a **filter** in the poset of all sieves: nonempty; closed under intersections ($R, R' \in J(X) \implies R \cap R' \in J(X)$); closed under larger sieves ($R \subseteq R'$, $R \in J(X) \implies R' \in J(X)$).

> continued in nodes/def.grothendieck-topology.en.3.md
