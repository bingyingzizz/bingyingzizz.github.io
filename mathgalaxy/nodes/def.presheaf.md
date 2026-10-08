# 预层　`def.presheaf`
预层（Presheaf）
layer 9 · 定义 · 预层与米田 · 范畴论

范畴 $\mathcal{C}$ 上的**（集合值）预层**是函子

$$T : \mathcal{C}^{\mathrm{op}} \longrightarrow \mathbf{Set}$$

预层之间的**态射**就是它们之间的自然变换。记法：对态射 $f : Y \to X$ 记 $f^{-1} = T(f) : T(X) \to T(Y)$；对 $s \in T(X)$ 记 $s|_Y = f^{-1}(s)$。

## 为什么成立（入边，证明在 proofs/）
- `def.functor` 函子：用到了定义 函子　proofs/def-dep.functor-presheaf.md
- `def.category` 范畴：用到了定义 范畴　proofs/def-dep.category-presheaf.md

## 它能推出什么 / 谁在用它
- 被 `lem.presheaf-mono-pointwise` 预层态射的单满按点检验 用
- 被 `def.slice-category` 切片范畴 用
- 被 `def.sieve` 筛 用
- 被 `def.grothendieck-topology` Grothendieck 拓扑 用
- 被 `def.sheaf` 层 用
- 被 `def.canonical-topology` 标准拓扑 用
- 被 `def.abelian-sheaf` 阿贝尔层 用

> 说明见 `notes/def.presheaf.md`
