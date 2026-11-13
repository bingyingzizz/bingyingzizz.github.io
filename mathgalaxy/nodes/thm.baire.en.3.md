# Baire category theorem　`thm.baire`
English entry · root `../`
[in graph](../#n=thm.baire)　·　[Chinese page (authoritative)](./thm.baire.md)

3. **Pick a point in the nested closed balls**: radius $\varepsilon_n \to 0$, and $X$ is complete, so $\bigcap_n \overline{B(x_n, \varepsilon_n)} \ne \emptyset$; take a point $y$ in it.

(Here "the radii tend to $0$" cannot be dropped: completeness only guarantees a common point for nested closed balls whose radii tend to $0$.)

4. **Finish**: for every $n$, $y \in \overline{B(x_n, \varepsilon_n)} \subseteq B_0 \cap O_n$, so $y \in B_0$ and $y \in \bigcap_n O_n$.

$B_0$ was arbitrary, so $\bigcap_n O_n$ meets every nonempty open set, hence is dense.

∎

⭐ All three equivalent formulations should be usable; passing between them is just taking complements.

> continued in nodes/thm.baire.en.4.md
