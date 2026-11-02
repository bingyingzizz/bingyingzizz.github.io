# 凸闭集投影 $\implies$ 闭子空间的正交投影
`imp.fa-projconvex-subspace` · 推出 · strong 边 · 根 `../`

`thm.projection-convex` 凸闭集的最近点 → `thm.projection-subspace` 闭子空间的正交投影

闭子空间是凸闭集，故 $P_E$ 存在唯一，变分不等式给 $\operatorname{Re}\langle x - P_E x, z - P_E x\rangle \le 0$（$z \in E$）。
把 $z$ 换成 $P_E x \pm z$（$z \in E$）得 $\operatorname{Re}\langle x - P_E x, z\rangle = 0$；再换成 $iz$ 得虚部也为零。故 $x - P_E x \perp E$。
线性：$\alpha x_1 + \beta x_2 - \alpha P x_1 - \beta P x_2 \perp E$，而 $\alpha P x_1 + \beta P x_2 \in E$，由唯一性即得。界：$\|x\|^2 = \|x - P_E x\|^2 + \|P_E x\|^2$。分解：$x \in E + E^\perp$，且两者交为零。$\blacksquare$

> 这一步把「变分不等式」翻译成「正交」，也是 Riesz 表示的唯一工具。
