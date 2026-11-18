# Mayer–Vietoris sequence in homology　`thm.mv-homology`
English entry · root `../`
[in graph](../#n=thm.mv-homology)　·　[Chinese page (authoritative)](./thm.mv-homology.md)

**Step 5. Splitting into two pieces.** A chain is small if and only if it belongs to $S_{*}(U) + S_{*}(V)$. Thus there is a short exact sequence of chain complexes

$$0 \to S_{*}(U \cap V) \to S_{*}(U) \oplus S_{*}(V) \to S_{*}(U) + S_{*}(V) \to 0,$$

with maps $a \mapsto (a, -a)$ and $(a, b) \mapsto a + b$. For exactness, observe that $S_{*}(U) \cap S_{*}(V) = S_{*}(U \cap V)$ (the image of each simplex lies in both $U$ and $V$, hence in their intersection). Surjectivity follows by definition, and the kernel follows from $a + b = 0$, that is, $b = -a$.

> continued in nodes/thm.mv-homology.en.14.md
