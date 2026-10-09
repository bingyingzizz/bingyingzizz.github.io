# 局部化的 Hom 是滤过余极限　`prop.localization-hom-colim`
$\operatorname{Hom}_{\mathrm{ho}}(X,Y) = \varinjlim_{X' \to X \in W} \operatorname{Hom}(X', Y)$
layer 15 · 命题 · 范畴与图 · 范畴论

设小范畴 $\mathcal{C}$ 关于 $W$ 容许**右分式演算**。则

$$\operatorname{Hom}_{\mathrm{ho}(\mathcal{C})}(X, Y) \;=\; \varinjlim_{X' \to X \in W} \operatorname{Hom}_{\mathcal{C}}(X', Y),$$

下标遍历所有 $w : X' \to X$（$w \in W$），沿这些 $w$ 取**滤过**余极限。

## 为什么成立（入边，证明在 proofs/）
- `def.localization` 局部化：用到了定义 局部化　proofs/def-dep.lochom-localization.md
- `prop.calculus-of-fractions` 分式演算下的局部化：用到了定义 分式演算下的局部化　proofs/def-dep.lochom-fractions.md

> 说明见 `notes/prop.localization-hom-colim.md`
