# Fréchet 导数　`thm.frechet-derivative`　·　说明
根 `../`

- **逆映射定理（Banach 版）**（`thm.inverse-function-banach`）：$f'(a)$ **可逆**（作为 $B(E,F)$ 的元素，从而 $E \cong F$）+ 连续可微 $\implies$ $f$ 在 $a$ 附近是局部同胚。那条定理的假设就写在这个导数上。

⚠️ **与另外两个「导数」的分工**：`def.derivative` 是一元实函数；`def.total-differential` 是 $\mathbb{R}^{n} \to \mathbb{R}^{m}$ 的全微分（Jacobian 矩阵）；流形之间的微分是 `def.differential-map`（切空间之间的线性映射）。本节点是**赋范空间之间**的版本 —— 它把前两个都收成特例（有限维时 $f'(a)$ 就是 Jacobian 矩阵）。

⚠️ **高阶导数**要小心：$f'' (a)$ 是 $B(E, B(E,F)) \cong B(E \times E, F)$ 的元素（双线性型），不是「二阶矩阵」。赋范空间上写 Taylor 公式（`thm.taylor`）时必须按这个理解。
