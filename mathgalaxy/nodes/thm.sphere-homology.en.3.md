# homology of spheres　`thm.sphere-homology`
English entry · root `../`
[in graph](../#n=thm.sphere-homology)　·　[Chinese page (authoritative)](./thm.sphere-homology.md)

**$U, V$ is contractible.** For $U$, use the homotopy

$$H_{s}(x) := \frac{(1-s)x + sN}{\lVert (1-s)x + sN \rVert}\qquad (x \in U,\ s \in [0,1]).$$

The denominator is nonzero. Indeed, $(1-s)x + sN = 0$ forces $\lVert x \rVert = s/(1-s) = 1$, that is, $x = S$ (at the endpoint $s = 1$, the numerator is $N \ne 0$), whereas $S \notin U$. Thus $H_{0} = \mathrm{id}_{U}$ and $H_{1} \equiv N$, so $U$ is contractible. Similarly, $V$ is contractible. By homotopy invariance (`thm.homotopy-invariance`), all reduced homology groups of a contractible space vanish, so $\tilde{H}_{p}(U) = \tilde{H}_{p}(V) = 0$ for every $p$.

> continued in nodes/thm.sphere-homology.en.4.md
