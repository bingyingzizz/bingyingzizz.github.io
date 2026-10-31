# 标架联络 $\implies$ 曲面上有一个仿射联络
`imp.tu-surface-connection` · 推出 · strong 边 · 根 `../`

`def.connection-form` 联络形式 + `def.moving-frame` 活动标架 → `def.affine-connection` 仿射联络

设 $S\subseteq\mathbb{R}^{3}$ 是正则曲面，$\bar\nabla$ 是 $\mathbb{R}^{3}$ 的平坦联络（$\bar\nabla_{X}Y = \mathrm{d}Y(X)$，把 $Y$ 当成 $\mathbb{R}^{3}$-值函数）。对切向量场定义（上标 $\top$ 表示投影到切平面）

$$\nabla_{X}Y := \bigl(\bar\nabla_{X}Y\bigr)^{\top}.$$

三条公理逐条验证：

- **对 $X$ 的 $C^{\infty}(S)$-线性**：来自 $\bar\nabla$ 的对应性质与投影的线性；
- **对 $Y$ 的 $\mathbb{R}$-线性**：同上；
- **Leibniz 律**：$\bar\nabla_{X}(fY) = (Xf)Y+f\bar\nabla_{X}Y$，而 $(Xf)Y$ 已经切向，投影后等式不变。

> 续见 proofs/imp.tu-surface-connection.2.md
