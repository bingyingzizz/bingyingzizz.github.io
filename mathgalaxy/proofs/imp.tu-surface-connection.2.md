# 标架联络 $\implies$ 曲面上有一个仿射联络
`imp.tu-surface-connection` · 推出 · strong 边 · 根 `../`

`def.connection-form` 联络形式 + `def.moving-frame` 活动标架 → `def.affine-connection` 仿射联络

**无挠**：$\nabla_{X}Y-\nabla_{Y}X = \bigl([X,Y]\bigr)^{\top} = [X,Y]$（$[X,Y]$ 本来就切于 $S$）。**保度量**：$\langle\cdot,\cdot\rangle$ 是 $\mathbb{R}^{3}$ 的常度量、$\bar\nabla$ 保它，而投影不改变两个切向量的内积。所以 $\nabla$ 是 $S$ 上的 Levi-Civita 联络。

**与联络形式的关系**：取单位正交标架 $(e_{1},e_{2})$，则 $\bar\nabla_{X}e_{j} = \mathrm{d}e_{j}(X)$，于是

$$\nabla_{X}e_{j} = \bigl(\mathrm{d}e_{j}(X)\bigr)^{\top} = \sum_{k=1}^{2}\omega^{k}_{\ j}(X)\,e_{k},\qquad \omega^{k}_{\ j}(X) = \langle \mathrm{d}e_{j}(X),e_{k}\rangle ,$$

正是 `def.connection-form` 的联络形式（上标记分量、下标记被微分的标架向量）。∎

> 续见 proofs/imp.tu-surface-connection.3.md
