# 单位球紧 ⟺ 有限维　`thm.riesz-ball-compact`　·　说明
根 `../`

「$\Longleftarrow$」：有限维时所有范数等价（`thm.norm-equiv-finite-dim`），于是可以用 $\|\cdot\|_\infty$ 的坐标球来判断紧性；

而坐标球 $\overline{B}^{\infty}(0,1)$ 是有界闭集（实情形就是 $[-1,1]^{n}$；复情形是单位多圆柱，看作 $\mathbb{R}^{2n}$ 的闭有界集），由 Heine–Borel（`cor.heine-borel`）紧。

∎

「$\implies$」：若 $\dim E = \infty$，用 Riesz 引理（`lem.almost-orthogonal`）递归造单位向量 $\|e_n - e_m\| \ge 1/2$（$n \ne m$），这样的序列没有收敛子列，于是闭单位球不列紧、因而不紧。



⭐ 这一条是「有限维  当且仅当  局部紧」的一半：有限维赋范空间局部紧，无穷维的**从不**局部紧。它也是「有界闭集紧」只在有限维成立的精确版本 —— 无穷维里 Heine–Borel 失效。
