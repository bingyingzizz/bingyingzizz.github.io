# Lie 群　`def.lie-group`　·　续页（第 2 页）
[在星图里打开](../#n=def.lie-group)　·　第 1 页 [nodes/def.lie-group.md](./def.lie-group.md)

## 陈述（续）
1. **群**结构（`def.group`）；
2. **有限维光滑流形**结构（`def.smooth-manifold`）；
使**乘法** $m : G \times G \to G$（$m(g,h) := gh$，$G \times G$ 取乘积流形结构）与**取逆** $i : G \to G$（$i(g) := g^{-1}$）都是光滑映射。

对 $g \in G$ 定义**左平移**与**右平移**
$$L_{g} : G \to G,\quad L_{g}(h) := gh ;\qquad R_{g} : G \to G,\quad R_{g}(h) := hg .$$

两者都是微分同胚（逆分别是 $L_{g^{-1}}$、$R_{g^{-1}}$），且 $L_{g} \circ L_{h} = L_{gh}$。
**例**：$\operatorname{GL}(n,\mathbb{R}) = \{A : \det A \ne 0\}$（$\mathbb{R}^{n^{2}}$ 的开子集，故是 $n^{2}$ 维流形）；$\operatorname{SL}(n,\mathbb{R})$、$\operatorname{O}(n)$、$\operatorname{SO}(n)$、$
\operatorname{U}(n)$（由方程切出来，见 `thm.regular-level-set`）；$(\mathbb{R}^{n},+)$；$S^{1} \subseteq \mathbb{C}^{\times}$；任意离散群（$0$ 维）。

> 续见 [nodes/def.lie-group.3.md](./def.lie-group.3.md)
