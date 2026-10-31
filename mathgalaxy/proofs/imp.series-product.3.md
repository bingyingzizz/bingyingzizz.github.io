# 重排不变 + 二重和 $\implies$ Cauchy 乘积公式
`imp.series-product` · 推出 · strong 边 · 根 `../`

`def.absolute-convergence` 绝对收敛 + `thm.rearrangement` 重排不变性 → `thm.series-product` Cauchy 乘积

**反例（不绝对收敛时失败）**：取 $a_n = b_n = \frac{(-1)^{n}}{\sqrt{n+1}}$，两个级数由 Abel–Dirichlet 收敛，但 $c_n = (-1)^{n}\sum_{k \le n} \frac{1}{\sqrt{(k+1)(n-k+1)}}$ 的绝对值 $\ge \frac{2(n+1)}{n+2} \to 2$，故 $c_n \not\to 0$，乘积级数发散。∎

> 第 2 步把「一维绝对收敛」升级成「二重绝对收敛」，这一步是全部技术的来源：二重和可以按任何顺序累加 —— 包括按对角线。
