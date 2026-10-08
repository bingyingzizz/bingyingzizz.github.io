# 米田引理　`lem.yoneda`
米田引理（Yoneda Lemma）
layer 13 · 引理 · 预层与米田 · 范畴论

设 $F : \mathcal{C} \to \mathbf{Set}$ 是函子，$X \in \mathcal{C}$，并记

$$h^{X} = \operatorname{Hom}_{\mathcal{C}}(X, -) : \mathcal{C} \to \mathbf{Set}$$

则存在自然双射

$$\operatorname{Hom}(h^{X}, F) \;\cong\; F(X), \qquad \alpha \mapsto \alpha_{X}(1_{X})$$

即「全体自然变换」与「$F(X)$ 的元素」一一对应。

## 为什么成立（入边，证明在 proofs/）
- `def.representable` 表示函子：用到了定义 表示函子　proofs/def-link.representable-yoneda.md
- `def.representable` 表示函子：用到了定义 表示函子　proofs/def-dep.representable-yoneda.md
- `def.natural-transformation` 自然变换：用到了定义 自然变换　proofs/def-dep.nat-yoneda.md
- `def.functor` 函子：用到了定义 函子　proofs/def-dep.functor-yoneda.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.represented-criterion` 表示的两个定义等价
- ⇒ `prop.yoneda-embedding` 米田嵌入

> 说明见 `notes/lem.yoneda.md`

- …另有出边，续页见 `nodes/lem.yoneda.2.md`
