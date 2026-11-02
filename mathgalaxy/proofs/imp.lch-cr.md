# imp.lch-cr
`imp.lch-cr` · 推出 · strong 边 · 根 `../`

`def.locally-compact` 局部紧 Hausdorff 空间 → `def.completely-regular-space` 完全正则空间

局部紧 Hausdorff 空间已含 $T_{1}$，只需证 $T_{3.5}$。

设 $F$ 闭、$x \notin F$。因 $X \setminus F$ 是 $x$ 的开邻域、且 $x$ 有紧邻域，可取**紧邻域** $K \ni x$ 使 $K \subseteq X \setminus F$（把原来的紧邻域与 $X \setminus F$ 取交，紧集的闭子集仍紧）。于是 $K \cap F = \emptyset$。

记 $\partial K := K \setminus \mathring{K}$（紧集，闭）。$x \in \mathring{K}$ 故 $x \notin \partial K$。$K$ 作为紧 Hausdorff 空间是**正规**的（`thm.compact-hausdorff-normal`），于是由 Urysohn 引理存在连续 $h : K \to [0,1]$ 使

$$h(x) = 0, \qquad h|_{\partial K} \equiv 1 .$$

> 续见 proofs/imp.lch-cr.2.md
