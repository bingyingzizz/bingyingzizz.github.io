# 良序定理　`thm.wellordering`
良序定理 / 良序原理（Well-Ordering Theorem, Zermelo 1904）
layer 9 · 定理 · 选择原理 · 集合论+序理论

每个集合都能被赋予一个良序：

$$\forall X \exists\preceq ( \preceq\text{ 是} X\text{ 上的良序关系} )$$

换句话说：任何集合 $X$ 都与某个序数等势。

特别地，每个集合都有基数；实数集上存在良序（但这个良序无法被显式写出）。

## 为什么成立（入边，证明在 proofs/）
- `ax.choice` 选择公理：选择公理 $\iff$ 良序定理　proofs/eq.ac-wo.md
- `lem.zorn` 佐恩引理：良序定理 $\iff$ 佐恩引理　proofs/eq.wo-zorn.md
- `thm.recursion-wellorder` 超限递归：用到了定义 超限递归　proofs/def-link.recursion-wellordering.md
- `def.wellorder` 良序集：用到了定义 良序集　proofs/def-link.wo-wellorder.md

## 它能推出什么 / 谁在用它
- ⟺ `ax.choice` 选择公理
- ⟺ `lem.zorn` 佐恩引理

- …另有出边，续页见 `nodes/thm.wellordering.2.md`

refs: Zermelo (1904)；Kunen, Set Theory, I.12

> 说明见 `notes/thm.wellordering.md`
