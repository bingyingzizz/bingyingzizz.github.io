# 左不变顶次形式处处非零 $\implies$ Lie 群可定向
`imp.lieg-orientable` · 推出 · strong 边 · 根 `../`

`def.lie-group` Lie 群 + `def.left-invariant-form` 左不变形式 + `prop.volume-form-orientation` 定向与体积形式 → `prop.lie-group-orientable` Lie 群可定向

设 $\dim G = n$，取 $\mathfrak{g}^{\ast} = T_{e}^{\ast}G$ 中任一非零元素 $\alpha$，并令 $\omega$ 为它的左平移：$\omega_{g} := L_{g^{-1}}^{\ast}\alpha$（`def.left-invariant-form` 的构造；左不变性即 $L_{h}^{\ast}\omega = \omega$）。

**处处非零**：$L_{g^{-1}}$ 是微分同胚，$L_{g^{-1}}^{\ast}$ 是 $n$ 维空间 $\Lambda^{n}T_{g}^{\ast}G$ 上的线性同构，故把非零元送到非零元：$\omega_{g} \ne 0$ 对一切 $g \in G$。

> 续见 proofs/imp.lieg-orientable.2.md
