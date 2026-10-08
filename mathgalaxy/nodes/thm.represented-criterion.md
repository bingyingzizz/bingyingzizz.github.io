# 表示的两个定义等价　`thm.represented-criterion`
表示 $\iff$ 与 $h^{X}$ 同构
layer 14 · 定理 · 预层与米田 · 范畴论

函子 $F : \mathcal{C} \to \mathbf{Set}$ 被 $X \in \mathcal{C}$ 表示 $\iff$ $h^{X} \cong F$。
> 陈述续见 `nodes/thm.represented-criterion.2.md`


## 为什么成立（入边，证明在 proofs/）
- `lem.yoneda` 米田引理：米田引理 $\implies$ 表示的两个定义等价　proofs/imp.yoneda-criterion.md
- `def.representable` 表示函子：用到了定义 表示函子　proofs/def-link.representable-criterion.md
- `def.representable` 表示函子：用到了定义 表示函子　proofs/def-dep.representable-criterion.md

## 说明
这条把「表示」的两种说法接上了：万有元素是**元素层**的说法，$h^{X} \cong F$ 是**函子层**的说法。实际验证时常走前者（挑出那个 $s$ 就完事），实际使用时常走后者（同构可以直接搬运算）。
