# 固态张量积　`thm.solid-tensor`　·　说明
根 `../`

⭐ 这是整套理论**要造的那个东西**：一个能和「补全」相容的张量积。对照：经典的 $\mathbb{Z}_p \hat\otimes \mathbb{R}$ 没有好定义，而 $\mathbb{Z}_p \otimes^{L\blacksquare} \mathbb{R} = 0$（见 `ex.solid-tensor-computations`）。

⚠ 唯一性来自「保余极限的函子由自由对象上的值决定」；存在性要验证 $(M \otimes N)^{\blacksquare} \to (M^{\blacksquare} \otimes N^{\blacksquare})^{\blacksquare}$ 是同构，归约到 $M = \mathbb{Z}[S]$、$N = \mathbb{Z}[T]$ 后用 `cor.solid-compact-generators` 的 (iv) 型计算。
