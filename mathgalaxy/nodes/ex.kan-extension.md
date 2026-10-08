# Kan 延拓的两个例子　`ex.kan-extension`
余极限与右伴随都是 Kan 延拓
layer 12 · 命题 · 伴随与反射 · 范畴论

**(1)** 图 $D : I \to \mathcal{C}$ 有余极限 $X$ $\iff$ 沿投影 $p : I \to \mathbf{1}$ 的左 Kan 延拓 $p_{!}D : \mathbf{1} \to \mathcal{C}$ 存在，且取值为

$$(p_{!}D)(\ast) = \varinjlim_{i \in I} D(i) = X$$
> 陈述续见 `nodes/ex.kan-extension.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.kan-extension` Kan 延拓 + `def.limit` 极限 + `def.adjoint` 伴随函子：Kan 延拓 $\implies$ 余极限与右伴随都是它的特例　proofs/imp.kan-unifies.md
- `def.kan-extension` Kan 延拓：用到了定义 Kan 延拓　proofs/def-link.kan-ex.md
- `def.adjoint` 伴随函子：用到了定义 伴随函子　proofs/def-link.adjoint-kan-ex.md
- `def.limit` 极限：用到了定义 极限　proofs/def-link.limit-kan-ex.md

- …另有入边，续页见 `nodes/ex.kan-extension.3.md`

## 说明
两条合起来看：**余极限和右伴随都是 Kan 延拓的特例**。Kan 延拓是这一整团的统一出口 —— 前面分散的定义（极限、伴随、反射）在其中都能各就各位。
